export type NavLink = {
  label: string;
  href: string;
};

export type PillarItem = {
  id: string;
  icon: "target" | "seo" | "bullseye";
  title: string;
  description: string;
};

export type ProcessSlide = {
  src: string;
  alt: string;
  title: string;
  phase: string;
  metric: string;
};

export type CaseStudyTile = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "SaaS SEO" | "E-Commerce" | "Technical SEO" | "Local & Authority";
  client: string;
  duration: string;
  width: number;
  height: number;
  headlineMetric: string;
  summary: string;
  kpis: { label: string; before: string; after: string; delta: string }[];
  deliverables: string[];
};

export type SkillItem = {
  name: string;
  percentage: number;
  color: string;
  note: string;
};

export type ServiceItem = {
  id: string;
  icon: "target" | "seo" | "technical" | "offpage";
  title: string;
  summary: string;
  tools: string[];
  deliverables: string[];
  outcome: string;
};

export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  resultBadge: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const PILLARS: PillarItem[] = [
  {
    id: "keyword-research",
    icon: "target",
    title: "SEO Executive & Growth",
    description:
      "Data-backed keyword clustering, Google Search Console audits, and on-page optimization that capture high-intent organic buyers.",
  },
  {
    id: "search-optimization",
    icon: "seo",
    title: "WordPress Development",
    description:
      "Custom WordPress & WooCommerce websites built with clean semantic markup, Elementor/Gutenberg architecture, and 95+ speed scores.",
  },
  {
    id: "onpage-optimization",
    icon: "bullseye",
    title: "Shopify Development",
    description:
      "High-converting Shopify OS 2.0 storefronts with custom Liquid sections, structured Product schema, and friction-free checkout UX.",
  },
];

export const PROCESS_SLIDES: ProcessSlide[] = [
  {
    src: "/images/slide-keyword.jpg",
    alt: "Minimalist travertine workspace representing Keyword Intelligence",
    title: "KEYWORD INTELLIGENCE",
    phase: "Phase 01 — Search Intent & Storefront Strategy",
    metric: "3,400+ Top-10 Commercial Terms Ranked",
  },
  {
    src: "/images/slide-technical.jpg",
    alt: "Symmetrical modern glass corridor representing WordPress and Shopify Engineering",
    title: "WP & SHOPIFY ARCHITECTURE",
    phase: "Phase 02 — Custom Builds & Core Web Vitals",
    metric: "100 / 100 Lighthouse & Sub-1.2s LCP",
  },
  {
    src: "/images/slide-content.jpg",
    alt: "Architectural wood studio library representing On-Page Content Mastery",
    title: "ON-PAGE & SCHEMA MASTERY",
    phase: "Phase 03 — Entity Optimization & CRO",
    metric: "+286% Non-Branded Impressions Lift",
  },
  {
    src: "/images/slide-authority.jpg",
    alt: "Sunlit penthouse skyline studio representing Organic Authority",
    title: "ORGANIC AUTHORITY",
    phase: "Phase 04 — Digital PR & Link Velocity",
    metric: "DR 42 → DR 71 Across Competitive Niches",
  },
];

