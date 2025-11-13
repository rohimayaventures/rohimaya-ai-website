import { getMdxContent } from '@/lib/mdx';
import MarkdownProse from '@/components/MarkdownProse';

export const metadata = {
  title: 'Governance & Ethics - Rohimaya Health AI',
  description: 'Our commitment to responsible AI in healthcare',
};

export default async function GovernancePage() {
  const mdx = await getMdxContent('governance');
  
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
