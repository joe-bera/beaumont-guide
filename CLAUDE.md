# Beaumont Development Guide — Advanced Build Spec
## Claude Code Project Specification v2.0

---

## REPOSITORY

**GitHub:** `https://github.com/joe-bera/beaumont-guide`
**Live:** `https://beaumont-guide.vercel.app`
**Current State:** Single `index.html` with React via CDN + Babel. Needs full rebuild.

---

## QUICK START

```bash
# Clone the repository
git clone https://github.com/joe-bera/beaumont-guide.git
cd beaumont-guide

# Review the current index.html to understand existing features
# Then initialize the new Next.js project IN THIS REPO (replace the old file)
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Install dependencies
npm install

# Start dev server
npm run dev
```

**IMPORTANT:** The current repo has a single `index.html`. We are replacing it with a full Next.js application. Keep the old `index.html` as `legacy/index.html` for reference, then build the new app.

---

## PROJECT OVERVIEW

### What This Is
An interactive commercial real estate development guide for Beaumont, California — built by Apex Real Estate Services to serve as:
1. **Lead generation tool** for developers and investors
2. **Educational resource** for the entitlement/development process
3. **Market intelligence dashboard** with real CoStar data
4. **AI-powered municipal code assistant**
5. **Authority builder** positioning Apex as the Beaumont market expert

### Who Uses It
- Commercial real estate investors (1031 exchange buyers, private capital)
- Developers evaluating Beaumont for new projects
- Brokers and agents needing market data
- Apex team members for client presentations

### Brand Identity
- **Company:** Apex Real Estate Services (KW Commercial affiliate)
- **Primary Agent:** Robert Mendieta Jr., CCIM
- **Phone:** (951) 977-3251
- **Email:** robert@apex-res.com
- **Website:** https://apex-res.com
- **Colors:** Navy `#1B365D`, Gold `#C5A258`, Deep Navy `#0f2240`, Cream `#f8f7f4`
- **Fonts:** Playfair Display (headings), DM Sans (body)
- **Tone:** Professional, data-driven, authoritative but approachable

---

## TECH STACK

```
Framework:      Next.js 14+ (App Router, TypeScript)
Styling:        Tailwind CSS + custom design system (navy/gold palette)
Charts:         Recharts (already available in artifacts, lightweight)
Maps:           Google Maps Embed or Mapbox GL JS (for property locations)
AI Chat:        Anthropic Claude API (claude-sonnet-4-20250514)
Forms:          React Hook Form + server actions
Analytics:      Vercel Analytics (built-in)
Deployment:     Vercel (auto-deploy from GitHub)
Database:       None required initially (static data in TypeScript files)
                Future: Notion API or Supabase for dynamic content
```

---

## FILE STRUCTURE