export const CASE_STUDIES: CaseStudyTile[] = [
  {
    id: "saas-gsc-scaling",
    src: "/images/works/work-gsc-traffic.png",
    alt: "Google Search Console performance graph showing 342% organic clicks increase",
    title: "SaaS Organic Scaling — +342%",
    category: "SaaS SEO",
    client: "CloudFlow ERP",
    duration: "12 Months",
    width: 1280,
    height: 960,
    headlineMetric: "148.4K Organic Clicks/mo",
    summary:
      "Rebuilt programmatic comparison landing pages, pruned 600+ cannibalized URLs, and engineered hub-and-spoke product clusters verified in Google Search Console.",
    kpis: [
      { label: "Total Clicks", before: "33.5K", after: "148.4K", delta: "+342%" },
      { label: "Impressions", before: "990K", after: "3.82M", delta: "+286%" },
      { label: "Avg. Position", before: "18.4", after: "4.2", delta: "+14.2 pos" },
    ],
    deliverables: [
      "Full Search Console cannibalization audit & URL consolidation",
      "45 bottom-of-funnel solution & integration landing pages",
      "Internal link graph restructuring with anchor velocity modeling",
    ],
  },
  {
    id: "ecommerce-ga4-growth",
    src: "/images/works/work-ga4-organic.png",
    alt: "Google Analytics 4 organic acquisition and revenue attribution report",
    title: "E-Commerce GA4 Revenue — +245%",
    category: "E-Commerce",
    client: "Nordic Atelier Home",
    duration: "9 Months",
    width: 1180,
    height: 960,
    headlineMetric: "$890.4K Attributed Revenue",
    summary:
      "Eliminated faceted navigation crawl traps, enriched collection pages with buying-intent copy and Product/Offer schema, and turned organic search into 65% of total revenue.",
    kpis: [
      { label: "Organic Sessions", before: "129.8K", after: "412.8K", delta: "+218%" },
      { label: "Conversions", before: "5,250", after: "14,920", delta: "+184%" },
      { label: "Organic Revenue", before: "$258K", after: "$890.4K", delta: "+245%" },
    ],
    deliverables: [
      "Faceted filter indexation rules & canonical governance",
      "Rich Merchant & Product schema with review aggregates",
      "Category-level semantic FAQ & buyer guide architecture",
    ],
  },
  {
    id: "fintech-ahrefs-authority",
    src: "/images/works/work-ahrefs-keywords.png",
    alt: "Ahrefs Site Explorer showing Domain Rating growth from 42 to 71 and 18.6K keywords",
    title: "FinTech Keyword Dominance — DR 71",
    category: "Local & Authority",
    client: "PayLedger Global",
    duration: "14 Months",
    width: 1600,
    height: 960,
    headlineMetric: "$194K/mo Traffic Value",
    summary:
      "Captured #1–#3 rankings across ultra-competitive B2B fintech queries through original benchmark research campaigns and high-authority editorial digital PR placements.",
    kpis: [
      { label: "Domain Rating", before: "42", after: "71", delta: "+29 pts" },
      { label: "Referring Domains", before: "920", after: "2,840", delta: "+1,920" },
      { label: "Organic Keywords", before: "4.1K", after: "18.6K", delta: "+353%" },
    ],
    deliverables: [
      "Data-driven B2B FinTech State of Payments PR study",
      "120+ editorial placements in tier-1 finance & SaaS publications",
      "YMYL E-E-A-T author entity & citation trust architecture",
    ],
  },
  {
    id: "technical-core-vitals",
    src: "/images/works/work-core-vitals.png",
    alt: "Lighthouse 100/100 score and Core Web Vitals optimization metrics",
    title: "Technical Core Web Vitals — 100/100",
    category: "Technical SEO",
    client: "MedBridge Portal",
    duration: "4 Months",
    width: 1180,
    height: 920,
    headlineMetric: "LCP 4.8s → 1.1s",
    summary:
      "Resolved Next.js hydration bottlenecks, eliminated layout shifts, fixed orphaned sitemaps, and expanded valid indexed landing pages by nearly 4x.",
    kpis: [
      { label: "LCP Speed", before: "4.8s", after: "1.1s", delta: "-77%" },
      { label: "CLS Score", before: "0.28", after: "0.01", delta: "Passed" },
      { label: "Valid Index", before: "1,240", after: "4,890", delta: "+294%" },
    ],
    deliverables: [
      "Server-log crawl budget diagnostics via Screaming Frog & BigQuery",
      "Critical rendering path, font preloading, and edge caching setup",
      "Automated XML sitemap segmentation & hreflang validation",
    ],
  },
  {
    id: "healthcare-serp-growth",
    src: "/images/works/work-semrush-growth.png",
    alt: "Semrush 12-month SERP keyword position distribution showing 1,420 Top 3 terms",
    title: "Healthcare SERP Expansion — 1,420 Top 3",
    category: "SaaS SEO",
    client: "CareSync Health",
    duration: "10 Months",
    width: 1280,
    height: 920,
    headlineMetric: "146 Featured Snippets",
    summary:
      "Built clinician-reviewed topical clusters with medical schema markup, driving 1,420 keywords into Google's Top 3 positions and winning 146 Featured Snippets.",
    kpis: [
      { label: "Top 3 Keywords", before: "295", after: "1,420", delta: "+381%" },
      { label: "Top 10 Keywords", before: "1,180", after: "4,310", delta: "+265%" },
      { label: "Featured Snippets", before: "19", after: "146", delta: "+668%" },
    ],
    deliverables: [
      "MedicalWebPage & Physician entity schema deployment",
      "NLP entity gap scoring across 180 informational & clinical guides",
      "Answer-box formatting for zero-click & snippet capture",
    ],
  },
  {
    id: "local-map-pack-dominance",
    src: "/images/works/work-local-authority.png",
    alt: "Local GeoGrid 5x5 rank tracker and Google Business Profile call insights",
    title: "Multi-Location Map Pack — #1 Grid",
    category: "Local & Authority",
    client: "Apex Dental Group",
    duration: "6 Months",
    width: 1600,
    height: 960,
    headlineMetric: "+312% Direction Requests",
    summary:
      "Standardized NAP citations across 14 regional clinics, launched hyper-local service pages with LocalBusiness schema, and dominated the 5×5 local Map Pack grid.",
    kpis: [
      { label: "Direction Clicks", before: "1,940", after: "7,990", delta: "+312%" },
      { label: "Website Clicks", before: "2,120", after: "7,800", delta: "+268%" },
      { label: "Inbound Calls", before: "1,410", after: "4,145", delta: "+194%" },
    ],
    deliverables: [
      "Google Business Profile category, service & Q&A optimization",
      "Hyper-local clinic landing pages with geo-coordinates & reviews",
      "Automated citation cleanup & local PR backlink outreach",
    ],
  },
];

