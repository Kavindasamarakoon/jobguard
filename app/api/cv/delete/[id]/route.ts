
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/jwt';
import { promises as fs } from 'fs';
import path from 'path';

export async function DELETE(req: Request, { params }: { params: { id: string } }){
  const cookie = (req.headers as any).get('cookie') || '';
  const m = /jobguard_token=([^;]+)/.exec(cookie);
  if(!m) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const p = verifyJwt(m[1]); if(!p) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const cv = await prisma.cV.findUnique({ where: { id: Number(params.id) } });
  if(!cv || cv.userId !== Number(p.sub)) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  try{
    const filePath = path.join(process.cwd(),'public', cv.path.replace('/',''));
    await fs.unlink(filePath).catch(()=>{});
  }catch{}
  await prisma.cV.delete({ where: { id: cv.id } });
  return NextResponse.json({ ok: true });
}
