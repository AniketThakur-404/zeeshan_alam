"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TESTIMONIALS } from "@/data/portfolio";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#faf9f7] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-bold tracking-[0.16em] text-[#f2542d] uppercase">
            Testimonials
          </span>
          <h2 className="mt-2.5 font-serif text-4xl font-semibold text-[#22252a] sm:text-5xl">
            What My Clients Say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6672]">
            Long-term search partnerships built on transparent analytics, measurable revenue
            attribution, and dependable execution.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.12, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full rounded-2xl border border-[#eae6e0] bg-white py-2 shadow-[0_18px_45px_-28px_rgba(34,37,42,0.18)] ring-0">
                <CardContent className="flex h-full flex-col justify-between gap-6 p-7 sm:p-9">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-1 text-[#f59e0b]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-4 fill-[#f59e0b]" />
                        ))}
                      </div>
                      <Badge className="bg-[#fff3ee] font-mono text-[11px] font-semibold text-[#f2542d] hover:bg-[#fff3ee]">
                        {t.resultBadge}
                      </Badge>
                    </div>

                    <div className="relative mt-5">
                      <Quote className="mb-2 size-7 text-[#f2542d]/25" />
                      <p className="text-base leading-relaxed text-[#302d29] italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 border-t border-[#f0ede8] pt-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="size-12 rounded-full border-2 border-[#fff3ee] object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold text-[#22252a]">{t.name}</p>
                      <p className="text-xs text-[#5f6672]">
                        {t.role} &bull; {t.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
