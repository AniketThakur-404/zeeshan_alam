"use client";
/**
 * SECTION 2 — "Search Architecture" centre-strip expand + horizontal slider
 * Customized from image-reveal-kit for Zeeshan Alam's Portfolio.
 *
 * A full-screen image starts as a zero-width vertical slit in the middle,
 * widens to a centre strip while the section scrolls up, then (pinned) opens to
 * full bleed. The slide title fades in, and further scrolling slides the track
 * horizontally through the remaining slides before the pin releases.
 */
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./expand-slider.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type Slide = {
  src: string;
  alt: string;
  title: string;
  phase?: string;
  metric?: string;
};

type Props = {
  slides: Slide[];
  kicker?: string;
  heading?: string;
  intro?: string;
  id?: string;
};

export default function ExpandSlider({ slides, kicker, heading, intro, id }: Props) {
  const root = useRef<HTMLElement>(null);
  const n = slides.length;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { phone: "(max-width: 560px)", reduced: "(prefers-reduced-motion: reduce)" },
        (ctx) => {
          const { phone, reduced } = ctx.conditions as { phone: boolean; reduced: boolean };

          // Heading from the left, paragraph from the right
          if ((heading || intro) && !reduced) {
            const dist = window.innerWidth <= 768 ? "12vw" : "18vw";
            const st = {
              trigger: ".xs-intro",
              start: "top 82%",
              toggleActions: "play none none reverse",
            };
            gsap.fromTo(
              ".xs-intro__title",
              { x: `-${dist}`, opacity: 0 },
              { x: 0, opacity: 1, duration: 1.3, ease: "power3.out", scrollTrigger: st }
            );
            gsap.fromTo(
              ".xs-intro__para",
              { x: dist, opacity: 0 },
              { x: 0, opacity: 1, duration: 1.3, ease: "power3.out", scrollTrigger: st }
            );
          }

          // One clip-path driven by two progress values so both stages join
          // seamlessly, including when scrolling back up.
          const view = root.current!.querySelector<HTMLElement>(".xs__view")!;
          const start = phone ? 38 : 50; // % inset per side at the beginning (50 = invisible slit)
          const mid = 20; // % inset per side when the pin begins
          const p = { entrance: 0, expansion: 0 };
          const render = () => {
            const inset = reduced
              ? 0
              : Math.max(0, start - p.entrance * (start - mid) - p.expansion * mid);
            view.style.clipPath = `inset(0% ${inset}% 0% ${inset}%)`;
          };
          render();

          // Stage 1: slit -> centre strip, while the section scrolls into place
          if (!reduced) {
            gsap.fromTo(
              p,
              { entrance: 0 },
              {
                entrance: 1,
                ease: "none",
                onUpdate: render,
                scrollTrigger: {
                  trigger: ".xs",
                  start: "top 85%",
                  end: "top top",
                  scrub: phone ? true : 0.6,
                  invalidateOnRefresh: true,
                },
              }
            );
          }

          // Stage 2: pinned — strip -> full bleed, title in, then slide through
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: ".xs",
              start: "top top",
              end: () => `+=${window.innerHeight * (n + 0.6)}`,
              pin: true,
              scrub: phone ? true : 1,
              invalidateOnRefresh: true,
            },
          });
          tl.fromTo(
            p,
            { expansion: 0 },
            { expansion: 1, duration: 1, ease: "sine.out", onUpdate: render },
            0
          ).fromTo(
            ".xs__label h3, .xs__phase, .xs__metric",
            { autoAlpha: reduced ? 1 : 0 },
            { autoAlpha: 1, duration: 0.35 },
            0.3
          );
          if (n > 1) {
            tl.fromTo(
              ".xs__track",
              { xPercent: 0 },
              { xPercent: (-100 * (n - 1)) / n, duration: n - 1 },
              1
            );
          }
          tl.to({}, { duration: 0.2 });
        }
      );
      return () => mm.revert();
    },
    { scope: root, dependencies: [n] }
  );

  return (
    <section id={id} ref={root} className="xs-section">
      {(heading || intro) && (
        <div className="xs-intro">
          {kicker && <span className="xs-intro__kicker">{kicker}</span>}
          {heading && <h2 className="xs-intro__title">{heading}</h2>}
          {intro && <p className="xs-intro__para">{intro}</p>}
        </div>
      )}
      <div className="xs">
        <div className="xs__view">
          <div className="xs__track" style={{ ["--n" as string]: n }}>
            {slides.map((s, idx) => (
              <article key={s.title} className="xs__slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.alt} loading="eager" decoding="async" />
                <div className="xs__shade" />
                <div className="xs__label">
                  {s.phase && <span className="xs__phase">{s.phase}</span>}
                  <h3>{s.title}</h3>
                  {s.metric && <p className="xs__metric">{s.metric}</p>}
                </div>
                <span className="pointer-events-none absolute right-6 bottom-6 z-10 font-mono text-xs tracking-[0.2em] text-white/70">
                  0{idx + 1} / 0{n}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
