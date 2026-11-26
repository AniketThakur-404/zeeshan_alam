"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SKILLS } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SkillsSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".sk-copy > *", {
          y: 26,
          opacity: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".sk-copy", start: "top 82%", once: true },
        });

        const bars = gsap.utils.toArray<HTMLElement>(".sk-bar-fill");
        bars.forEach((bar) => {
          const target = bar.dataset.pct || "0";
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${target}%`,
              duration: 1.3,
              ease: "power3.out",
              scrollTrigger: { trigger: bar, start: "top 88%", once: true },
            }
          );
        });

        gsap.from(".sk-portrait-card", {
          x: 40,
          opacity: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: { trigger: ".sk-portrait-card", start: "top 82%", once: true },
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      id="skills"
      ref={root}
      className="relative overflow-hidden bg-[#faf9f7] py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        {/* Left skill bars */}
        <div className="sk-copy lg:col-span-6">
          <span className="inline-block text-xs font-bold tracking-[0.16em] text-[#f2542d] uppercase">
            Develop Skills
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-[1.08] text-[#22252a] sm:text-5xl">
            I Develop Skills Regularly to Keep Me Updated
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5f6672]">
            From Google algorithm updates to modern WordPress block themes and Shopify Online Store
            2.0 Liquid builds, I continually sharpen my SEO and full-stack storefront skills.
          </p>

          <div className="mt-9 space-y-6">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-[#22252a] sm:text-[15px]">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-[#5f6672]">{skill.note}</p>
                  </div>
                  <span
                    className="font-mono text-sm font-semibold"
                    style={{ color: skill.color }}
                  >
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#e8e5df]">
                  <div
                    className="sk-bar-fill h-full rounded-full"
                    data-pct={skill.percentage}
                    style={{ backgroundColor: skill.color, width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right cutout portrait over golden yellow paint backdrop matching screenshot */}
        <div className="sk-portrait-card relative mx-auto w-full max-w-[460px] lg:col-span-6">
          <div
            aria-hidden
            className="absolute -top-6 -right-6 -z-0 h-64 w-64 rounded-full bg-[#fde047]/40 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-gradient-to-br from-[#fde047] via-[#facc15] to-[#eab308] pt-6 shadow-[0_28px_60px_-24px_rgba(34,37,42,0.24)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_55%)]"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/zeeshan-cutout.png"
              alt="Zeeshan Alam portrait over golden yellow backdrop"
              className="relative z-10 aspect-[4/4.5] w-full object-contain object-bottom drop-shadow-[0_18px_28px_rgba(34,37,42,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
