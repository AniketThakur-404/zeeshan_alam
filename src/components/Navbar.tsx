"use client";

import { useEffect, useState } from "react";
import { Download, Eye, Menu, Award, CheckCircle2, ExternalLink } from "lucide-react";
import { cn } from "cn";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NAV_LINKS } from "@/data/portfolio";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";
import { BrandLogo } from "@/components/SeoIcons";

const RESUME_URL = "/Zeeshan_Alam_Resume.pdf";

export default function Navbar() {
  const { scrollTo } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollTo(href, href === "#home" ? 0 : -64);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled
            ? "border-b border-[#eae6e0]/90 bg-white/90 py-3 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.18)] backdrop-blur-md"
            : "bg-transparent py-5"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
            aria-label="Zeeshan Alam Home"
          >
            <BrandLogo />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-sm font-medium text-[#302d29] transition-colors hover:text-[#f2542d]"
              >
                {link.label}
              </a>
            ))}
          </nav>

            <div className="hidden items-center gap-2.5 lg:flex">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCvOpen(true)}
                className="h-10 rounded-full px-3.5 text-xs font-semibold text-[#5f6672] hover:bg-[#faf8f5] hover:text-[#22252a]"
              >
                <Eye className="size-3.5" />
                Preview
              </Button>
              <a
                href={RESUME_URL}
                download="Zeeshan_Alam_Resume.pdf"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-10 rounded-full border-[#f2542d] px-5 text-sm font-semibold text-[#22252a] hover:bg-[#f2542d] hover:text-white"
                )}
              >
                <Download className="size-4" />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon" aria-label="Open menu" className="rounded-full" />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white p-6">
                <SheetHeader className="p-0 text-left">
                  <SheetTitle>
                    <BrandLogo />
                  </SheetTitle>
                  <SheetDescription className="pt-2 text-xs text-[#5f6672]">
                    SEO Specialist &bull; WordPress Developer &bull; Shopify Support
                  </SheetDescription>
                </SheetHeader>
                <Separator className="my-5" />
                <div className="flex flex-col gap-3">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className="rounded-lg px-3 py-2 text-base font-medium text-[#22252a] transition-colors hover:bg-[#fff3ee] hover:text-[#f2542d]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                  <div className="mt-6 space-y-2.5">
                    <a
                      href={RESUME_URL}
                      download="Zeeshan_Alam_Resume.pdf"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "h-11 w-full rounded-full bg-[#f2542d] font-semibold text-white hover:bg-[#d9431f]"
                      )}
                    >
                      <Download className="size-4" />
                      Download Resume (PDF)
                    </a>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setMobileOpen(false);
                        setCvOpen(true);
                      }}
                      className="h-10 w-full rounded-full text-xs font-semibold"
                    >
                      <Eye className="size-3.5" />
                      Preview Resume
                    </Button>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <Dialog open={cvOpen} onOpenChange={setCvOpen}>
          <DialogContent className="max-h-[92svh] overflow-y-auto rounded-2xl border-[#eae6e0] bg-white p-6 sm:max-w-3xl">
            <DialogHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-[#fff3ee] text-[#f2542d] hover:bg-[#fff3ee]">
                    Curriculum Vitae (PDF)
                  </Badge>
                  <Badge variant="outline" className="font-mono text-[11px]">
                    Website SEO Executive &bull; Gohype Media Pvt. Ltd.
                  </Badge>
                </div>
                <DialogTitle className="pt-2 font-serif text-3xl font-semibold text-[#22252a]">
                  Zeeshan Alam — Resume
                </DialogTitle>
                <DialogDescription className="text-sm text-[#5f6672]">
                  SEO Specialist | WordPress Developer | Shopify Support &bull; New Delhi, India (BCA,
                  Jamia Hamdard University)
                </DialogDescription>
            </DialogHeader>

                <div className="grid grid-cols-1 gap-3 rounded-xl bg-[#faf8f5] p-3.5 text-sm sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-[#5f6672]">Current Role</p>
                    <p className="font-semibold text-[#22252a]">Website SEO Executive</p>
                    <p className="text-xs text-[#f2542d]">Feb 2025 – Present</p>
                  </div>
                    <div>
                      <p className="text-xs text-[#5f6672]">Education</p>
                      <p className="font-semibold text-[#22252a]">BCA (2021 – 2024)</p>
                      <p className="text-xs text-[#5f6672]">Jamia Hamdard University</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#5f6672]">Contact</p>
                      <p className="font-semibold text-[#22252a]">+91 99536 29913</p>
                      <p className="truncate text-xs text-[#5f6672]">Zeeshanalam9953@gmail.com</p>
                    </div>
                  </div>

                    <div className="overflow-hidden rounded-xl border border-[#eae6e0] bg-[#f8fafc]">
                      <iframe
                        src={`${RESUME_URL}#toolbar=0&navpanes=0`}
                        title="Zeeshan Alam Resume PDF"
                        className="h-[360px] w-full sm:h-[420px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-sm font-semibold text-[#22252a]">
                        <Award className="size-4 text-[#f2542d]" />
                        Core Tools &amp; Stack
                      </p>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-[#5f6672] sm:grid-cols-3">
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-[#22c55e]" />
                          GA4, GSC &amp; Tag Manager
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-[#22c55e]" />
                          Ahrefs, SEMrush &amp; Screaming Frog
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-[#22c55e]" />
                          WordPress, WooCommerce &amp; Shopify
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col-reverse gap-2 pt-1 sm:flex-row sm:justify-end">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setCvOpen(false);
                          scrollTo("#contact", -64);
                        }}
                        className="rounded-full"
                      >
                        Book Discovery Call
                      </Button>
            <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
                      >
                      <ExternalLink className="size-4" />
                      Open PDF
                    </a>
                    <a
                      href={RESUME_URL}
                      download="Zeeshan_Alam_Resume.pdf"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "rounded-full bg-[#f2542d] text-white hover:bg-[#d9431f]"
                      )}
                    >
                      <Download className="size-4" />
                      Download Resume PDF
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </>
            );
}
