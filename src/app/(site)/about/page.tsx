import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { assetUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Next Step Remodeling | Sandy & Salt Lake City, UT",
  description:
    "Meet Parker and the team behind Next Step Remodeling — a licensed Utah contractor serving Sandy, Salt Lake City, and the Wasatch Front with 10 five-star Google reviews.",
  openGraph: {
    title: "About Next Step Remodeling | Sandy & Salt Lake City, UT",
    description:
      "Meet Parker and the team behind Next Step Remodeling — a licensed Utah contractor serving Sandy, Salt Lake City, and the Wasatch Front with 10 five-star Google reviews.",
    images: [assetUrl("/assets/next-step-owner.jpg")],
  },
};

const stats = [
  { value: "5.0", label: "Google rating" },
  { value: "10", label: "Five-star Google reviews" },
  { value: "3×", label: "Nextdoor Neighborhood Favorite" },
  { value: "Licensed", label: "Utah contractor #8416576-5501" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h1
            className="hero-reveal max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            About Next Step Remodeling
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            style={{ "--d": "220ms" } as CSSProperties}
          >
            Owner-led remodeling built on honest communication and careful craftsmanship.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Meet Parker &amp; Monica
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Next Step Remodeling is owned and run by Parker and Monica. What began with smaller
                projects has grown into kitchen, bathroom, basement, and whole-home remodels across the
                Salt Lake Valley — plus garages, decks, and new construction.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Parker leads every project from the first walkthrough to the final punch list. Monica
                keeps communication and scheduling moving, so you always know where things stand. The
                crew brings samples, practical ideas, and regular updates, and protects and cleans your
                home along the way.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Many of our clients come to us after a rough experience with another contractor. The
                difference is the process: a clear scope, realistic timelines, and honest answers when a
                wall opens up and something unexpected is behind it.
              </p>
            </div>

            <figure
              data-reveal
              className="relative opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink">
                <img
                  src={assetUrl("/assets/next-step-owner.jpg")}
                  alt="Next Step Remodeling crew member on site during a home renovation"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-sm text-slate-500">
                On site during a Next Step Remodeling renovation.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              Licensed, Trusted &amp; 5-Star Rated
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
              Serving Sandy, Salt Lake City, and the surrounding Wasatch Front communities.
            </p>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-reveal
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <p className="font-display text-5xl text-gold">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-white/40">
            Based on Next Step Remodeling&rsquo;s Google Maps profile and Nextdoor recommendations,
            November 2026.
          </p>
          <div className="mt-14 text-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Get a Quote
              <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
