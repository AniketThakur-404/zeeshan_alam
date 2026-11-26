"use client";

import { useState, type FormEvent } from "react";
import { ArrowUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BrandLogo } from "@/components/SeoIcons";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

const POLICY_DOCS: Record<string, { title: string; body: string }> = {
  privacy: {
    title: "Privacy Policy",
    body: "Client Search Console, Google Analytics 4, and CRM audit credentials are protected under strict NDA, encrypted during transfer, and never shared with third-party vendors.",
  },
  terms: {
    title: "Terms & Conditions",
    body: "SEO retainers and technical audits follow clear milestone scopes, transparent monthly KPI reporting, and ethical white-hat search guidelines compliant with Google Search Essentials.",
  },
  cookie: {
    title: "Cookie & Analytics Policy",
    body: "This portfolio uses zero invasive third-party ad trackers. Smooth scrolling and animation preferences strictly respect your browser's reduced-motion settings.",
  },
};

export default function Footer() {
  const { scrollTo } = useSmoothScroll();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [docKey, setDocKey] = useState<string | null>(null);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  const activeDoc = docKey ? POLICY_DOCS[docKey] : null;

  return (
    <>
      <footer className="bg-[#323f4b] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 md:grid-cols-12">
          {/* Left brand bio */}
          <div className="md:col-span-5">
            <BrandLogo inverted />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              SEO Executive, WordPress Developer, and Shopify Developer helping brands build fast,
              conversion-ready websites and scale predictable organic search revenue.
            </p>
          </div>

          {/* Center useful links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Useful Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => setDocKey("privacy")}
                  className="transition-colors hover:text-[#f2542d]"
                >
                  &bull; Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setDocKey("terms")}
                  className="transition-colors hover:text-[#f2542d]"
                >
                  &bull; Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setDocKey("cookie")}
                  className="transition-colors hover:text-[#f2542d]"
                >
                  &bull; Cookie Policy
                </button>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#portfolio", -64);
                  }}
                  className="transition-colors hover:text-[#f2542d]"
                >
                  &bull; SEO Case Studies
                </a>
              </li>
              <li>
                <a
                  href="/Zeeshan_Alam_Resume.pdf"
                  download="Zeeshan_Alam_Resume.pdf"
                  className="transition-colors hover:text-[#f2542d]"
                >
                  &bull; Download Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Right newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Get In Touch
            </h3>
            <p className="mt-4 text-sm text-slate-300">
              Receive monthly Google core update breakdowns &amp; actionable technical SEO notes.
            </p>

            {subscribed ? (
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-4 py-3 text-xs font-medium text-emerald-200">
                <CheckCircle2 className="size-4 shrink-0" />
                Subscribed! Watch your inbox for the next SEO Playbook.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 space-y-2.5">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 rounded-lg border-0 bg-white text-sm text-[#22252a] placeholder:text-slate-400"
                />
                <Button
                  type="submit"
                  className="h-10 w-full rounded-lg bg-[#f2542d] text-xs font-bold tracking-wider text-white uppercase hover:bg-[#d9431f]"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Coral copyright strip */}
        <div className="bg-[#f2542d] text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
            <p className="text-xs font-medium sm:text-sm">
              &copy; 2026 Zeeshan Alam &bull; All rights reserved.
            </p>
            <button
              type="button"
              aria-label="Scroll back to top"
              onClick={() => scrollTo(0)}
              className="flex size-8 items-center justify-center rounded-md bg-white/15 text-white transition-colors hover:bg-white hover:text-[#f2542d]"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </footer>

      <Dialog open={!!activeDoc} onOpenChange={(open) => !open && setDocKey(null)}>
        <DialogContent className="rounded-2xl border-[#eae6e0] bg-white p-6 sm:max-w-md">
          {activeDoc && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl font-semibold text-[#22252a]">
                  {activeDoc.title}
                </DialogTitle>
                <DialogDescription className="pt-2 text-sm leading-relaxed text-[#5f6672]">
                  {activeDoc.body}
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end pt-2">
                <Button onClick={() => setDocKey(null)} className="rounded-full bg-[#f2542d] text-white">
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
