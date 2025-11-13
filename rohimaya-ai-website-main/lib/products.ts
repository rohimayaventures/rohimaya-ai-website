export type ProductStatus = 'live' | 'coming_soon';

export type Product = {
  slug: string;
  name: string;
  status: ProductStatus;
  shortTagline: string;
  primaryUseCase: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: 'eclipselink',
    name: 'EclipseLink AI',
    status: 'live',
    shortTagline: 'Signal-driven clinical handoffs.',
    primaryUseCase: 'Shift-to-shift handoffs, prioritization, and risk surfacing.',
  },
  {
    slug: 'honors',
    name: 'Phoenix & Peacock Honors™',
    status: 'live',
    shortTagline: 'Recognition that actually moves the needle.',
    primaryUseCase: 'Clinical recognition, retention, and culture health.',
  },
  {
    slug: 'rounds-assist',
    name: 'Rounds Assist',
    status: 'coming_soon',
    shortTagline: 'Smarter bedside rounds for busy charge nurses.',
    primaryUseCase: 'Bedside rounds workflows, fall prevention, and escalation support.',
  },
  {
    slug: 'intake-navigator',
    name: 'Intake Navigator',
    status: 'coming_soon',
    shortTagline: 'Safer, smoother patient intake.',
    primaryUseCase: 'Admission checklists, risk flags, and smoother transitions of care.',
  },
  {
    slug: 'signal-watch',
    name: 'SignalWatch',
    status: 'coming_soon',
    shortTagline: 'Real-time risk signals from the noise.',
    primaryUseCase: 'Continuous risk monitoring and alerting across units.',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
