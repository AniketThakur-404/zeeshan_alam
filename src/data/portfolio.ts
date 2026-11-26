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
  category: "Agency & Digital" | "Platforms & SaaS" | "E-Commerce & Brands";
  client: string;
  domain: string;
  width: number;
  height: number;
  headlineMetric: string;
  summary: string;
  focusAreas: { label: string; value: string }[];
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
    phase: "Phase 01 — Search Intent & Audit",
    metric: "Ahrefs • SEMrush • Google Search Console",
  },
  {
    src: "/images/slide-technical.jpg",
    alt: "Symmetrical modern glass corridor representing WordPress and Shopify Engineering",
    title: "WP & SHOPIFY ARCHITECTURE",
    phase: "Phase 02 — Responsive Builds & Speed",
    metric: "WordPress • WooCommerce • Shopify Support",
  },
  {
    src: "/images/slide-content.jpg",
    alt: "Architectural wood studio library representing On-Page Content Mastery",
    title: "ON-PAGE & SCHEMA MASTERY",
    phase: "Phase 03 — Meta, Schema & Core Web Vitals",
    metric: "Rank Math • Yoast SEO • Schema Markup",
  },
  {
    src: "/images/slide-authority.jpg",
    alt: "Sunlit penthouse skyline studio representing Organic Authority",
    title: "ORGANIC AUTHORITY",
    phase: "Phase 04 — Off-Page SEO & Tracking",
    metric: "Link Building • GA4 • Tag Manager",
  },
];

