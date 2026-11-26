"use client";
/**
 * SECTION 3 — "My Amazing Works / Selected Work" scale-up gallery
 * Customized from image-reveal-kit for Zeeshan Alam's Portfolio.
 */
import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./scale-gallery.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type Tile = {
  id?: string;
  src: string;
  alt: string;
  title: string;
  category?: string;
  headlineMetric?: string;
  width: number;
  height: number;
};

export type Row = { kind: "two" | "center"; tiles: Tile[] };

function GalleryTile({ t, onOpen }: { t: Tile; onOpen?: (t: Tile) => void }) {
  const ref = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ref.current,
          { scale: 0.65, transformOrigin: "center center" },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current!.parentElement,
              start: "top bottom",
              end: "top 15%",
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <button
      ref={ref}
      type="button"
      className="sg-tile"
      style={{
        aspectRatio: `${t.width} / ${t.height}`,
        ["--r" as string]: t.width / t.height,
      }}
      data-cursor="View"
      aria-label={`Open ${t.title}`}
      onClick={() => onOpen?.(t)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={t.src} alt={t.alt} loading="lazy" draggable={false} />
      <span className="sg-tile__meta">
        <span>
          {t.category && <span className="sg-tile__badge">{t.category}</span>}
          <span className="sg-tile__title">{t.title}</span>
        </span>
        {t.headlineMetric && <span className="sg-tile__metric">{t.headlineMetric}</span>}
      </span>
    </button>
  );
}

export default function ScaleGallery({
  id,
  rows,
  kicker,
  heading = "Selected Work",
  note,
  onOpen,
  headerActions,
  footerSlot,
}: {
  id?: string;
  rows: Row[];
  kicker?: string;
  heading?: string;
  note?: string;
  onOpen?: (t: Tile) => void;
  headerActions?: ReactNode;
  footerSlot?: ReactNode;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".sg__title", {
          y: 50,
          opacity: 0,
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: { trigger: ".sg__title", start: "top 85%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id={id} ref={root} className="sg">
      <div className="sg__header">
        {kicker && <span className="sg__kicker">{kicker}</span>}
        <h2 className="sg__title">{heading}</h2>
        {note && <p className="sg__note">{note}</p>}
        {headerActions}
      </div>
      <div className="sg__grid-wrap">
        {rows.map((r, i) => (
          <div key={i} className={`sg__row sg__row--${r.kind}`}>
            {r.tiles.map((t) => (
              <GalleryTile key={t.src} t={t} onOpen={onOpen} />
            ))}
          </div>
        ))}
      </div>
      {footerSlot}
    </section>
  );
}
