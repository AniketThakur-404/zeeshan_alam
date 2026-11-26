"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SERVICES, type ServiceItem } from "@/data/portfolio";
import {
  BullseyeSearchIcon,
  SeoMagnifierIcon,
  TargetDartIcon,
  TechnicalAuditIcon,
} from "@/components/SeoIcons";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

function renderServiceIcon(icon: ServiceItem["icon"]) {
  if (icon === "target") return <TargetDartIcon className="size-12" />;
  if (icon === "seo") return <SeoMagnifierIcon className="size-12" />;
  if (icon === "technical") return <TechnicalAuditIcon className="size-12" />;
  return <BullseyeSearchIcon className="size-12" />;
}

export default function ServicesSection() {
  const { scrollTo } = useSmoothScroll();
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-28"
    >
      {/* Subtle watercolor accents matching screenshot */}
      <div
        aria-hidden
        className="watercolor-blob-blush pointer-events-none absolute top-28 -left-24 -z-10 h-72 w-72 rounded-full opacity-75"
      />
      <div
        aria-hidden
        className="watercolor-blob-lavender pointer-events-none absolute top-10 right-0 -z-10 h-72 w-72 rounded-full opacity-60"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-bold tracking-[0.16em] text-[#f2542d] uppercase">
            Services
          </span>
          <h2 className="mt-2.5 font-serif text-4xl font-semibold text-[#22252a] sm:text-5xl">
            What I Do for Clients
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6672]">
            Focused, white-hat organic growth programs tailored for startups, SaaS teams, and
            e-commerce brands ready to own page one.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full rounded-2xl border border-[#ece8e0] bg-white/95 py-2 shadow-[0_18px_45px_-28px_rgba(34,37,42,0.22)] ring-0 transition-shadow hover:shadow-[0_24px_55px_-24px_rgba(242,84,45,0.18)]">
                <CardContent className="flex h-full flex-col gap-5 p-7 sm:flex-row sm:items-start">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#fff5f2]">
                    {renderServiceIcon(srv.icon)}
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-xl font-bold text-[#22252a]">{srv.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5f6672]">{srv.summary}</p>
                    <div className="mt-5">
                      <Button
                        size="sm"
                        onClick={() => setActiveService(srv)}
                        className="h-9 rounded-full bg-[#f2542d] px-5 text-xs font-semibold text-white hover:bg-[#d9431f]"
                      >
                        Read More
                        <ArrowUpRight className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!activeService}
        onOpenChange={(open) => !open && setActiveService(null)}
      >
        <DialogContent className="rounded-2xl border-[#eae6e0] bg-white p-6 sm:max-w-lg">
          {activeService && (
            <>
              <DialogHeader>
                <Badge className="w-fit bg-[#fff3ee] text-[#f2542d] hover:bg-[#fff3ee]">
                  SEO Service Scope
                </Badge>
                <DialogTitle className="pt-2 font-serif text-3xl font-semibold text-[#22252a]">
                  {activeService.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-[#5f6672]">
                  {activeService.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-1">
                <div className="rounded-xl border border-[#eae6e0] bg-[#faf8f5] p-3.5 text-sm font-medium text-[#22252a]">
                  Expected Impact: <span className="text-[#f2542d]">{activeService.outcome}</span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#22252a]">Core Deliverables</h4>
                  <ul className="mt-2 space-y-2">
                    {activeService.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#5f6672]">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#22c55e]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#5f6672] uppercase">
                    <Wrench className="size-3.5 text-[#f2542d]" />
                    Tools &amp; Telemetry
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeService.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="rounded-full text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={() => setActiveService(null)}
                  className="rounded-full"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    setActiveService(null);
                    scrollTo("#contact", -64);
                  }}
                  className="rounded-full bg-[#f2542d] text-white hover:bg-[#d9431f]"
                >
                  Start This Engagement
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
