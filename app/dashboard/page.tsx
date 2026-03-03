
'use client';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
const fetcher=(u:string)=>fetch(u,{cache:'no-store'}).then(r=>r.json());

export default function Dashboard(){
  const { data: user, mutate } = useSWR('/api/auth/me', fetcher);
  const [tab,setTab]=useState<'profile'|'cv'>('profile');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-sm text-slate-600">Welcome, {user?.name || 'user'}.</p>
        </div>
        <button className="btn-ghost" onClick={async()=>{await fetch('/api/auth/logout',{method:'POST'}); location.href='/'}}>Log out</button>
      </div>

      <div className="flex gap-2">
        <button className={`btn ${tab==='profile'?'bg-slate-900 text-white':'btn-ghost'}`} onClick={()=>setTab('profile')}>Profile</button>
        <button className={`btn ${tab==='cv'?'bg-slate-900 text-white':'btn-ghost'}`} onClick={()=>setTab('cv')}>CV & Matches</button>
      </div>

      {tab==='profile'? <ProfileCard user={user} onSaved={()=>mutate()} /> : <CvAndMatches />}
    </div>
  );
}

function ProfileCard({ user, onSaved }:{ user:any, onSaved:()=>void }){
  const [name,setName]=useState(user?.name||''); const [email,setEmail]=useState(user?.email||''); const [msg,setMsg]=useState('');
  const [curr,setCurr]=useState(''); const [npw,setNpw]=useState(''); const [cpw,setCpw]=useState(''); const [err,setErr]=useState('');

  useEffect(()=>{ setName(user?.name||''); setEmail(user?.email||''); },[user]);

  async function saveProfile(){
    setErr(''); setMsg('');
    const r = await fetch('/api/user/profile',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email})});
    const js = await r.json(); if(r.ok){ setMsg('Profile updated.'); onSaved(); } else setErr(js.error||'Failed');
  }
  async function changePassword(){
    setErr(''); setMsg('');
    if(npw!==cpw){ setErr('New passwords do not match'); return; }
    const r = await fetch('/api/user/password',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({currentPassword:curr,newPassword:npw})});
    const js = await r.json(); if(r.ok){ setMsg('Password changed.'); setCurr(''); setNpw(''); setCpw(''); } else setErr(js.error||'Failed');
  }

  return (
    <div className="card">
      <div className="card-header"><div className="text-lg font-semibold">Profile Settings</div><div className="text-sm text-slate-600">Update your info and password.</div></div>
      <div className="card-body grid gap-4 sm:grid-cols-2">
        {(msg||err) && <div className="sm:col-span-2 text-sm {err?'text-red-600':'text-green-700'}">{err || msg}</div>}
        <div><div className="text-sm mb-1">Full Name</div><input className="input" value={name} onChange={e=>setName(e.target.value)} /></div>
        <div><div className="text-sm mb-1">Email</div><input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div className="sm:col-span-2 flex justify-end gap-2"><button className="btn-ghost" onClick={()=>{setName(user?.name||'');setEmail(user?.email||'');}}>Reset</button><button className="btn-primary" onClick={saveProfile}>Save</button></div>
        <div className="sm:col-span-2 border-t pt-4 grid gap-4 sm:grid-cols-3">
          <div><div className="text-sm mb-1">Current Password</div><input className="input" type="password" value={curr} onChange={e=>setCurr(e.target.value)} /></div>
          <div><div className="text-sm mb-1">New Password</div><input className="input" type="password" value={npw} onChange={e=>setNpw(e.target.value)} /></div>
          <div><div className="text-sm mb-1">Confirm New Password</div><input className="input" type="password" value={cpw} onChange={e=>setCpw(e.target.value)} /></div>
          <div className="sm:col-span-3 flex justify-end"><button className="btn-primary" onClick={changePassword}>Change Password</button></div>
        </div>
      </div>
    </div>
  );
}

function CvAndMatches(){
  const [err,setErr]=useState(''); const [msg,setMsg]=useState('');
  const [list,setList]=useState<any[]>([]);
  const [skills,setSkills]=useState<string>('react, nextjs, python, sql, designer');

  async function refresh(){
    const r = await fetch('/api/cv/list'); const js=await r.json(); if(r.ok) setList(js.cvs||[]);
  }
  useEffect(()=>{ refresh(); },[]);

  async function upload(e:any){
    const f=e.target.files?.[0]; if(!f) return;
    const fd=new FormData(); fd.append('file', f);
    const r = await fetch('/api/cv/upload',{method:'POST', body: fd}); const js = await r.json();
    if(r.ok){ setMsg('CV uploaded.'); setErr(''); refresh(); } else { setMsg(''); setErr(js.error||'Upload failed'); }
  }
  async function remove(id:number){
    const r=await fetch(`/api/cv/delete/${id}`,{method:'DELETE'}); const js=await r.json();
    if(r.ok){ setMsg('CV deleted.'); refresh(); } else setErr(js.error||'Delete failed');
  }
  async function match(){
    const r = await fetch('/api/match/jobs',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ skills })});
    const js = await r.json();
    if(r.ok){ setMsg(`Found ${js.matches.length} matches`); setErr(''); (window as any).jobMatches=js.matches; alert(js.matches.map((m:any)=>`${m.title} @ ${m.company} (${m.score}%)`).join('\n')||'No matches'); }
    else setErr(js.error||'Match failed');
  }

  return (
    <div className="card">
      <div className="card-header"><div className="text-lg font-semibold">CV Upload & Matches</div><div className="text-sm text-slate-600">Upload your CV, edit skills, and find matching jobs.</div></div>
      <div className="card-body space-y-4">
        {(msg||err) && <div className={`text-sm ${err?'text-red-600':'text-green-700'}`}>{err||msg}</div>}
        <div><div className="text-sm mb-1">Upload CV</div><input type="file" className="input" accept=".pdf,.doc,.docx" onChange={upload} /></div>
        <div>
          <div className="text-sm mb-1">Skills (comma separated)</div>
          <textarea className="input min-h-[100px]" value={skills} onChange={e=>setSkills(e.target.value)} />
          <div className="flex justify-end mt-2"><button className="btn-primary" onClick={match}>Scan & Match Jobs</button></div>
        </div>
        <div>
          <div className="text-sm font-medium mb-1">Your CVs</div>
          <div className="grid gap-2">
            {list.map((c:any)=>(
              <div key={c.id} className="flex items-center justify-between rounded-xl border p-2">
                <div className="text-sm">{c.filename}</div>
                <div className="flex gap-2">
                  <a className="btn-ghost" href={c.path} target="_blank">View</a>
                  <button className="btn-ghost" onClick={()=>remove(c.id)}>Delete</button>
                </div>
              </div>
            ))}
            {list.length===0 && <div className="text-sm text-slate-500">No CVs uploaded yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
