
import { NextResponse } from 'next/server';
import { verifyJwt } from '@/lib/jwt';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request){
  const cookie = (req.headers as any).get('cookie') || '';
  const m = /jobguard_token=([^;]+)/.exec(cookie);
  if(!m) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const p = verifyJwt(m[1]); if(!p) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const cvs = await prisma.cV.findMany({ where: { userId: Number(p.sub) }, orderBy: { id: 'desc' } });
  return NextResponse.json({ cvs });
}
