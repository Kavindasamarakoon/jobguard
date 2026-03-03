
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export async function GET(req: Request){
  const url = new URL(req.url);
  const q = url.searchParams.get('q') || '';
  const jobs = await prisma.job.findMany({
    where: q? { OR: [{ title: { contains: q } }, { company: { contains: q } }, { location: { contains: q } }, { description: { contains: q } }] } : {},
    orderBy: { id: 'desc' }
  });
  return NextResponse.json({ jobs });
}
