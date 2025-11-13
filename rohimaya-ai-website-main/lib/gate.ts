import { cookies } from 'next/headers';

const SALES_COOKIE = 'rm_sales_ok';

export function salesAllowed(): boolean {
  const cookieStore = cookies();
  return cookieStore.get(SALES_COOKIE)?.value === '1';
}

export function setSalesAllowed(): void {
  const cookieStore = cookies();
  cookieStore.set(SALES_COOKIE, '1', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
}

export function investorAllowed(tokenFromUrl?: string): boolean {
  const required = process.env.INVESTOR_TOKEN || '';
  return !!required && tokenFromUrl === required;
}
