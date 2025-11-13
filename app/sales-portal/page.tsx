'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHeader from '@/components/SectionHeader';

export default function SalesPortalPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/sales-portal/demo');
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md px-6 py-24">
      <SectionHeader eyebrow="Sales Team Access" title="Sales Portal" />

      <p className="mb-8 text-lunarBlue/80">
        Enter your password to access demo resources and sales materials.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-moonWhite">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-lunarBlue/30 bg-eclipseNavy/50 px-4 py-2 text-moonWhite focus:border-peacockTeal focus:outline-none"
            required
          />
        </div>

        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-peacockTeal px-6 py-3 font-medium text-eclipseNavy transition hover:bg-peacockTeal/90 disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Access Portal'}
        </button>
      </form>

      <p className="mt-6 text-sm text-lunarBlue/60">
        Don't have access?{' '}
        <a href="/contact" className="text-peacockTeal hover:underline">
          Contact sales
        </a>
      </p>
    </main>
  );
}
