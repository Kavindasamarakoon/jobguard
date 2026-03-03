
'use client';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import { useRef, useState } from 'react';
const fetcher=(u:string)=>fetch(u).then(r=>r.json());

export default function JobDetail(){
  const { id } = useParams() as { id: string };
  const { data } = useSWR(`/api/jobs/${id}`, fetcher);
  const fileRef = useRef<HTMLInputElement>(null);
  const [cvId, setCvId] = useState<number|null>(null);
  const [err,setErr]=useState('');

  async function uploadCV(){
    setErr('');
    const f = fileRef.current?.files?.[0];
    if(!f){ setErr('Select a file'); return; }
    const fd = new FormData(); fd.append('file', f);
    const r = await fetch('/api/cv/upload', { method:'POST', body: fd });
    const js = await r.json();
    if(r.ok) setCvId(js.cv.id); else setErr(js.error || 'Upload failed');
  }
  async function apply(){
    setErr('');
    if(!cvId){ setErr('Upload/select a CV first.'); return; }
    const r = await fetch(`/api/jobs/${id}/apply`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ cvId }) });
    const js = await r.json();
    if(r.ok) alert('Application submitted!'); else setErr(js.error || 'Apply failed');
  }

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-header"><div className="text-lg font-semibold">{data?.job?.title || 'Job'}</div><div className="text-sm"><span className="font-medium">{data?.job?.company}</span> <span className="text-slate-500">• {data?.job?.location}</span></div></div>
        <div className="card-body"><div className="whitespace-pre-wrap">{data?.job?.description}</div></div>
      </div>

      <div id="apply" className="card">
        <div className="card-header"><div className="text-lg font-semibold">Apply</div><div className="text-sm text-slate-600">Login required. Use your uploaded CV to apply.</div></div>
        <div className="card-body space-y-3">
          {err && <div className="text-sm text-red-600">{err}</div>}
          <div><div className="text-sm font-medium mb-1">Upload CV</div><input ref={fileRef} type="file" className="input" accept=".pdf,.doc,.docx"/></div>
          <div className="flex justify-end gap-2"><button className="btn-ghost" onClick={uploadCV}>Upload</button><button className="btn-primary" onClick={apply}>Submit Application</button></div>
        </div>
      </div>
    </div>
  );
}
