"use client";

import { ArrowUpRight, CheckCircle2, Download } from "lucide-react";
import { cn } from "cn";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";
import SplitPinReveal from "@/components/reveal-kit/SplitPinReveal";

export default function AboutPinSection() {
  const { scrollTo } = useSmoothScroll();

  return (
    <SplitPinReveal
      id="about"
      image="/images/zeeshan-cutout.png"
      alt="Zeeshan Alam reviewing SEO, WordPress, and Shopify growth metrics"
      mediaOverlay={
        <>
          {/* Top-left floating experience card */}
          <div className="absolute top-6 left-6 z-10 rounded-2xl border border-white/80 bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur-sm sm:top-10 sm:left-8">
            <p className="font-serif text-2xl font-bold leading-none text-[#f2542d]">
              SEO Executive
            </p>
            <p className="mt-1.5 text-xs font-semibold tracking-wide text-[#302d29]">
              Gohype Media Pvt. Ltd.
            </p>
          </div>

          {/* Bottom-right floating education & dev card */}
          <div className="absolute right-6 bottom-6 z-10 rounded-2xl border border-white/80 bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur-sm sm:right-8 sm:bottom-10">
            <p className="font-serif text-2xl font-bold leading-none text-[#4f46e5]">
              WP &amp; Shopify
            </p>
            <p className="mt-1.5 text-xs font-semibold tracking-wide text-[#302d29]">
              BCA &bull; Jamia Hamdard Univ.
            </p>
          </div>
        </>
      }
    >
      <span className="spr__kicker">SEO Executive &bull; WordPress &amp; Shopify</span>

      <h2 className="spr__title">
        I Build Fast Websites &amp; <em>Increase Organic Visitors</em>
      </h2>

      <p className="spr__quote">
        &ldquo;Sustainable rankings start with clean architecture — uniting WordPress &amp; Shopify
        engineering with search-first technical SEO.&rdquo;
      </p>

      <p className="spr__para">
        Working as Website SEO Executive at Gohype Media Pvt. Ltd. in New Delhi and holding a BCA
        from Jamia Hamdard University, I design responsive WordPress sites, support Shopify themes,
        and resolve crawl, indexing, Schema, and Core Web Vitals bottlenecks for measurable growth.
      </p>

      <div className="flex flex-wrap gap-2">
        {
          ["Technical & On-Page SEO", "WordPress & WooCommerce", "Shopify Support"].map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="gap-1.5 rounded-full border border-[#eae6e0] bg-[#faf8f5] px-3.5 py-1.5 text-xs font-medium text-[#302d29]"
            >
              <CheckCircle2 className="size-3.5 text-[#f2542d]" />
              {tag}
            </Badge>
          ))
        }
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-3">
        <Button
          size="lg"
          onClick={() => scrollTo("#contact", -64)}
          className="h-12 rounded-full bg-[#f2542d] px-8 text-sm font-semibold text-white shadow-[0_14px_30px_-10px_rgba(242,84,45,0.45)] hover:bg-[#d9431f]"
        >
          Hire Me
          <ArrowUpRight className="size-4" />
        </Button>
        <a
          href="/Zeeshan_Alam_Resume.pdf"
          download="Zeeshan_Alam_Resume.pdf"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-12 rounded-full border-[#e2ded8] px-6 text-sm font-semibold text-[#22252a] hover:border-[#f2542d] hover:text-[#f2542d]"
          )}
        >
          <Download className="size-4" />
          Download Resume
        </a>
      </div>
    </SplitPinReveal>
  );
}