```
beaumont-guide/
├── legacy/
│   └── index.html              # Old single-file version (keep for reference)
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg            # Social share image (1200x630)
│   └── apex-logo.png           # If available
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts, metadata, nav
│   │   ├── page.tsx            # Home/landing → redirects to /market
│   │   ├── market/
│   │   │   └── page.tsx        # Market Intelligence dashboard
│   │   ├── investment/
│   │   │   └── page.tsx        # Investment analysis & comps
│   │   ├── entitlements/
│   │   │   └── page.tsx        # 5-phase entitlement process
│   │   ├── growth/
│   │   │   └── page.tsx        # Infrastructure & development pipeline
│   │   ├── properties/
│   │   │   └── page.tsx        # Interactive property map + listings
│   │   ├── calculator/
│   │   │   └── page.tsx        # Deal analyzer / pro forma calculator
│   │   ├── documents/
│   │   │   └── page.tsx        # Forms, fee schedules, resources
│   │   ├── assistant/
│   │   │   └── page.tsx        # AI code assistant chat
│   │   ├── contact/
│   │   │   └── page.tsx        # Lead capture form
│   │   └── api/
│   │       ├── chat/
│   │       │   └── route.ts    # Anthropic API proxy (keeps key server-side)
│   │       └── contact/
│   │           └── route.ts    # Form submission handler
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Sticky header with nav
│   │   │   ├── Navigation.tsx  # Tab navigation (horizontal scroll on mobile)
│   │   │   ├── Footer.tsx      # Footer with attribution
│   │   │   └── CTABar.tsx      # Floating CTA bar
│   │   ├── market/
│   │   │   ├── MetricGrid.tsx  # 8-metric dashboard grid
│   │   │   ├── HistoricalChart.tsx  # Bar/line chart 2015-2030
│   │   │   ├── PricingTable.tsx     # Star rating + property type tables
│   │   │   └── SubmarketPosition.tsx
│   │   ├── investment/
│   │   │   ├── BuyerAnalysis.tsx    # Buyer breakdown + capital origin
│   │   │   ├── RecentSales.tsx      # Comps table with KW highlight
│   │   │   ├── TopOwners.tsx
│   │   │   └── MarketingAngles.tsx  # 5 content angles card
│   │   ├── entitlements/
│   │   │   ├── PhaseNavigator.tsx   # Interactive phase stepper
│   │   │   ├── PhaseDetail.tsx      # Steps + tips for active phase
│   │   │   └── ZoningReference.tsx  # Dropdown zoning quick ref
│   │   ├── growth/
│   │   │   ├── ProjectCards.tsx     # Infrastructure project list
│   │   │   └── ImpactMetrics.tsx    # 23M SF, 5400 jobs, $130M stats
│   │   ├── properties/
│   │   │   ├── PropertyMap.tsx      # Interactive map with markers
│   │   │   └── PropertyCard.tsx     # Individual listing card
│   │   ├── calculator/
│   │   │   ├── DealAnalyzer.tsx     # NOI, cap rate, cash-on-cash
│   │   │   └── ProForma.tsx         # Development pro forma
│   │   ├── chat/
│   │   │   ├── ChatContainer.tsx    # Full chat interface
│   │   │   ├── ChatBubble.tsx
│   │   │   └── SuggestedQuestions.tsx
│   │   └── ui/
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Table.tsx
│   │       ├── TipBox.tsx
│   │       ├── ProgressBar.tsx
│   │       └── MiniBarChart.tsx
│   ├── data/
│   │   ├── market-metrics.ts       # All CoStar Q1 2026 data
│   │   ├── historical-sales.ts     # 2015-2030 trend data
│   │   ├── pricing.ts              # Star rating + property type pricing
│   │   ├── recent-comps.ts         # Recent sales with KW flag
│   │   ├── owners.ts               # Top owners list
│   │   ├── infrastructure.ts       # Development projects
│   │   ├── entitlement-phases.ts   # 5-phase process data
│   │   ├── zoning.ts               # Zoning standards lookup
│   │   ├── documents.ts            # Document library links
│   │   ├── contacts.ts             # City department contacts
│   │   ├── properties.ts           # Active Apex listings in Beaumont
│   │   └── marketing-angles.ts     # 5 content marketing angles
│   ├── lib/
│   │   ├── utils.ts                # Formatting, cn() helper
│   │   └── anthropic.ts            # Claude API client
│   └── styles/
│       └── globals.css             # Tailwind config + custom properties
├── .env.local                      # ANTHROPIC_API_KEY (never commit)
├── .env.example                    # Template for env vars
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── vercel.json                     # Vercel config if needed
└── README.md
```

---

## FEATURE SPECIFICATIONS

### 1. Market Intelligence Dashboard (`/market`)

**Source data (all from CoStar Q1 2026 Beaumont/Hemet Retail):**

```typescript
// Market snapshot metrics
const MARKET_METRICS = [
  { label: "Total Asset Value", value: "$2.9B", delta: "-0.4% YoY", direction: "down" },
  { label: "12-Mo Sales Volume", value: "$46.8M", delta: "-38% vs 5yr avg", direction: "down" },
  { label: "Market Cap Rate", value: "6.7%", delta: "+20 bps YoY", direction: "up" },
  { label: "Market $/SF", value: "$245", delta: "-0.4% YoY", direction: "down" },
  { label: "Sale vs Asking", value: "-10.8%", delta: "Buyer's market", direction: "down" },
  { label: "Avg % Leased at Sale", value: "95.7%", delta: "Stabilized", direction: "up" },
  { label: "Median Months to Sale", value: "5.9", delta: "6 mo avg cycle", direction: "neutral" },
  { label: "IE Avg Cap Rate", value: "6.4%", delta: "30 bps spread", direction: "neutral" },
];
```

**Components:**
- 8-metric responsive grid with color-coded delta indicators (green up, red down, gray neutral)
- Interactive Recharts bar chart: $/SF trend 2015–2030F with forecast bars hatched/dashed
- Interactive Recharts bar chart: Cap Rate trend 2015–2030F
- Pricing by Star Rating table (4-5 Star, 3 Star, 1-2 Star)
- Pricing by Property Type table (General Retail, Strip Center, Power Center, Neighborhood Center)
- Submarket Competitive Position narrative with yield play callout
- Market Sentiment badge: "CAUTIOUS" with explanation text

