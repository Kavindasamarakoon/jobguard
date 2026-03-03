
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function RegisterPage(){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState(''); const router=useRouter();
  async function onSubmit(e:any){ e.preventDefault(); setErr(''); const r=await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,password})}); const js=await r.json(); if(r.ok) router.push('/dashboard'); else setErr(js.error||'Registration failed'); }
  return (<div className="max-w-md mx-auto card"><div className="card-header"><div className="text-lg font-semibold">Create Account</div><div className="text-sm text-slate-600">Join JobGuard and stay safe while applying</div></div><form className="card-body space-y-3" onSubmit={onSubmit}>{err&&<div className="text-sm text-red-600">{err}</div>}<div><div className="text-sm mb-1">Full Name</div><input className="input" value={name} onChange={e=>setName(e.target.value)} required/></div><div><div className="text-sm mb-1">Email</div><input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></div><div><div className="text-sm mb-1">Password</div><input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></div><button className="btn-primary w-full">Create Account</button></form></div>);}
