
'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
export default function LoginPage(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState('');
  const router=useRouter(); const sp=useSearchParams(); const next=sp.get('next')||'/dashboard';
  async function onSubmit(e:any){ e.preventDefault(); setErr(''); const r=await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})}); const js=await r.json(); if(r.ok) router.push(next); else setErr(js.error||'Login failed'); }
  return (<div className="max-w-md mx-auto card"><div className="card-header"><div className="text-lg font-semibold">Login</div></div><form className="card-body space-y-3" onSubmit={onSubmit}>{err&&<div className="text-sm text-red-600">{err}</div>}<div><div className="text-sm mb-1">Email</div><input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></div><div><div className="text-sm mb-1">Password</div><input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></div><button className="btn-primary w-full">Sign In</button></form></div>);}
