
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('jobguard_token')?.value;
  const pathname = req.nextUrl.pathname;

  // Protect only these routes:
  const protectedPrefixes = ['/dashboard', '/api/jobs/', '/api/cv', '/api/user', '/api/match'];
  const isApply = pathname.match(/^\/api\/jobs\/[0-9]+\/apply/);

  // Allow public GET to list and get jobs:
  if (pathname === '/api/jobs' && req.method === 'GET') return NextResponse.next();
  if (pathname.match(/^\/api\/jobs\/[0-9]+$/) && req.method === 'GET') return NextResponse.next();

  // Protect CV upload/list/delete, profile endpoints, job apply, and job POST
  const shouldProtect = isApply || pathname.startsWith('/dashboard') ||
                        pathname.startsWith('/api/cv') ||
                        pathname.startsWith('/api/user') ||
                        pathname.startsWith('/api/match') ||
                        (pathname === '/api/jobs' && req.method !== 'GET');

  if (shouldProtect && !token) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ['/dashboard','/api/:path*'] };
