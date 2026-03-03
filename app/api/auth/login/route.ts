
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { signJwt } from '@/lib/jwt';

export async function POST(req: Request){
  try{
    const { email, password } = await req.json();
    if(!email || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    const user = await prisma.user.findUnique({ where: { email } });
    if(!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    const ok = await bcrypt.compare(password, user.password);
    if(!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    const token = signJwt({ sub: user.id, email: user.email, name: user.name });
    const res = NextResponse.json({ ok: true });
    res.cookies.set('jobguard_token', token, { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60*60*24*7 });
    return res;
  }catch{ return NextResponse.json({ error: 'Server error' }, { status: 500 }); }
}
