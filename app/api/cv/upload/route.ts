
import { NextResponse } from 'next/server';
import { verifyJwt } from '@/lib/jwt';
import { prisma } from '@/lib/prisma';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request){
  const cookie = (req.headers as any).get('cookie') || '';
  const m = /jobguard_token=([^;]+)/.exec(cookie);
  if(!m) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const payload = verifyJwt(m[1]);
  if(!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const fd = await req.formData();
  const file = fd.get('file') as File | null;
  if(!file) return NextResponse.json({ error: 'No file' }, { status: 400 });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const dir = path.join(process.cwd(),'public','uploads');
  await fs.mkdir(dir, { recursive: true });
  const safe = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g,'_')}`;
  const full = path.join(dir, safe);
  await fs.writeFile(full, buffer);
  const cv = await prisma.cV.create({ data: { userId: Number(payload.sub), filename: file.name, path: `/uploads/${safe}` } });
  return NextResponse.json({ cv });
}
