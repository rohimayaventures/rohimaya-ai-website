import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Protect /sales/demo - requires sales cookie
  if (pathname.startsWith('/sales/demo')) {
    const ok = req.cookies.get('rm_sales_ok')?.value === '1';
    if (!ok) {
      return NextResponse.redirect(new URL('/sales', req.url));
    }
  }

  // Protect /investors - requires token in URL
  if (pathname.startsWith('/investors')) {
    const token = searchParams.get('token');
    const required = process.env.INVESTOR_TOKEN || '';
    if (!required || token !== required) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/sales/demo/:path*', '/investors/:path*'],
};
