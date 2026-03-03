
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/jwt';

export async function POST(req: Request, { params }: { params: { id: string } }){
  const cookie = (req.headers as any).get('cookie') || '';
  const m = /jobguard_token=([^;]+)/.exec(cookie);
  if(!m) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const payload = verifyJwt(m[1]);
  if(!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { cvId } = await req.json();
  if(!cvId) return NextResponse.json({ error: 'Missing cvId' }, { status: 400 });
  const job = await prisma.job.findUnique({ where: { id: Number(params.id) } });
  if(!job) return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  const cv = await prisma.cV.findUnique({ where: { id: Number(cvId) } });
  if(!cv || cv.userId !== Number(payload.sub)) return NextResponse.json({ error: 'Invalid CV' }, { status: 400 });
  const app = await prisma.application.create({ data: { userId: Number(payload.sub), jobId: job.id, cvId: cv.id } });
  return NextResponse.json({ ok: true, application: app });
}
