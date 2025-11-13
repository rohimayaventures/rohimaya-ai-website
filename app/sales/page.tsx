'use client';

import { useState } from 'react';

export default function SalesLogin() {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr('');

    try {
      const r = await fetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw }),
      });

      if (r.ok) {
        window.location.href = '/sales/demo';
      } else {
        setErr('Incorrect password');
      }
    } catch {
      setErr('Connection error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md py-20 px-6">
      <h1 className="mb-4 text-3xl font-semibold text-moonWhite">Sales Portal</h1>
      <p className="mb-6 text-lunarBlue/80">
        Enter the password to access demo resources.
      </p>
      <form onSubmit={submit} className="space-y-3">
        <input
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full rounded border border-lunarBlue/30 bg-eclipseNavy/50 p-3 text-moonWhite placeholder:text-lunarBlue/50"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-peacockTeal px-4 py-3 font-medium text-eclipseNavy transition hover:bg-peacockTeal/90 disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Enter'}
        </button>
        {err && <p className="text-sm text-red-400">{err}</p>}
      </form>
    </main>
  );
}
