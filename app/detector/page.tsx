
'use client';
import { useState } from 'react';
import Tesseract from 'tesseract.js';

export default function DetectorPage(){
  const [url,setUrl]=useState('');
  const [text,setText]=useState('');
  const [imgText,setImgText]=useState('');
  const [score,setScore]=useState<number|null>(null);
  const [signals,setSignals]=useState<string[]>([]);
  const [loading,setLoading]=useState(false);

  async function analyze(){
    setLoading(true);
    const r = await fetch('/api/detector/analyze', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ url, text: text || imgText }) });
    const js = await r.json();
    setLoading(false);
    if(r.ok){ setScore(js.score); setSignals(js.signals); } else { setScore(null); setSignals([js.error || 'Failed']); }
  }
  async function onImage(e:any){
    const f=e.target.files?.[0]; if(!f) return;
    const { data: { text: out } } = await Tesseract.recognize(f,'eng');
    setImgText(out);
  }
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="card lg:col-span-2">
        <div className="card-header"><div className="text-lg font-semibold">Fake Job Detector</div><div className="text-sm text-slate-600">Analyze URL/Text/Image</div></div>
        <div className="card-body space-y-4">
          <div><div className="text-sm mb-1">Job URL (optional)</div><input className="input" value={url} onChange={e=>setUrl(e.target.value)} /></div>
          <div><div className="text-sm mb-1">Job Description / Text</div><textarea className="input min-h-[140px]" value={text || imgText} onChange={e=>setText(e.target.value)} /></div>
          <div><div className="text-sm mb-1">Or upload an image (OCR)</div><input type="file" className="input" accept="image/*" onChange={onImage} /></div>
          <div className="flex justify-end"><button className="btn-primary" onClick={analyze} disabled={loading}>{loading? 'Analyzing...':'Analyze'}</button></div>
        </div>
      </div>
      <div className="card">
        <div className="card-header"><div className="text-lg font-semibold">Risk Result</div></div>
        <div className="card-body">
          {score===null? <p className="text-sm text-slate-600">No analysis yet.</p> : (
            <div className="space-y-3">
              <div className="flex items-end justify-between">
                <div><p className="text-sm text-slate-600">Likelihood of Fake</p><div className="text-2xl font-bold">{Math.round((score||0)*100)}%</div></div>
                <span className={`badge text-white ${(score||0)>=0.7? 'bg-red-600': (score||0)>=0.4? 'bg-amber-500':'bg-green-600'}`}>{(score||0)>=0.7? 'High Risk': (score||0)>=0.4? 'Suspicious':'Low Risk'}</span>
              </div>
              <div className="h-2 w-full rounded bg-slate-100"><div className="h-2 rounded bg-slate-900" style={{width:`${Math.round((score||0)*100)}%`}}/></div>
              <div><p className="text-sm font-medium mb-1">Signals</p><ul className="list-disc pl-5 text-sm">{signals.map((s,i)=>(<li key={i}>{s}</li>))}</ul></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
