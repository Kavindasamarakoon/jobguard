
'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ShieldAlert, Search } from 'lucide-react';

export default function Navbar(){
  const [q,setQ]=useState('');
  const [authed,setAuthed]=useState(false);
  const router=useRouter();
  const pathname=usePathname();
  const sp = useSearchParams();
  useEffect(()=>{ setAuthed(document.cookie.includes('jobguard_token=')); setQ(sp.get('q') || ''); },[pathname, sp]);
  function submit(e:any){ e.preventDefault(); const u=new URL(window.location.href); u.pathname='/'; if(q){u.searchParams.set('q',q);} else {u.searchParams.delete('q');} router.push(u.toString()); }
  return (
    <div className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-1 text-white"><ShieldAlert size={16}/><span className="font-semibold">JobGuard</span></Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link className="btn-ghost" href="/">Home</Link>
            <Link className="btn-ghost" href="/post">Post a Job</Link>
            <Link className="btn-ghost" href="/detector">Detector</Link>
            <Link className="btn-ghost" href="/extension">Download Extension</Link>
          </nav>
        </div>
        <form onSubmit={submit} className="relative hidden md:block">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2" size={16}/>
          <input className="input pl-8 w-80" placeholder="Search jobs..." value={q} onChange={e=>setQ(e.target.value)} />
        </form>
        <div className="flex items-center gap-2">
          {!authed? (<><Link href="/login" className="btn-ghost">Login</Link><Link href="/register" className="btn-primary">Register</Link></>):(<Link href="/dashboard" className="btn-primary">My Dashboard</Link>)}
        </div>
      </div>
    </div>
  );
}
