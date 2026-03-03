
import { NextResponse } from 'next/server';
import { verifyJwt } from '@/lib/jwt';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function PUT(req: Request){
  try{
    const cookie = (req.headers as any).get('cookie') || '';
    const m = /jobguard_token=([^;]+)/.exec(cookie);
    if(!m) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const p = verifyJwt(m[1]); if(!p) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { currentPassword, newPassword } = await req.json();
    const u = await prisma.user.findUnique({ where: { id: Number(p.sub) } });
    if(!u) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const ok = await bcrypt.compare(currentPassword || '', u.password);
    if(!ok) return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 });
    const hash = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({ where: { id: u.id }, data: { password: hash } });
    return NextResponse.json({ ok: true });
  }catch{ return NextResponse.json({ error: 'Server error' }, { status: 500 }); }
}
