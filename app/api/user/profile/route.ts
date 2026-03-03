
import { NextResponse } from 'next/server';
import { verifyJwt } from '@/lib/jwt';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request){
  const cookie = (req.headers as any).get('cookie') || '';
  const m = /jobguard_token=([^;]+)/.exec(cookie);
  if(!m) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const p = verifyJwt(m[1]); if(!p) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const user = await prisma.user.findUnique({ where: { id: Number(p.sub) }, select: { id:true, name:true, email:true } });
  return NextResponse.json({ user });
}

export async function PUT(req: Request){
  try{
    const cookie = (req.headers as any).get('cookie') || '';
    const m = /jobguard_token=([^;]+)/.exec(cookie);
    if(!m) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const p = verifyJwt(m[1]); if(!p) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { name, email } = await req.json();
    const u = await prisma.user.update({ where: { id: Number(p.sub) }, data: { name, email } });
    return NextResponse.json({ ok: true, user: { id: u.id, name: u.name, email: u.email } });
  }catch(e:any){ return NextResponse.json({ error: 'Server error' }, { status: 500 }); }
}
