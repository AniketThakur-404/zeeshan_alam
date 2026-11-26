import React from "react";

export function BrandLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2.5 select-none">
      <div className="relative flex size-10 items-center justify-center rounded-full border-2 border-[#f2542d] bg-[#f2542d]/10">
        <span className="font-serif text-xl font-bold tracking-tight text-[#f2542d]">Z</span>
        <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-[#f2542d] ring-2 ring-white" />
      </div>
      <div className="leading-tight">
        <span
          className={`block text-[15px] font-bold tracking-tight ${
            inverted ? "text-white" : "text-[#22252a]"
          }`}
        >
          Zeeshan Alam
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.14em] ${
            inverted ? "text-[#fbd4c7]" : "text-[#f2542d]"
          }`}
        >
          SEO &bull; WP &bull; Shopify
        </span>
      </div>
    </div>
  );
}

export function TargetDartIcon({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <circle cx="28" cy="34" r="18" stroke="#f2542d" strokeWidth="2.8" fill="#fff5f2" />
      <circle cx="28" cy="34" r="11" stroke="#f2542d" strokeWidth="2.4" />
      <circle cx="28" cy="34" r="4.5" fill="#f2542d" />
      <path d="M28 52v6M22 58h12" stroke="#22252a" strokeWidth="2.8" strokeLinecap="round" />
      <path
        d="M31 31L51 11M51 11h-7M51 11v7"
        stroke="#22252a"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SeoMagnifierIcon({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <text
        x="4"
        y="39"
        fill="#22252a"
        fontSize="18"
        fontWeight="800"
        fontFamily="system-ui, sans-serif"
        letterSpacing="-0.5"
      >
        SE
      </text>
      <circle cx="42" cy="31" r="11" stroke="#f2542d" strokeWidth="3.2" fill="#fff5f2" />
      <path
        d="M37 33l3 3 6-7"
        stroke="#f2542d"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 39l8 8"
        stroke="#22252a"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BullseyeSearchIcon({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <circle cx="29" cy="31" r="18" fill="#f2542d" fillOpacity="0.14" stroke="#f2542d" strokeWidth="2.8" />
      <circle cx="29" cy="31" r="11" stroke="#f2542d" strokeWidth="2.8" fill="#ffffff" />
      <circle cx="29" cy="31" r="4.5" fill="#f2542d" />
      <path
        d="M42 44l12 12"
        stroke="#22252a"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M32 28L52 8M45 8h7v7"
        stroke="#22252a"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TechnicalAuditIcon({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <rect x="8" y="12" width="48" height="36" rx="8" stroke="#22252a" strokeWidth="2.6" fill="#fff8f5" />
      <path d="M8 22h48" stroke="#22252a" strokeWidth="2.2" />
      <circle cx="15" cy="17" r="1.8" fill="#f2542d" />
      <circle cx="21" cy="17" r="1.8" fill="#f59e0b" />
      <circle cx="27" cy="17" r="1.8" fill="#22c55e" />
      <path
        d="M20 35l5-5-5-5M30 37h14"
        stroke="#f2542d"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24 54h16" stroke="#22252a" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

export function LinkedinBrandIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.2 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
    </svg>
  );
}

export function FacebookBrandIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21V12.8H16.25L16.66 9.6H13.5V7.56C13.5 6.63 13.76 6 15.09 6H16.78V3.14C16.49 3.1 15.49 3.01 14.33 3.01C11.9 3.01 10.24 4.49 10.24 7.21V9.6H7.5V12.8H10.24V21H13.5Z" />
    </svg>
  );
}

export function XBrandIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}
