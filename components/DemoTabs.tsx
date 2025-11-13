'use client';

import { useState } from 'react';

export type DemoTab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export default function DemoTabs({ tabs }: { tabs: DemoTab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  return (
    <div className="w-full">
      <div className="mb-6 flex gap-2 border-b border-lunarBlue/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition ${
              activeTab === tab.id
                ? 'border-b-2 border-peacockTeal text-peacockTeal'
                : 'text-lunarBlue/70 hover:text-moonWhite'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
}
