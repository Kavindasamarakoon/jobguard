'use client';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url:string)=>fetch(url).then(r=>r.json());

export default function Home(){
  const { data: jobsData } = useSWR('/api/jobs', fetcher);
  const jobs = jobsData?.jobs || [];

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Latest Jobs</h1>
      <p className="opacity-80">Browse recently posted jobs. To post a job, go to your <Link href="/dashboard" className="underline">Dashboard</Link>.</p>

      {jobs.length===0 && <div className="opacity-70">No jobs yet. Post one from your Dashboard.</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((j:any)=>(
          <Link key={j.id} href={`/jobs/${j.id}`} className="border rounded-xl p-4 hover:shadow transition">
            <div className="font-semibold">{j.title}</div>
            <div className="text-sm opacity-80">{j.company}</div>
            <div className="text-xs opacity-70 mt-1">{j.location} • {j.type}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
