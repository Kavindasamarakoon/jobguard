
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PostPage(){
  const [title,setTitle]=useState('');
  const [company,setCompany]=useState('');
  const [location,setLocation]=useState('');
  const [type,setType]=useState('Full-time');
  const [description,setDescription]=useState('');
  const [err,setErr]=useState('');
  const router = useRouter();

  async function publish(){
    setErr('');
    const r = await fetch('/api/jobs', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ title, company, location, type, description }) });
    const js = await r.json();
    if(r.ok) router.push(`/jobs/${js.job.id}`); else setErr(js.error || 'Failed to publish');
  }

  return (
    <div className="card">
      <div className="card-header"><div className="text-lg font-semibold">Post a Job</div><div className="text-sm text-slate-600">Create a listing</div></div>
      <div className="card-body grid gap-4 sm:grid-cols-2">
        {err && <div className="sm:col-span-2 text-sm text-red-600">{err}</div>}
        <div><div className="text-sm mb-1">Title</div><input className="input" value={title} onChange={e=>setTitle(e.target.value)} /></div>
        <div><div className="text-sm mb-1">Company</div><input className="input" value={company} onChange={e=>setCompany(e.target.value)} /></div>
        <div><div className="text-sm mb-1">Location</div><input className="input" value={location} onChange={e=>setLocation(e.target.value)} /></div>
        <div><div className="text-sm mb-1">Employment Type</div><input className="input" value={type} onChange={e=>setType(e.target.value)} /></div>
        <div className="sm:col-span-2"><div className="text-sm mb-1">Description</div><textarea className="input min-h-[160px]" value={description} onChange={e=>setDescription(e.target.value)} /></div>
        <div className="sm:col-span-2 flex justify-end gap-2"><button className="btn-ghost" onClick={()=>{setTitle('');setCompany('');setLocation('');setType('Full-time');setDescription('');}}>Reset</button><button className="btn-primary" onClick={publish}>Publish</button></div>
      </div>
    </div>
  );
}