export const CASE_STUDIES: CaseStudyTile[] = [
  {
    id: "go-hype-media",
    src: "/images/projects/go-hype-media.png",
    alt: "Go Hype Media SEO project banner",
    title: "Go Hype Media",
    category: "Agency & Digital",
    client: "Go Hype Media Pvt. Ltd.",
    domain: "gohypemedia.com",
    width: 1280,
    height: 880,
    headlineMetric: "Full-Stack SEO & WP",
    summary:
      "End-to-end website SEO execution, responsive WordPress maintenance, Core Web Vitals tuning, and continuous Search Console & GA4 tracking for the agency's digital presence.",
    focusAreas: [
      { label: "Primary Focus", value: "Technical & On-Page SEO" },
      { label: "CMS Stack", value: "WordPress • Speed Tuning" },
      { label: "Analytics", value: "GSC • GA4 • GTM" },
    ],
    deliverables: [
      "Technical SEO audits for crawlability, indexing & broken link cleanup",
      "On-page metadata, heading hierarchy, internal linking & image optimization",
      "Core Web Vitals caching, compression & responsive layout refinements",
    ],
  },
  {
    id: "catalance",
    src: "/images/projects/catalance.png",
    alt: "Catalance SEO project banner",
    title: "Catalance",
    category: "Agency & Digital",
    client: "Catalance",
    domain: "catalance.in",
    width: 1280,
    height: 880,
    headlineMetric: "Service & Local SEO",
    summary:
      "Search visibility architecture for a managed talent & digital services platform, targeting high-intent service keywords, local visibility, and structured service pages.",
    focusAreas: [
      { label: "Primary Focus", value: "Keyword & Service SEO" },
      { label: "Local Signals", value: "GBP & Citations" },
      { label: "Structure", value: "Internal Link Architecture" },
    ],
    deliverables: [
      "Service-page keyword mapping & commercial intent optimization",
      "Schema markup implementation and canonical URL hygiene",
      "Off-page authority backlink research and outreach support",
    ],
  },
  {
    id: "assured-rewards",
    src: "/images/projects/assured-rewards.png",
    alt: "Assured Rewards SEO project banner",
    title: "Assured Rewards",
    category: "E-Commerce & Brands",
    client: "Assured Rewards",
    domain: "assuredrewards.in",
    width: 1600,
    height: 920,
    headlineMetric: "Trust & Landing SEO",
    summary:
      "Organic search optimization focused on high-trust E-E-A-T signals, fast-loading promotional landing pages, clean indexation, and mobile user experience.",
    focusAreas: [
      { label: "Primary Focus", value: "On-Page & Technical SEO" },
      { label: "Trust & Schema", value: "Structured Data & E-E-A-T" },
      { label: "Performance", value: "Mobile & Speed Optimization" },
    ],
    deliverables: [
      "Landing page content structuring, meta tags & keyword alignment",
      "Duplicate content cleanup and XML sitemap index management",
      "PageSpeed Insights & GTmetrix Core Web Vitals optimization",
    ],
  },
  {
    id: "mywebrank",
    src: "/images/projects/mywebrank.png",
    alt: "Mywebrank SEO project banner",
    title: "Mywebrank",
    category: "Platforms & SaaS",
    client: "Mywebrank",
    domain: "mywebrank.com",
    width: 1280,
    height: 880,
    headlineMetric: "Technical & Authority",
    summary:
      "Search engine optimization for a web ranking and SEO utility brand, strengthening crawl health, technical performance, and clean off-page authority links.",
    focusAreas: [
      { label: "Primary Focus", value: "Technical SEO Audits" },
      { label: "Off-Page", value: "Backlink Profile Growth" },
      { label: "Audit Stack", value: "Screaming Frog • Ahrefs" },
    ],
    deliverables: [
      "Site-wide crawl audit resolving indexing gaps and redirect chains",
      "Competitor keyword gap analysis using Ahrefs & SEMrush",
      "High-relevance outreach & off-page link-building campaigns",
    ],
  },
  {
    id: "moksh-promotions",
    src: "/images/projects/moksh-promotions.png",
    alt: "Moksh Promotions SEO project banner",
    title: "Moksh Promotions",
    category: "Agency & Digital",
    client: "Moksh Promotions",
    domain: "mokshpromotions.com",
    width: 1280,
    height: 880,
    headlineMetric: "Brand & Local Search",
    summary:
      "On-page and local SEO optimization for brand promotions and campaign services, ensuring accurate business citations, clean metadata, and steady search impressions.",
    focusAreas: [
      { label: "Primary Focus", value: "Local & On-Page SEO" },
      { label: "Visibility", value: "Brand & Service Queries" },
      { label: "Monitoring", value: "GSC & GA4 Reporting" },
    ],
    deliverables: [
      "Targeted keyword research & service-line meta optimization",
      "Local SEO citation consistency and directory optimization",
      "Monthly Google Search Console impression & query tracking",
    ],
  },
  {
    id: "tax-flow",
    src: "/images/projects/tax-flow.png",
    alt: "Tax flow SEO project banner",
    title: "Tax flow",
    category: "Platforms & SaaS",
    client: "Tax flow",
    domain: "taxflow.in",
    width: 1280,
    height: 880,
    headlineMetric: "SaaS & Silo SEO",
    summary:
      "Search strategy and technical optimization for tax compliance and GST workflow solutions, organizing topic clusters and schema for commercial search queries.",
    focusAreas: [
      { label: "Primary Focus", value: "Commercial Keyword SEO" },
      { label: "Architecture", value: "Topic Silo Structuring" },
      { label: "Schema", value: "Software & FAQ Markup" },
    ],
    deliverables: [
      "Commercial keyword clustering for GST & tax compliance terms",
      "On-page content structuring, FAQ schema & internal linking",
      "Technical audit for index coverage and mobile speed",
    ],
  },
  {
    id: "xelectron",
    src: "/images/projects/xelectron.png",
    alt: "Xelectron SEO project banner",
    title: "Xelectron",
    category: "E-Commerce & Brands",
    client: "Xelectron",
    domain: "xelectron.com",
    width: 1280,
    height: 880,
    headlineMetric: "E-Commerce & Store SEO",
    summary:
      "E-commerce SEO and storefront optimization for a consumer electronics brand, improving product & category page discoverability, Product schema, and page speed.",
    focusAreas: [
      { label: "Primary Focus", value: "E-Commerce Product SEO" },
      { label: "Storefront", value: "Product & Category UX" },
      { label: "Rich Results", value: "Product Schema Markup" },
    ],
    deliverables: [
      "Product & collection title, description, and image alt optimization",
      "Product structured data markup & category internal linking",
      "Image compression, Core Web Vitals & storefront UX enhancements",
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
      "Zeeshan combines hands-on WordPress development with thorough technical and on-page SEO audits — fixing crawl errors, improving page speed, and structuring content that ranks cleanly.",
    name: "Gohype Media Team",
    role: "Digital Marketing Agency",
    company: "New Delhi, India",
    avatar: "/images/client-mark.jpg",
    resultBadge: "WordPress & SEO",
  },
  {
    id: "test-2",
    quote:
      "Dependable across Shopify store support, Core Web Vitals optimization, and off-page link building. Zeeshan keeps storefronts fast, mobile-ready, and properly indexed in Search Console.",
    name: "E-Commerce Partner",
    role: "Brand & Store Operations",
    company: "D2C & SaaS Campaigns",
    avatar: "/images/client-william.jpg",
    resultBadge: "Shopify & Core Web Vitals",
  },
];
