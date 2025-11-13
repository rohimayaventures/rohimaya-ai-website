import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phoenix & Peacock Honors™ - Rohimaya Health AI',
  description: 'Gamified recognition system for healthcare excellence',
};

export default function HonorsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-4xl font-bold text-eclipseNavy">Phoenix & Peacock Honors™</h1>
      
      <p className="mb-8 text-xl font-semibold text-lunarBlue">
        Recognition-Driven Engagement for Healthcare Teams
      </p>
      
      <p className="mb-8 text-lg text-lunarBlue">
        Phoenix & Peacock Honors™ is a compliance-friendly gamification system that celebrates clinical excellence, safety initiatives, and team collaboration.
      </p>

      <hr className="my-8 border-t border-gray-300" />

      <h2 className="mb-6 text-3xl font-bold text-eclipseNavy">Honor Tiers</h2>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-phoenixGold">Bronze</h3>
        <p className="text-lunarBlue">Entry-level recognition for consistent performance and safety adherence.</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-peacockTeal">Silver</h3>
        <p className="text-lunarBlue">Intermediate honors for process improvement contributions and peer mentorship.</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-phoenixGold">Gold</h3>
        <p className="text-lunarBlue">Advanced recognition for innovation, quality leadership, and patient advocacy.</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-peacockTeal">Platinum</h3>
        <p className="text-lunarBlue">Elite honors for transformational impact and sustained excellence.</p>
      </div>

      <hr className="my-8 border-t border-gray-300" />

      <h2 className="mb-6 text-3xl font-bold text-eclipseNavy">Earning Events</h2>

      <p className="mb-4 text-lunarBlue">Staff earn honors through:</p>

      <ul className="mb-8 list-disc space-y-2 pl-6 text-lunarBlue">
        <li><strong>Safety Milestones</strong>: Zero falls, medication errors, or HAIs over time periods</li>
        <li><strong>Efficiency Gains</strong>: Completing handoffs ahead of schedule consistently</li>
        <li><strong>Peer Nominations</strong>: Recognition from colleagues for collaboration and support</li>
        <li><strong>Patient Feedback</strong>: High satisfaction scores and positive comments</li>
        <li><strong>Continuous Learning</strong>: Completing training modules and certifications</li>
        <li><strong>Innovation</strong>: Proposing and implementing workflow improvements</li>
      </ul>

      <hr className="my-8 border-t border-gray-300" />

      <h2 className="mb-6 text-3xl font-bold text-eclipseNavy">Leaderboards & Recognition</h2>

      <ul className="mb-8 list-disc space-y-2 pl-6 text-lunarBlue">
        <li><strong>Unit-Level Boards</strong>: Foster healthy team competition</li>
        <li><strong>Individual Achievements</strong>: Personal progress tracking and badges</li>
        <li><strong>Monthly Spotlights</strong>: Featured stories of honor recipients</li>
        <li><strong>Rewards Integration</strong>: Tie honors to professional development opportunities, bonuses (where permitted), or gift programs</li>
      </ul>

      <hr className="my-8 border-t border-gray-300" />

      <h2 className="mb-6 text-3xl font-bold text-eclipseNavy">Compliance & Fairness</h2>

      <p className="mb-4 text-lunarBlue">Phoenix & Peacock Honors™ is designed with:</p>

      <ul className="mb-8 list-disc space-y-2 pl-6 text-lunarBlue">
        <li><strong>Union-Friendly Structure</strong>: No forced ranking or punitive metrics</li>
        <li><strong>Transparent Criteria</strong>: Clear, objective earning rules</li>
        <li><strong>Privacy Controls</strong>: Opt-in public sharing of achievements</li>
        <li><strong>Equal Opportunity</strong>: Accessible to all roles and experience levels</li>
      </ul>

      <hr className="my-8 border-t border-gray-300" />

      <h2 className="mb-6 text-3xl font-bold text-eclipseNavy">Impact</h2>

      <ul className="mb-8 list-disc space-y-2 pl-6 text-lunarBlue">
        <li><strong>Increase Staff Retention</strong>: Recognition reduces burnout and turnover</li>
        <li><strong>Boost Morale</strong>: Celebrate wins in high-pressure environments</li>
        <li><strong>Align Goals</strong>: Tie honors to organizational quality and safety targets</li>
        <li><strong>Data-Driven Insights</strong>: Track engagement trends and improvement areas</li>
      </ul>

      <hr className="my-8 border-t border-gray-300" />

      <div className="flex gap-4 text-lg">
        <a href="/contact" className="font-semibold text-peacockTeal hover:underline">Learn More</a>
        <span className="text-gray-400">·</span>
        <a href="/deck" className="font-semibold text-peacockTeal hover:underline">View Deck</a>
      </div>
    </div>
  );
}
