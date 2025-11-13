import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const requiredPassword = process.env.SALES_PORTAL_PASS;

    if (password && requiredPassword && password === requiredPassword) {
      const res = NextResponse.json({ ok: true });
      res.cookies.set('rm_sales_ok', '1', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      return res;
    }

    return NextResponse.json({ ok: false }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}

// Optional: DELETE to logout
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete('rm_sales_ok');
  return res;
}