**Design notes:**
- Charts should have hover tooltips showing exact values
- Gold accent on key callout numbers
- Tip boxes with amber/gold background for key insights

---

### 2. Investment Analysis (`/investment`)

**Components:**
- Buyer type breakdown: horizontal progress bars (60% Private, 40% Owner-User, <1% Institutional)
- Capital origin stat: Large "75%" in gold with explanation
- Recent significant sales table with KW Commercial row highlighted in amber
- Top owners by SF table with REIT/User/Private badges
- 5 content marketing angles in a gold-bordered card

**Data:**
```typescript
const RECENT_SALES = [
  { address: "3308 W Florida Ave, Hemet", price: "$6.9M", priceSF: "$4,548", capRate: "N/A", isKW: false },
  { address: "1535 E 2nd St, Beaumont (Raising Cane's)", price: "$3.7M", priceSF: "N/A", capRate: "4.8%", isKW: false },
  { address: "1100 E 6th St, Beaumont", price: "$1.7M", priceSF: "$142", capRate: "7.2%", isKW: true },
  { address: "2811 W Florida Ave, Hemet", price: "$2.8M", priceSF: "$198", capRate: "6.9%", isKW: false },
  { address: "1301 S State St, Hemet", price: "$1.4M", priceSF: "$165", capRate: "7.4%", isKW: false },
];
```

---

### 3. Entitlement Process (`/entitlements`)

**Components:**
- Phase stepper/navigator (1-5) — clickable, shows active phase
- Phase detail card with numbered steps, cost badge, timeline badge
- Insider tips in amber tip boxes
- Zoning quick reference with dropdown selector
- Zoning detail grid: Height, FAR, Setbacks, Parking, Permitted Uses

**Data:** 5 phases with 7 steps each, 3 tips each, plus 6 zoning categories with full development standards.

**Total timeline: 6–18 months | Cost: $85K–$465K**

---

### 4. Growth & Infrastructure Pipeline (`/growth`)

**Components:**
- Project cards with cost badges and status indicators
- Impact metrics: 3-column stat block (23M+ SF, 5,400 jobs, $130M+ infrastructure)
- Industrial-to-retail demand multiplier narrative

**Data:**
```typescript
const INFRASTRUCTURE = [
  { name: "Potrero Blvd Interchange Phase II", cost: "$79.3M", status: "Fully Funded", timeline: "Fall 2025" },
  { name: "Pennsylvania Ave Grade Separation", cost: "$50.4M", status: "CTC Funded", timeline: "2026–2028" },
  { name: "Beaumont Pointe", cost: "$1.5B", status: "Approved", timeline: "Multi-phase" },
  { name: "Downtown Revitalization", cost: "$14M+", status: "In Progress", timeline: "2025–2027" },
  { name: "Sports Park Renovations", cost: "TBD", status: "Construction", timeline: "Jul 2025" },
];
```

---

### 5. Interactive Property Map (`/properties`) — NEW

**This is a new feature not in the current version.**

Display Apex's active Beaumont/Hemet listings on an interactive map.

**Properties to include:**
```typescript
const PROPERTIES = [
  {
    address: "1100 E 6th St, Beaumont, CA",
    type: "Commercial",
    price: "Contact",
    size: "12,000 SF",
    zoning: "6th Street Mixed Use-Residential",
    lat: 33.9295,
    lng: -116.9714,
    status: "For Sale",
    link: "https://apex-res.com"
  },
  {
    address: "1101 E 1st St, Beaumont, CA",
    type: "Commercial Land",
    price: "$1,695,000",
    size: "4.81 Acres",
    zoning: "TOD",
    lat: 33.9310,
    lng: -116.9690,
    status: "For Sale",
    link: "https://apex-res.com"
  },
  // Add any other active listings
];
```

**Implementation options (pick simplest that works):**
1. Google Maps Embed with custom markers
2. Mapbox GL JS (free tier, more customizable)
3. Simple Leaflet.js with OpenStreetMap tiles (no API key needed — prefer this for simplicity)

**Each marker should show:** property card on click with address, price, size, zoning, link to full listing.

---

### 6. Deal Analyzer / Pro Forma Calculator (`/calculator`) — NEW

**This is a new feature not in the current version.**

Interactive investment calculator for retail properties in the Beaumont submarket.

**Inputs:**
- Purchase Price ($)
- Building Size (SF)
- Monthly Rent/SF ($)
- Vacancy Rate (%) — default 4.3% (submarket average)
- Operating Expenses (%) — default 35%
- Down Payment (%) — default 25%
- Loan Interest Rate (%) — default 6.5%
- Loan Term (years) — default 30

