
import { NextResponse } from 'next/server';
import { verifyJwt } from '@/lib/jwt';
import { prisma } from '@/lib/prisma';
export async function GET(req: Request){
  const cookie = (req.headers as any).get('cookie') || '';
  const m = /jobguard_token=([^;]+)/.exec(cookie);
  if(!m) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const payload = verifyJwt(m[1]);
  if(!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const user = await prisma.user.findUnique({ where: { id: Number(payload.sub) }, select: { id:true, name:true, email:true } });
  if(!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(user);
}
