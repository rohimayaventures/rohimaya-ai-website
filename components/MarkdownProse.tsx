'use client';

import { ReactNode } from 'react';

export default function MarkdownProse({ children }: { children: ReactNode }) {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-peacockTeal prose-a:text-peacockTeal prose-a:underline prose-strong:text-moonWhite">
      {children}
    </article>
  );
}