**Outputs (calculated in real-time):**
- Price per SF
- Gross Potential Income
- Effective Gross Income
- Net Operating Income (NOI)
- Cap Rate
- Debt Service (annual)
- Cash Flow (before tax)
- Cash-on-Cash Return
- Debt Service Coverage Ratio (DSCR)
- Comparison to submarket averages (6.7% cap rate, $245/SF)

**Design:** Two-column layout — inputs left, results right. Results update as user types. Highlight whether the deal is above/below submarket benchmarks using green/red indicators.

---

### 7. Documents & Forms (`/documents`)

Organized library of Beaumont planning documents with direct links.

**Categories:**
- Planning Applications
- Building Permits
- Fee Schedules & Resources
- Environmental & Land Development
- City Contacts

Links should open in new tab. Include icons for document types (PDF, web page).

---

### 8. AI Code Assistant (`/assistant`)

**CRITICAL: The API key must stay server-side.**

**Architecture:**
```
User → ChatContainer.tsx → POST /api/chat → Anthropic API → response
```

**API Route (`/api/chat/route.ts`):**
```typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: `You are a Beaumont, California municipal code and development expert for Apex Real Estate Services. Answer questions about zoning (Title 17), building codes, entitlement processes, CEQA, development standards, parking requirements, fees, and the Beaumont General Plan 2040. Be specific with code sections, numbers, and timelines. If you don't know the exact answer, say so and recommend contacting Beaumont Planning at (951) 769-8520. Always mention that Apex Real Estate Services can help navigate the process — contact Robert Mendieta Jr., CCIM at (951) 977-3251.

Key Beaumont zoning data:
- C-1 Neighborhood Commercial: 35ft height, 0.35 FAR
- C-2 General Commercial: 45ft height, 0.50 FAR
- M-1 Light Industrial: 45ft height, 0.55 FAR
- M-2 Heavy Industrial: 60ft height, 0.55 FAR
- MU-R Mixed Use: 55ft height, 2.0 FAR
- TOD Transit Oriented: 65ft height, 2.5 FAR, reduced parking by 25-50%
- Planning Commission: 2nd & 4th Tuesdays
- City Council: 1st & 3rd Tuesdays
- Development Impact Fees: ~$15K-$25K per 1,000 SF commercial
- Plan check: 8-10 weeks typical
- CUP processing: 2-4 months
- Fire flow: 1,500-3,000 GPM
- MSHCP compliance required in San Gorgonio Pass area

Active infrastructure:
- Potrero Interchange Phase II: $79.3M, fully funded, Fall 2025
- Pennsylvania Ave Grade Separation: $50.4M, CTC funded, 2026-2028
- Beaumont Pointe: $1.5B, 622 acres, 5.3M SF industrial/commercial, 5,400 jobs
- Downtown Revitalization: $14M+, in progress

Market data (CoStar Q1 2026):
- Market cap rate: 6.7% (IE avg 6.4%)
- Market $/SF: $245 (IE avg $290)
- 12-month volume: $46.8M
- Avg % leased at sale: 95.7%
- Sale vs asking: -10.8%`,
    messages,
  });

  return Response.json({
    content: response.content,
  });
}
```

**Chat UI features:**
- Streaming responses (use Anthropic streaming API)
- Suggested questions as clickable pills below input
- Chat history maintained in session state
- Auto-scroll to latest message
- Typing indicator animation
- Mobile-friendly full-height chat

---

### 9. Contact / Lead Capture (`/contact`) — NEW

Simple contact form that captures leads.

**Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Interest: dropdown (Investment, Development, Market Data, Partnership, Other)
- Message (textarea)

**On submit:** 
- Option A: Send email via Resend or SendGrid
- Option B: POST to GoHighLevel webhook (preferred — ask for webhook URL)
- Option C: Simple mailto link as fallback
- Show success state with "Robert will contact you within 24 hours"

---

## DESIGN SYSTEM

### Colors (Tailwind config)
```typescript
// tailwind.config.ts
colors: {
  navy: { DEFAULT: '#1B365D', deep: '#0f2240', light: '#2a4a7f' },
  gold: { DEFAULT: '#C5A258', light: '#f5ecd5', dark: '#a8893f' },
  cream: '#f8f7f4',
  // Keep default Tailwind colors for red/green/blue utilities
}
```