export const SKILLS: SkillItem[] = [
  {
    name: "SEO Strategy, On-Page & Off-Page",
    percentage: 95,
    color: "#F2542D",
    note: "Ahrefs • SEMrush • Google Search Console • Rank Math & Yoast",
  },
  {
    name: "WordPress & WooCommerce Dev",
    percentage: 93,
    color: "#22C55E",
    note: "Responsive Themes • HTML5 • CSS3 • Caching & Speed",
  },
  {
    name: "Shopify Theme & Store Support",
    percentage: 90,
    color: "#1F2937",
    note: "Storefront Layouts • Product & Collection Setup • CRO",
  },
  {
    name: "Technical SEO & Core Web Vitals",
    percentage: 88,
    color: "#4F46E5",
    note: "Screaming Frog • Schema Markup • GA4 • GTM • GTmetrix",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-keyword",
    icon: "target",
    title: "SEO & Keyword Strategy",
    summary:
      "Full-funnel SEO execution combining competitive gap analysis, search intent clustering, and high-authority backlinks to grow qualified organic traffic.",
    tools: ["Ahrefs", "Semrush", "Google Search Console", "GA4"],
    deliverables: [
      "Topical authority map & commercial keyword blueprint",
      "Page-level on-page optimization & metadata rewrites",
      "White-hat backlink outreach & rank velocity tracking",
    ],
    outcome: "Targets high-ROI search demand that converts into leads and sales.",
  },
  {
    id: "srv-onpage",
    icon: "seo",
    title: "WordPress Development",
    summary:
      "Fast, mobile-first WordPress and WooCommerce websites engineered with clean block/Elementor layouts, SEO schema, and rock-solid security.",
    tools: ["WordPress", "WooCommerce", "Elementor Pro", "ACF"],
    deliverables: [
      "Custom responsive theme or landing page architecture",
      "WooCommerce product catalog, checkout & payment setup",
      "RankMath / Yoast schema & 95+ PageSpeed tuning",
    ],
    outcome: "Delivers sleek, easy-to-manage websites built to rank out of the box.",
  },
  {
    id: "srv-technical",
    icon: "technical",
    title: "Shopify Development",
    summary:
      "Conversion-focused Shopify Online Store 2.0 themes with custom Liquid sections, clean collection filtering, and product-level SEO optimization.",
    tools: ["Shopify 2.0", "Liquid", "Shopify CLI", "Klaviyo / Apps"],
    deliverables: [
      "Custom Shopify storefront setup & Liquid section coding",
      "High-converting PDP layouts, upsells & speed optimization",
      "Collection SEO structure, canonical rules & Product schema",
    ],
    outcome: "Turns organic and paid store visitors into repeat buyers.",
  },
  {
    id: "srv-offpage",
    icon: "offpage",
    title: "Technical SEO & Speed",
    summary:
      "End-to-end site health engineering across Core Web Vitals, crawl budget, canonical governance, structured data, and indexation fixes.",
    tools: ["Screaming Frog", "PageSpeed Insights", "GSC", "GTmetrix"],
    deliverables: [
      "120-point technical crawl & Core Web Vitals audit",
      "LCP, INP & CLS performance remediation on WP/Shopify",
      "XML sitemap cleanup, redirect mapping & schema validation",
    ],
    outcome: "Ensures search engines crawl & rank every priority page effortlessly.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "Zeeshan rebuilt our slow WordPress site and overhauled our SEO architecture from the ground up. Within months our non-branded organic clicks surged over 3x and lead quality jumped immediately.",
    name: "Mark Anthony",
    role: "Chief Executive Officer",
    company: "CloudFlow ERP",
    avatar: "/images/client-mark.jpg",
    resultBadge: "+342% Organic Clicks",
  },
  {
    id: "test-2",
    quote:
      "Rarely do you find someone who executes both Shopify Liquid development and deep technical SEO at such a high level. Zeeshan fixed our index bloat, sped up our store, and took 40+ keywords to #1.",
    name: "William Henry",
    role: "Founder & Managing Partner",
    company: "PayLedger Global",
    avatar: "/images/client-william.jpg",
    resultBadge: "DR 42 → DR 71",
  },
];
