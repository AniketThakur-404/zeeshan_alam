"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Minus,
  Navigation,
  Phone,
  Plus,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-white pt-20 pb-0 sm:pt-28"
    >
      {/* Decorative teal spiral & dots matching the screenshot */}
      <svg
        aria-hidden
        viewBox="0 0 120 120"
        fill="none"
        className="pointer-events-none absolute top-28 -left-6 -z-10 size-36 opacity-50"
      >
        <path
          d="M60 60c0-8 10-12 16-6 9 9 3 24-10 26-18 3-32-14-30-32 3-24 27-39 50-33"
          stroke="#14b8a6"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-bold tracking-[0.16em] text-[#f2542d] uppercase">
            Contact Me
          </span>
          <h2 className="mt-2.5 font-serif text-4xl font-semibold text-[#22252a] sm:text-5xl">
            I Want To Hear From You
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6672]">
            Please fill out the form on this section to discuss an SEO audit, organic growth
            retainer, or technical migration.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="flex items-start gap-4 rounded-2xl border border-[#ece8e0] bg-[#faf9f7] p-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#fff1ee] text-[#f2542d]">
                <MapPin className="size-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#22252a]">Location</h3>
                <p className="mt-1 text-sm text-[#5f6672]">
                  Okhla Phase II, New Delhi, India (Available Remote Worldwide)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[#ece8e0] bg-[#faf9f7] p-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-[#10b981]">
                <Mail className="size-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#22252a]">Email</h3>
                <a
                  href="mailto:Zeeshanalam9953@gmail.com"
                  className="mt-1 block text-sm text-[#5f6672] transition-colors hover:text-[#f2542d]"
                >
                  Zeeshanalam9953@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[#ece8e0] bg-[#faf9f7] p-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#4f46e5]">
                <Phone className="size-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#22252a]">Phone</h3>
                <a
                  href="tel:+919953629913"
                  className="mt-1 block text-sm text-[#5f6672] transition-colors hover:text-[#f2542d]"
                >
                  99536 29913
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right shadcn form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-[#d1fae5] bg-[#ecfdf5]/70 p-8 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-[#10b981] text-white">
                  <CheckCircle2 className="size-7" />
                </div>
                <h3 className="mt-4 font-serif text-3xl font-semibold text-[#22252a]">
                  Message Received!
                </h3>
                <p className="mt-2 max-w-md text-sm text-[#5f6672]">
                  Thanks <span className="font-semibold text-[#22252a]">{name}</span> — I&apos;ve
                  logged your inquiry and will reply to{" "}
                  <span className="font-semibold text-[#22252a]">{email}</span> within 24 hours
                  with initial Search Console observations.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setWebsite("");
                    setMessage("");
                  }}
                  className="mt-6 rounded-full"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border border-[#ece8e0] bg-white p-6 shadow-[0_18px_45px_-28px_rgba(34,37,42,0.18)] sm:p-8"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name">Your Name</Label>
                    <Input
                      id="contact-name"
                      required
                      placeholder="Alex Mercer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 rounded-xl border-[#e2ded8]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-email">Your Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 rounded-xl border-[#e2ded8]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-website">Website URL (Optional)</Label>
                  <Input
                    id="contact-website"
                    placeholder="https://yourcompany.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="h-11 rounded-xl border-[#e2ded8]"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-message">Project Goals &amp; SEO Challenges</Label>
                  <Textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your target market, organic traffic goals, and timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[116px] rounded-xl border-[#e2ded8]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-full bg-[#f2542d] text-sm font-semibold text-white shadow-[0_14px_30px_-10px_rgba(242,84,45,0.45)] hover:bg-[#d9431f]"
                >
                  <Send className="size-4" />
                  Submit Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Full-width interactive stylized map strip */}
      <div className="relative mt-20 h-72 w-full overflow-hidden border-t border-[#e2e8f0] bg-[#dbeadf] sm:h-80">
        <div
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
        >
          <svg
            viewBox="0 0 1440 360"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
            aria-label="Map of New Delhi, India"
          >
            <rect width="1440" height="360" fill="#dbeadf" />
            {/* Parks & river */}
            <path
              d="M0 245 Q280 210 510 265 T1040 240 T1440 275 L1440 360 L0 360 Z"
              fill="#bae6fd"
              opacity="0.7"
            />
            <rect x="190" y="60" width="220" height="120" rx="28" fill="#c7e4cc" />
            <rect x="860" y="40" width="260" height="110" rx="28" fill="#c7e4cc" />
            {/* Road network */}
            <path d="M0 110 L1440 165" stroke="#ffffff" strokeWidth="10" />
            <path d="M0 215 L1440 120" stroke="#fef3c7" strokeWidth="12" />
            <path d="M440 0 L520 360" stroke="#ffffff" strokeWidth="8" />
            <path d="M720 0 L705 360" stroke="#fef3c7" strokeWidth="14" />
            <path d="M1020 0 L965 360" stroke="#ffffff" strokeWidth="8" />
            <circle cx="712" cy="166" r="24" fill="#ffffff" stroke="#cbd5e1" strokeWidth="4" />
            {/* District labels */}
            <text x="245" y="130" fill="#475569" fontSize="13" fontWeight="600">
              Connaught Place
            </text>
            <text x="645" y="102" fill="#0f172a" fontSize="14" fontWeight="700">
              New Delhi • India
            </text>
            <text x="955" y="112" fill="#475569" fontSize="13" fontWeight="600">
              Noida NCR
            </text>
            <text x="580" y="255" fill="#475569" fontSize="13" fontWeight="600">
              South Delhi
            </text>
          </svg>
        </div>

        {/* Floating location pin card top-left */}
        <div className="absolute top-4 left-4 z-10 max-w-xs rounded-xl border border-[#e2e8f0] bg-white/95 p-3.5 shadow-lg backdrop-blur-sm sm:top-6 sm:left-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#22252a]">Zeeshan Alam — SEO &amp; Web Studio</p>
              <p className="mt-0.5 text-xs text-[#5f6672]">New Delhi, India &bull; Remote Worldwide</p>
            </div>
            <Badge className="bg-[#fff3ee] text-[10px] text-[#f2542d] hover:bg-[#fff3ee]">
              IST +5:30
            </Badge>
          </div>
          <a
            href="https://maps.google.com/?q=New+Delhi,India"
            target="_blank"
            rel="noreferrer"
            className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-[#2563eb] hover:underline"
          >
            <Navigation className="size-3" />
            Open Directions
          </a>
        </div>

        {/* Center active marker */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute -inset-3 animate-ping rounded-full bg-[#f2542d]/40" />
          <div className="relative flex size-10 items-center justify-center rounded-full border-2 border-white bg-[#f2542d] text-white shadow-xl">
            <MapPin className="size-5" />
          </div>
        </div>

        {/* Zoom controls bottom-right */}
        <div className="absolute right-4 bottom-4 z-10 flex flex-col overflow-hidden rounded-lg border border-[#e2e8f0] bg-white shadow-md">
          <button
            type="button"
            aria-label="Zoom in map"
            onClick={() => setZoom((z) => Math.min(1.45, +(z + 0.15).toFixed(2)))}
            className="flex size-8 items-center justify-center border-b border-[#e2e8f0] text-[#302d29] hover:bg-[#faf8f5]"
          >
            <Plus className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Zoom out map"
            onClick={() => setZoom((z) => Math.max(0.9, +(z - 0.15).toFixed(2)))}
            className="flex size-8 items-center justify-center text-[#302d29] hover:bg-[#faf8f5]"
          >
            <Minus className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
