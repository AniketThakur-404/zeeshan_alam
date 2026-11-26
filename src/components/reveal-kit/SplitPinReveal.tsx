"use client";
/**
 * SECTION 1 — "Brand Story / About" split pin reveal
 * Customized from image-reveal-kit for Zeeshan Alam's Portfolio.
 *
 * Desktop (>960px): the image (cropped to half its width) slides in from the screen edge
 * as the section scrolls up. When the section hits the top it pins, the crop
 * unfolds to the full image and the copy rises in with a stagger.
 * Phone (<=960px): image slides in from the edge, copy fades in from the side.
 */
import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./split-pin-reveal.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  image: string;
  alt: string;
  /** image on the right instead of the left */
  reverse?: boolean;
  /** optional overlay cards/badges anchored over the media frame */
  mediaOverlay?: ReactNode;
  /** each direct child animates in on its own (kicker, title, quote, paragraph, CTA...) */
  children: ReactNode;
  id?: string;
};

export default function SplitPinReveal({
  image,
  alt,
  reverse = false,
  mediaOverlay,
  children,
  id,
}: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const copy = ".spr__copy > *";

      // ---- Phone / tablet: simple slide-ins, no pinning
      mm.add("(max-width: 960px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".spr__media",
          { xPercent: reverse ? 100 : -100 },
          {
            xPercent: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: root.current, start: "top 95%", once: true },
          }
        );
        gsap.from(copy, {
          x: reverse ? -24 : 24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: { trigger: ".spr__text", start: "top 92%", once: true },
        });
      });

      // ---- Desktop: slide in half-cropped, then pin and unfold
      mm.add("(min-width: 961px) and (prefers-reduced-motion: no-preference)", () => {
        const section = root.current!;
        const text = section.querySelector<HTMLElement>(".spr__text")!;
        const overflow = () => Math.max(0, text.scrollHeight - section.clientHeight);
        const revealDistance = () => window.innerHeight * 1.25 + overflow();

        // Stage 1: only the inner half of the image is visible, pushed off-screen.
        gsap.set(".spr__media", {
          clipPath: reverse ? "inset(0% 0% 0% 50%)" : "inset(0% 50% 0% 0%)",
        });
        gsap.fromTo(
          ".spr__media",
          { xPercent: reverse ? 50 : -50 },
          {
            xPercent: 0,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top top",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          }
        );

        // Stage 2: pinned — unfold the crop and bring the copy in.
        gsap.set(copy, { y: 24, autoAlpha: 0 });
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => "+=" + revealDistance(),
              pin: true,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(
            ".spr__media",
            { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "sine.inOut" },
            0
          )
          .to(
            copy,
            { y: 0, autoAlpha: 1, stagger: 0.07, duration: 0.4, ease: "power2.out" },
            0.15
          )
          .to(text, { y: () => -overflow(), duration: 0.35, ease: "sine.inOut" }, 0.95)
          .to({}, { duration: 0.3 }); // short hold before the pin releases
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [reverse] }
  );

  return (
    <section id={id} ref={root} className={`spr${reverse ? " spr--rev" : ""}`}>
      <div className="spr__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={alt} draggable={false} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
        />
        {mediaOverlay}
      </div>
      <div className="spr__text">
        <div className="spr__copy">{children}</div>
      </div>
    </section>
  );
}
