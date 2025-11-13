import { getMdxContent } from '@/lib/mdx';
import MarkdownProse from '@/components/MarkdownProse';

export const metadata = {
  title: 'Changelog - Rohimaya Health AI',
  description: 'Product updates, feature releases, and roadmap milestones',
};

export default async function ChangelogPage() {
  const mdx = await getMdxContent('changelog');
  
  if (!mdx) {
    return <div>Content not found</div>;
  }
  
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <MarkdownProse>
        {mdx.content}
      </MarkdownProse>
    </main>
  );
}
