"use client";

import { motion } from "framer-motion";
import { PILLARS, type PillarItem } from "@/data/portfolio";
import { BullseyeSearchIcon, SeoMagnifierIcon, TargetDartIcon } from "@/components/SeoIcons";

function renderIcon(icon: PillarItem["icon"]) {
  if (icon === "target") return <TargetDartIcon className="size-14" />;
  if (icon === "seo") return <SeoMagnifierIcon className="size-14" />;
  return <BullseyeSearchIcon className="size-14" />;
}

export default function PillarsSection() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {PILLARS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="group flex flex-col items-center rounded-2xl p-6 text-center transition-colors hover:bg-[#faf8f5]"
            >
              <div className="mb-5 flex size-20 items-center justify-center rounded-2xl bg-[#fff8f5] transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-105">
                {renderIcon(item.icon)}
              </div>
              <h2 className="text-lg font-bold text-[#22252a]">{item.title}</h2>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#5f6672]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
