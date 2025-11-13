# Rohimaya Health AI Website

**Clinical Handoffs, Reimagined**

Production-ready Next.js website for Rohimaya Health AI, featuring EclipseLink AI and Phoenix & Peacock Honors™ product showcases.

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **pnpm** 8+

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm typecheck  # Run TypeScript type checking
```

## 📁 Project Structure

```
rohimaya-ai-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   ├── page.tsx           # Homepage with Hero and Stats
│   ├── api/
│   │   └── health/        # Health check API route
│   ├── products/
│   │   ├── eclipselink/   # EclipseLink AI product page (MDX)
│   │   └── honors/        # Phoenix & Peacock Honors page (MDX)
│   ├── deck/              # Pitch deck materials
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Hero.tsx
│   ├── FeatureGrid.tsx
│   └── Stat.tsx
├── content/               # MDX content files
│   ├── overview.mdx
│   ├── eclipselink.mdx
│   └── honors.mdx
├── lib/                   # Utility functions
│   └── mdx.ts            # MDX loading helpers
├── public/                # Static assets
│   ├── logo.svg
│   └── favicon.ico
├── styles/
│   └── globals.css       # Global styles + Tailwind
└── .github/
    └── workflows/
        └── deploy.yml    # CI/CD pipeline
```

## 🎨 Brand Colors

| Color            | Hex       | Usage                        |
|------------------|-----------|------------------------------|
| Peacock Teal     | `#1a9b8e` | Primary accent, links, CTAs  |
| Phoenix Gold     | `#f4c430` | Secondary accent, highlights |
| Eclipse Navy     | `#1a2332` | Headers, dark backgrounds    |
| Lunar Blue       | `#2c3e50` | Body text                    |
| Moon White       | `#f8f9fa` | Light backgrounds            |

## 📝 Adding Content

### Create a New Product Page (MDX)

1. **Create MDX file** in `/app/products/your-product/page.mdx`:

```mdx
import FeatureGrid from '@/components/FeatureGrid'

export const metadata = {
  title: 'Your Product - Rohimaya Health AI',
  description: 'Product description',
}

# Your Product

Your content here...

<FeatureGrid
  features={[
    { title: 'Feature 1', description: 'Description' },
    { title: 'Feature 2', description: 'Description' },
  ]}
/>
```

2. **Add navigation link** in `/components/Navbar.tsx`:

```tsx
<Link href="/products/your-product">Your Product</Link>
```

3. **Add content reference** in `/content/your-product.mdx` (optional for standalone content management)

### Update Deck Materials

Add PDF/HTML files to `/public/deck/` and update links in `/app/deck/page.tsx`:

```tsx
{
  title: 'New Document',
  description: 'Description',
  type: 'PDF',
  href: '/deck/your-file.pdf',
}
```

## 🚢 Deployment

### 🌍 Cloudflare Pages (Primary Deployment)

**✨ Full SSR support with global edge rendering on rohimaya.ai**

The site is deployed via Cloudflare Pages dashboard with GitHub integration. Pushes to `main` automatically trigger deployments.

#### Build Configuration

In Cloudflare Pages dashboard:
- **Build Command:** `pnpm run pages:build`  
- **Build Output Directory:** `.vercel/output/static`
- **Root Directory:** (leave empty)

#### Local Testing

```bash
# Build for Cloudflare Pages
pnpm run pages:build

# Preview locally
pnpm run preview

# Deploy manually via CLI (optional)
pnpm run deploy
```

#### Custom Domain Setup

The site is configured with custom domain `rohimaya.ai`:
- 🌐 **https://rohimaya.ai** (production)
- DNS and SSL certificates are automatically managed by Cloudflare ✅
- 🌐 **https://www.rohimaya.ai** (www redirect)
- 🚀 **https://rohimaya-ai-website.pages.dev** (Cloudflare subdomain)

---

### Option 2: Vercel (Alternative)

1. **Connect repository** to Vercel
2. **Configure settings:**
   - Framework: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`
3. **Add secrets** (if needed):
   - No secrets required by default

**OR** use Vercel CLI:

```bash
pnpm add -D vercel
pnpm vercel
```

---

### Option 3: Azure Static Web Apps

1. **Create Azure Static Web App** resource
2. **Enable workflow** in `.github/workflows/deploy.yml`:
   - Uncomment the `deploy-azure` job
3. **Add GitHub secret:** `AZURE_STATIC_WEB_APPS_API_TOKEN`
4. **Update `next.config.mjs`** for static export:

```js
const nextConfig = {
  output: 'export',
  // ... rest of config
}
```

---

### Option 4: GitHub Pages (Fallback)

1. **Enable GitHub Pages** in repo settings (Source: GitHub Actions)
2. **Uncomment** the `deploy-github-pages` job in `.github/workflows/deploy.yml`
3. **Update `next.config.mjs`** for static export:

```js
const nextConfig = {
  output: 'export',
  basePath: '/rohimaya-ai-website', // If using project pages
  // ... rest of config
}
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```bash
# Optional: Add environment-specific configs
NEXT_PUBLIC_API_URL=https://api.rohimaya.health
```

### MDX Support

MDX is configured via `@next/mdx`. To add plugins, edit `next.config.mjs`:

```js
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
})
```

## 🧪 API Routes

### Health Check

**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-11-12T00:00:00.000Z"
}
```

## 📊 Content TODO

After scaffolding, update these content files with your actual copy:

- [ ] `/content/eclipselink.mdx` - Full EclipseLink AI product details
- [ ] `/content/honors.mdx` - Phoenix & Peacock Honors program details
- [ ] `/content/overview.mdx` - Company overview and mission
- [ ] `/public/deck/` - Add your pitch deck PDFs and HTML demos
- [ ] `/app/deck/page.tsx` - Update deck item links to match your files

## 🤝 Contributing

This is a production site. For changes:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally: `pnpm dev`
3. Run checks: `pnpm typecheck && pnpm lint`
4. Commit: `git commit -m "Description"`
5. Push and open PR: `git push origin feature/your-feature`

## 📄 License

See [LICENSE](LICENSE) file for details.

---

**Built with:**
- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)
- [pnpm](https://pnpm.io/)

**Questions?** Contact [info@rohimaya.ai](mailto:info@rohimaya.ai)