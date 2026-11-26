"use client";

import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CheckCircle2, Calendar, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ScaleGallery, { type Row, type Tile } from "@/components/reveal-kit/ScaleGallery";
import { CASE_STUDIES, type CaseStudyTile } from "@/data/portfolio";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  "All Works",
  "SaaS SEO",
  "E-Commerce",
  "Technical SEO",
  "Local & Authority",
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

export default function PortfolioShowcase() {
  const { scrollTo } = useSmoothScroll();
  const [category, setCategory] = useState<CategoryFilter>("All Works");
  const [selected, setSelected] = useState<CaseStudyTile | null>(null);

  const filtered = useMemo(() => {
    if (category === "All Works") return CASE_STUDIES;
    return CASE_STUDIES.filter((item) => item.category === category);
  }, [category]);

  // Arrange filtered case studies into justified "two" and spotlight "center" rows
  const rows: Row[] = useMemo(() => {
    if (filtered.length === 6) {
      return [
        { kind: "two", tiles: [filtered[0], filtered[1]] },
        { kind: "center", tiles: [filtered[2]] },
        { kind: "two", tiles: [filtered[3], filtered[4]] },
        { kind: "center", tiles: [filtered[5]] },
      ];
    }
    const built: Row[] = [];
    for (let i = 0; i < filtered.length; i += 2) {
      if (i + 1 < filtered.length) {
        built.push({ kind: "two", tiles: [filtered[i], filtered[i + 1]] });
      } else {
        built.push({ kind: "center", tiles: [filtered[i]] });
      }
    }
    return built;
  }, [filtered]);

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [rows]);

  const handleOpen = (tile: Tile) => {
    const found = CASE_STUDIES.find((c) => c.src === tile.src);
    if (found) setSelected(found);
  };

  return (
    <>
      <ScaleGallery
        id="portfolio"
        kicker="Portfolio"
        heading="My Amazing Works"
        note="Verified Search Console, GA4, Ahrefs, and Semrush campaign snapshots. Hover any report and click to inspect full before/after deliverables."
        rows={rows}
        onOpen={handleOpen}
        headerActions={
          <div className="mt-7 flex justify-center">
            <Tabs value={category} onValueChange={(v) => setCategory(v as CategoryFilter)}>
              <TabsList className="flex h-auto flex-wrap justify-center gap-1 rounded-full border border-[#eae6e0] bg-[#faf8f5] p-1.5">
                {CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="rounded-full px-4 py-1.5 text-xs font-semibold data-active:bg-[#f2542d] data-active:text-white"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        }
        footerSlot={
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {category !== "All Works" && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCategory("All Works")}
                className="h-12 rounded-full border-[#eae6e0] px-7 text-sm font-semibold"
              >
                Show All 6 Case Studies
              </Button>
            )}
            <Button
              size="lg"
              onClick={() => scrollTo("#contact", -64)}
              className="h-12 rounded-full bg-[#f2542d] px-8 text-sm font-semibold text-white shadow-[0_14px_30px_-10px_rgba(242,84,45,0.45)] hover:bg-[#d9431f]"
            >
              View All Works &amp; Request Audit
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        }
      />

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90svh] overflow-y-auto rounded-2xl border-[#eae6e0] bg-white p-6 sm:max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-[#fff3ee] text-[#f2542d] hover:bg-[#fff3ee]">
                    {selected.category}
                  </Badge>
                  <Badge variant="outline" className="gap-1 text-xs">
                    <Building2 className="size-3" />
                    {selected.client}
                  </Badge>
                  <Badge variant="outline" className="gap-1 font-mono text-xs">
                    <Calendar className="size-3" />
                    {selected.duration}
                  </Badge>
                </div>
                <DialogTitle className="pt-2 font-serif text-3xl font-semibold text-[#22252a]">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-[#5f6672]">
                  {selected.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="overflow-hidden rounded-xl border border-[#eae6e0] bg-[#f8fafc]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {selected.kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl border border-[#eae6e0] bg-[#faf8f5] p-3.5"
                  >
                    <p className="text-xs font-medium text-[#5f6672]">{kpi.label}</p>
                    <p className="mt-1 font-mono text-lg font-bold text-[#22252a]">
                      {kpi.after}
                    </p>
                    <p className="mt-0.5 text-xs text-[#5f6672]">
                      From {kpi.before}{" "}
                      <span className="font-semibold text-[#059669]">({kpi.delta})</span>
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#22252a]">Key Deliverables</h4>
                <ul className="mt-2.5 space-y-2">
                  {selected.deliverables.map((del) => (
                    <li key={del} className="flex items-start gap-2 text-sm text-[#5f6672]">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#f2542d]" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
                <Button
                  variant="outline"
                  onClick={() => setSelected(null)}
                  className="rounded-full"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    setSelected(null);
                    scrollTo("#contact", -64);
                  }}
                  className="rounded-full bg-[#f2542d] text-white hover:bg-[#d9431f]"
                >
                  Request Similar Growth
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