### Typography
```css
/* Import in globals.css or layout.tsx */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
```
- Headings: Playfair Display 700
- Body: DM Sans 400/500
- Data/numbers: DM Sans 700
- Labels: DM Sans 600, 11px, uppercase, letter-spacing 0.05em

### Component Patterns
- **Cards:** white bg, 12px radius, 1px border `#e8e5df`, subtle shadow
- **Gold cards:** 2px gold border for featured content
- **Section titles:** Playfair Display 18px, navy, 2px gold bottom border
- **Badges:** pill shape, 11px, colored backgrounds
- **Tables:** navy header row, alternating subtle stripes optional
- **Tip boxes:** amber/gold background (#fffbeb), gold border
- **Buttons:** navy primary, gold secondary, rounded-lg
- **Metric boxes:** cream bg, centered, large number + small label

### Responsive Breakpoints
- Mobile first
- `sm` (640px): 2-column metric grid
- `md` (768px): navigation expands, 2-column layouts
- `lg` (1024px): full desktop layout, max-width 1000px content

---

## SEO & META

```tsx
// In layout.tsx
export const metadata: Metadata = {
  title: 'Beaumont Development Guide | Apex Real Estate Services',
  description: 'Comprehensive Beaumont, CA commercial development guide with market intelligence, entitlement process, zoning data, deal analyzer, and AI assistant. CoStar Q1 2026 data.',
  openGraph: {
    title: 'Beaumont Development Guide',
    description: 'Market intelligence, entitlement roadmap, and AI code assistant for Beaumont commercial real estate.',
    url: 'https://beaumont-guide.vercel.app',
    siteName: 'Apex Real Estate Services',
    type: 'website',
  },
};
```

---

## ENVIRONMENT VARIABLES

```bash
# .env.local (DO NOT COMMIT)
ANTHROPIC_API_KEY=sk-ant-...

# Optional future integrations
# GHL_WEBHOOK_URL=https://...
# GOOGLE_MAPS_API_KEY=...
# RESEND_API_KEY=re_...
```

Create `.env.example`:
```bash
ANTHROPIC_API_KEY=your-anthropic-api-key-here
```

---

## DEPLOYMENT

The repo is already connected to Vercel at `beaumont-guide.vercel.app`.

**After building:**
1. Push to `main` branch
2. Vercel auto-deploys
3. Add `ANTHROPIC_API_KEY` in Vercel dashboard → Settings → Environment Variables

**Vercel settings needed:**
- Framework: Next.js (auto-detected)
- Build command: `next build`
- Output directory: `.next`
- Node version: 18+

---

## BUILD ORDER (PHASES)

### Phase 1: Foundation (Do First)
1. Initialize Next.js project in the repo
2. Set up Tailwind with custom color palette
3. Create the layout with Header, Navigation, Footer, CTABar
4. Create the `/market` page with all CoStar data
5. Create the `/investment` page
6. Verify deployment to Vercel works

### Phase 2: Core Pages
7. Create `/entitlements` with phase navigator + zoning reference
8. Create `/growth` with infrastructure projects
9. Create `/documents` with forms library + contacts
10. Create `/calculator` deal analyzer

### Phase 3: AI & Interactive
11. Create `/api/chat` route with Anthropic API
12. Create `/assistant` chat UI with streaming
13. Create `/properties` map page
14. Create `/contact` lead capture form

### Phase 4: Polish
15. Add page transitions / loading states
16. Mobile optimization pass
17. SEO meta tags for each page
18. README.md update
19. Final testing

---

## COMMIT CONVENTIONS

```
feat(market): add CoStar metric dashboard grid
feat(entitle): add interactive phase navigator
feat(chat): add Anthropic API streaming route
fix(nav): horizontal scroll on mobile
style(theme): update gold accent colors
chore(deps): add recharts dependency
docs(readme): add setup instructions
```

---

## IMPORTANT NOTES

- **Never expose the Anthropic API key client-side.** Always proxy through `/api/chat`.
- **All market data is CoStar Q1 2026 Beaumont/Hemet Retail.** Don't change the numbers.
- **The KW Commercial transaction at 1100 E 6th St should always be highlighted** in gold/amber in any sales table.
- **Robert Mendieta Jr., CCIM** is the agent name used in all CTAs and contact references.
- **Phone: (951) 977-3251** appears in header, CTA bar, and footer.
- **Apex Real Estate Services** is the company name (not just "Apex" or "KW Commercial").
- **Color priority:** Navy for primary UI, Gold for accents/highlights/CTAs, never use purple gradients or generic AI aesthetics.
- **No Lorem Ipsum.** Every piece of text should be real content from the data provided.
