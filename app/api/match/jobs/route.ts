
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/jwt';

export async function POST(req: Request){
  const cookie = (req.headers as any).get('cookie') || '';
  const m = /jobguard_token=([^;]+)/.exec(cookie);
  if(!m) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const p = verifyJwt(m[1]); if(!p) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { skills } = await req.json();
  const toks = (skills||'').toLowerCase().split(/[,\s]+/).filter(Boolean);
  const jobs = await prisma.job.findMany({ orderBy: { id: 'desc' } });
  const scored = jobs.map(j=>{
    const hay = `${j.title} ${j.description}`.toLowerCase();
    let hits = 0;
    toks.forEach(t=>{ if (hay.includes(t)) hits++; });
    const score = Math.min(100, Math.round((hits / Math.max(1, toks.length)) * 100));
    return { id: j.id, title: j.title, company: j.company, score };
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,10);
  return NextResponse.json({ matches: scored });
}
