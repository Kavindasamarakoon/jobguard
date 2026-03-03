import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashSync } from 'bcryptjs';
import { signJwt } from '@/lib/jwt';

export async function POST(req: Request){
  const { name, email, password } = await req.json();
  if(!name || !email || !password){
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if(existing) return NextResponse.json({ error: 'Email already used' }, { status: 400 });

  const user = await prisma.user.create({
    data: { name, email, password: hashSync(password, 10) },
    select: { id:true, name:true, email:true }
  });

  const token = signJwt({ sub: String(user.id), email: user.email });
  const res = NextResponse.json({ user });
  res.cookies.set('jobguard_token', token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60*60*24*7
  });
  return res;
}
