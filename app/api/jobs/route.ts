
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/jwt';

export async function GET(req: Request){
  const url = new URL(req.url);
  const q = url.searchParams.get('q') || '';
  const jobs = await prisma.job.findMany({
    where: q? { OR: [
      { title: { contains: q, mode: 'insensitive' } },
      { company: { contains: q, mode: 'insensitive' } },
      { location: { contains: q, mode: 'insensitive' } },
      { description: { contains: q, mode: 'insensitive' } },
    ] } : {},
    orderBy: { id: 'desc' }
  });
  return NextResponse.json({ jobs });
}

export async function POST(req: Request){
  try{
    const cookie = (req.headers as any).get('cookie') || '';
    const m = /jobguard_token=([^;]+)/.exec(cookie);
    if(!m) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const payload = verifyJwt(m[1]);
    if(!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { title, company, location, type, description } = await req.json();
    if(!title || !company || !location || !type || !description) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    const job = await prisma.job.create({ data: { title, company, location, type, description, postedById: Number(payload.sub) } });
    return NextResponse.json({ job });
  }catch{ return NextResponse.json({ error: 'Server error' }, { status: 500 }); }
}
