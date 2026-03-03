
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

function toks(s:string){ return (s||'').toLowerCase().match(/[a-z]+/g) || []; }

async function score(text:string){
  const raw = await fs.readFile(path.join(process.cwd(),'detector','model.json'),'utf-8');
  const m = JSON.parse(raw);
  const alpha = 1;
  const fakeCounts = m.fake as Record<string, number>;
  const realCounts = m.real as Record<string, number>;
  const fakeTotal = Object.values(fakeCounts).reduce((a,b)=>a+b,0);
  const realTotal = Object.values(realCounts).reduce((a,b)=>a+b,0);
  const vocab = new Set([...Object.keys(fakeCounts), ...Object.keys(realCounts)]);
  let lpFake = Math.log(m.priors.fake);
  let lpReal = Math.log(m.priors.real);
  for(const t of toks(text)){
    const f = (fakeCounts[t]||0) + alpha;
    const r = (realCounts[t]||0) + alpha;
    lpFake += Math.log(f/(fakeTotal + alpha*vocab.size));
    lpReal += Math.log(r/(realTotal + alpha*vocab.size));
  }
  const max = Math.max(lpFake, lpReal);
  const pf = Math.exp(lpFake - max);
  const pr = Math.exp(lpReal - max);
  const probFake = pf/(pf+pr);
  const signals:string[] = [];
  if(/fee|pay.*to start|registration|deposit|gift card/i.test(text)) signals.push('Upfront fee / payment pattern');
  if(/whatsapp|telegram|gmail\.com/i.test(text)) signals.push('Personal chat/email contact');
  if(/\b\d{5,}\b|per week|per day/i.test(text)) signals.push('Unrealistic salary/time claims');
  if(signals.length===0) signals.push('Model-only verdict (no heuristics)');
  return { score: probFake, signals };
}

export async function POST(req: Request){
  try{
    const { url, text } = await req.json();
    let blob = text || '';
    if(url){
      try{
        const res = await fetch(url, { cache: 'no-store' });
        const html = await res.text();
        const plain = html.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ');
        blob = (blob + ' ' + plain).trim();
      }catch{}
    }
    if(!blob) return NextResponse.json({ error: 'No text to analyze' }, { status: 400 });
    const out = await score(blob);
    return NextResponse.json(out);
  }catch{ return NextResponse.json({ error: 'Server error' }, { status: 500 }); }
}
