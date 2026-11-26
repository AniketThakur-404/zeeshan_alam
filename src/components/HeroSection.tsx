"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";
import {
  BullseyeSearchIcon,
  FacebookBrandIcon,
  LinkedinBrandIcon,
  SeoMagnifierIcon,
  XBrandIcon,
} from "@/components/SeoIcons";

const SOCIALS = [
  { label: "LinkedIn", href: "#contact", Icon: LinkedinBrandIcon },
  { label: "Facebook", href: "#contact", Icon: FacebookBrandIcon },
  { label: "X", href: "#contact", Icon: XBrandIcon },
  { label: "Website", href: "#portfolio", Icon: Globe },
];

export default function HeroSection() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#faf9f7] via-[#ffffff] to-[#f7f5f1] pt-28 pb-20 sm:pt-36 sm:pb-24 lg:min-h-[92svh] lg:flex lg:items-center"
    >
      {/* Ambient watercolor splashes matching the portfolio screenshot */}
      <div
        aria-hidden
        className="watercolor-blob-lavender pointer-events-none absolute -top-24 right-[6%] -z-10 h-80 w-96 rounded-full opacity-75"
      />
      <div
        aria-hidden
        className="watercolor-blob-teal pointer-events-none absolute -bottom-24 -left-16 -z-10 h-80 w-96 rounded-full opacity-80"
      />
      <div
        aria-hidden
        className="watercolor-blob-blush pointer-events-none absolute bottom-6 left-[18%] -z-10 h-56 w-56 rounded-full opacity-70"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Left bio column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="lg:col-span-6"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.19, 1, 0.22, 1] } },
            }}
          >
            <span className="inline-block text-lg font-semibold text-[#f2542d] sm:text-xl">
              Hello, I&apos;m
            </span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.19, 1, 0.22, 1] } },
            }}
            className="mt-2 font-serif text-5xl font-semibold tracking-tight text-[#22252a] sm:text-6xl lg:text-[4.35rem] lg:leading-[1.03]"
          >
            Zeeshan Alam
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] } },
            }}
            className="mt-4 text-lg font-semibold text-[#22252a] sm:text-xl"
          >
            SEO Executive &amp;{" "}
            <span className="text-[#f2542d]">WordPress / Shopify Developer</span>
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] } },
            }}
            className="mt-5 max-w-xl text-base leading-relaxed text-[#5f6672] sm:text-[17px]"
          >
            I help SaaS, E-Commerce, and growing brands build fast, conversion-focused WordPress
            and Shopify websites — paired with data-driven SEO strategies that rank higher and
            compound organic revenue.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] } },
            }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("#about", -40)}
              className="h-12 rounded-full bg-[#f2542d] px-8 text-sm font-semibold text-white shadow-[0_14px_30px_-10px_rgba(242,84,45,0.55)] hover:bg-[#d9431f]"
            >
              About Me
              <ArrowUpRight className="size-4" />
            </Button>

            <div className="flex items-center gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(href, -64);
                  }}
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex size-10 items-center justify-center rounded-full border border-[#e6e2db] bg-white text-[#302d29] shadow-xs transition-colors hover:border-[#f2542d] hover:text-[#f2542d]"
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right cutout portrait + floating SEO / Web badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.12 }}
          className="relative mx-auto w-full max-w-[440px] lg:col-span-6 lg:max-w-[470px]"
        >
          <div className="relative mx-auto flex items-end justify-center pt-4">
            {/* Soft ambient studio glow behind the cutout */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-12 bottom-8 -z-10 rounded-full bg-gradient-to-tr from-[#fde68a]/45 via-[#fed7aa]/45 to-[#e9d5ff]/45 blur-3xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/zeeshan-cutout.png"
              alt="Zeeshan Alam — SEO Executive, WordPress & Shopify Developer"
              className="relative z-0 aspect-[4/4.85] w-full object-contain object-bottom drop-shadow-[0_24px_38px_rgba(34,37,42,0.16)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-[#faf9f7] via-[#faf9f7]/70 to-transparent"
            />
          </div>

          {/* Floating SEO badge top-left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 -left-2 z-20 flex items-center gap-2.5 rounded-2xl border border-[#ece8e1] bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:-left-8"
          >
            <SeoMagnifierIcon className="size-9" />
            <div className="leading-tight">
              <p className="text-xs font-bold text-[#22252a]">SEO Executive</p>
              <p className="text-[11px] text-[#5f6672]">Google Top 3 Growth</p>
            </div>
          </motion.div>

          {/* Floating Target badge top-right */}
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute top-20 -right-2 z-20 flex size-14 items-center justify-center rounded-2xl border border-[#ece8e1] bg-white/95 shadow-lg backdrop-blur-sm sm:-right-6"
          >
            <BullseyeSearchIcon className="size-9" />
          </motion.div>

          {/* Floating Growth Metric pill bottom-left */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-6 left-2 z-20 flex items-center gap-3 rounded-2xl border border-[#ece8e1] bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:-left-6"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#fff3ee] text-[#f2542d]">
              <TrendingUp className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-sm font-bold text-[#22252a]">WP &amp; Shopify</span>
                <Badge className="h-4 bg-[#dcfce7] px-1.5 text-[10px] font-semibold text-[#166534] hover:bg-[#dcfce7]">
                  +342% SEO
                </Badge>
              </div>
              <p className="text-[11px] text-[#5f6672]">Fast Storefronts &amp; Rankings</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
