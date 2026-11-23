import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/ui/QuoteForm";
import ReviewsSwiper from "@/components/ui/ReviewsSwiper";
import { INSTAGRAM_POSTS } from "@/lib/instagram";
import { REVIEWS } from "@/lib/reviews";
import {
  assetUrl,
  EMAIL_DISPLAY,
  EMAIL_MAILTO,
  GOOGLE_REVIEWS_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Kitchen, Bath & Basement Remodeling in Salt Lake City, UT | Next Step Remodeling",
  description:
    "Top-rated kitchen, bathroom, and basement remodeling in Sandy and Salt Lake City, UT. Owner-led projects, clear communication, and a 5.0 Google rating. Get a free quote.",
  openGraph: {
    title: "Kitchen, Bath & Basement Remodeling in Salt Lake City, UT | Next Step Remodeling",
    description:
      "Top-rated kitchen, bathroom, and basement remodeling in Sandy and Salt Lake City, UT. Owner-led projects, clear communication, and a 5.0 Google rating. Get a free quote.",
    images: [assetUrl("/assets/hero.jpg")],
  },
};

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const RECENT_PROJECTS = [
  {
    href: "/portfolio/1",
    image: "/assets/work/kitchen-warm-wood.jpg",
    alt: "Warm wood kitchen with curved islands and pendant lighting in a Salt Lake Valley home",
    category: "Kitchens",
    title: "Warm Wood Kitchen with Curved Islands",
  },
  {
    href: "/portfolio/4",
    image: "/assets/work/deck-balcony.jpg",
    alt: "Before-and-after of a two-story deck and covered balcony rebuild in Utah",
    category: "Additions & Outdoor",
    title: "Two-Story Deck & Covered Balcony",
  },
  {
    href: "/portfolio/2",
    image: "/assets/work/great-room.jpg",
    alt: "Vaulted great room with a coffered wood ceiling and mountain views",
    category: "Whole-Home",
    title: "Vaulted Great Room with Wood Ceiling",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[55svh] items-center overflow-hidden bg-ink text-white">
        <img
          src={assetUrl("/assets/hero.jpg")}
          alt="Warm wood kitchen with curved islands and mountain views in a Next Step Remodeling project"
          width="1920"
          height="1280"
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/10 to-ink/30" />

        <div className="mx-auto w-full max-w-7xl px-5 py-28 sm:py-36 lg:px-8 lg:py-44">
          <div className="max-w-5xl">
            <h1 className="font-display text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="hero-word">
                <span className="hero-word-inner text-gold" style={delay(160)}>Next Step</span>
              </span>{" "}
              <span className="hero-word">
                <span className="hero-word-inner" style={delay(240)}>Remodeling</span>
              </span>
            </h1>

            <p
              className="hero-reveal mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg"
              style={delay(440)}
            >
              Top-Rated Kitchen, Bath &amp; Basement Remodeling in Salt Lake City, UT
            </p>

            <div
              className="hero-reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={delay(560)}
            >
              <a
                href="#quote"
                className="hero-btn hero-btn-primary inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Get a Quote
                <svg className="hero-arrow h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
              </a>
              <a
                href={PHONE_HREF}
                className="hero-btn hero-btn-secondary inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg className="hero-phone-icon h-4 w-4 text-gold" aria-hidden="true">
                  <use href="#icon-phone" />
                </svg>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-white py-28 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="max-w-2xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Our Remodeling Services
            </h2>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
            <article
              data-reveal
              className="group flex flex-col opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <Link
                href="/services#kitchens"
                className="group/image relative block overflow-hidden rounded-2xl bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <img
                  src={assetUrl("/assets/work/kitchen-white-island.jpg")}
                  alt="White shaker kitchen with a large island, quartz counters, and tiled backsplash in Utah"
                  width="1600"
                  height="2133"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-center transition duration-700 ease-out group-hover/image:scale-[1.03]"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition group-hover/image:bg-gold group-hover/image:text-ink">
                  View kitchen services
                </span>
              </Link>
              <h3 className="mt-6 font-display text-2xl font-normal text-ink">
                <Link href="/services#kitchens" className="transition hover:text-gold-dark">
                  Kitchen Remodeling in Salt Lake City
                </Link>
              </h3>
              <p className="mt-3 flex-1 line-clamp-2 text-[15px] leading-7 text-slate-600">
                Custom cabinetry, quartz counters, and tilework planned for the way you cook and gather.
              </p>
              <a
                href="#quote"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold-dark"
              >
                Request a kitchen quote
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </a>
            </article>

            <article
              data-reveal
              className="group flex flex-col opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <Link
                href="/services#bathrooms"
                className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl bg-ink p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span className="flex gap-0.5 text-gold" role="img" aria-label="5 out of 5 stars">
                  <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                  <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                  <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                  <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                  <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                </span>
                <blockquote className="font-display text-lg leading-7 text-white sm:text-xl">
                  “Parker was able to make her dream bathroom come true!”
                </blockquote>
                <div className="flex items-end justify-between gap-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Heather Tiffany · Google review
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    View bathroom services
                  </span>
                </div>
              </Link>
              <h3 className="mt-6 font-display text-2xl font-normal text-ink">
                <Link href="/services#bathrooms" className="transition hover:text-gold-dark">
                  Bathroom Remodeling in Salt Lake City
                </Link>
              </h3>
              <p className="mt-3 flex-1 line-clamp-2 text-[15px] leading-7 text-slate-600">
                Walk-in showers, freestanding tubs, double vanities, and tile work done right.
              </p>
              <a
                href="#quote"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold-dark"
              >
                Request a bathroom quote
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </a>
            </article>

            <article
              data-reveal
              className="group flex flex-col opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out"
            >
              <Link
                href="/services#basements"
                className="group/image relative block overflow-hidden rounded-2xl bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <img
                  src={assetUrl("/assets/work/great-room.jpg")}
                  alt="Vaulted great room with a coffered wood ceiling, chandelier, and mountain views in Utah"
                  width="1600"
                  height="1067"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-center transition duration-700 ease-out group-hover/image:scale-[1.03]"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition group-hover/image:bg-gold group-hover/image:text-ink">
                  View remodel projects
                </span>
              </Link>
              <h3 className="mt-6 font-display text-2xl font-normal text-ink">
                <Link href="/services#basements" className="transition hover:text-gold-dark">
                  Basements, Additions &amp; Whole-Home
                </Link>
              </h3>
              <p className="mt-3 flex-1 line-clamp-2 text-[15px] leading-7 text-slate-600">
                Finished basements, whole-home updates, garages, decks, and new construction.
              </p>
              <a
                href="#quote"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold-dark"
              >
                Plan your project
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <use href="#icon-arrow" />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-24 bg-mist py-28 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            data-reveal
            className="grid gap-10 opacity-0 translate-y-8 transition-all duration-700 ease-out lg:grid-cols-[1.2fr_1fr] lg:items-end"
          >
            <div>
              <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Client Reviews &amp; Testimonials
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <div className="inline-flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm">
                <span className="font-display text-4xl text-ink">5.0</span>
                <div>
                  <span className="flex gap-0.5 text-gold" role="img" aria-label="5 out of 5 stars">
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                  </span>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                    10 Google reviews
                  </p>
                </div>
              </div>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold-dark"
              >
                See all reviews on Google
                <svg className="h-3.5 w-3.5" aria-hidden="true"><use href="#icon-arrow" /></svg>
              </a>
            </div>
          </div>

          <div
            data-reveal
            className="mt-20 opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <ReviewsSwiper reviews={REVIEWS} />
          </div>

          <p className="mt-8 text-center text-xs text-slate-500">
            Reviews sourced from Google Maps, November 2026.
          </p>
        </div>
      </section>

      <section id="recent-work" className="scroll-mt-24 bg-white py-28 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            data-reveal
            className="flex flex-col gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out xl:flex-row xl:items-end xl:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Our Work
              </p>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Recent Projects Across the Salt Lake Valley
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Kitchens, basements, outdoor living, and custom builds — a look at recent projects from
                Salt Lake City to Sandy.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              View all projects
              <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
            </Link>
          </div>

          <div
            data-reveal
            className="mt-14 grid gap-5 opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out sm:grid-cols-2 lg:grid-cols-3"
          >
            {RECENT_PROJECTS.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <img
                    src={assetUrl(project.image)}
                    alt={project.alt}
                    width="1600"
                    height="1200"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 p-5">
                  <h3 className="font-display text-lg leading-snug text-ink">{project.title}</h3>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-ink transition group-hover:bg-gold"
                    aria-hidden="true"
                  >
                    <svg className="h-4 w-4"><use href="#icon-arrow" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="instagram" className="scroll-mt-24 bg-mist py-28 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            data-reveal
            className="flex flex-col gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out xl:flex-row xl:items-end xl:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Instagram
              </p>
              <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Follow Us on Instagram
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Project updates from Sandy and across the Salt Lake Valley — finished rooms, progress
                shots, and behind-the-scenes work. Follow {INSTAGRAM_HANDLE}.
              </p>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <svg className="h-4 w-4 text-gold" aria-hidden="true"><use href="#icon-instagram" /></svg>
              Follow on Instagram
            </a>
          </div>

          <div
            data-reveal
            className="mt-14 grid gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out sm:grid-cols-2 lg:grid-cols-3"
          >
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.image}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  <img
                    src={assetUrl(post.image)}
                    alt={post.alt}
                    width="1080"
                    height="1350"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/75 text-white backdrop-blur-sm">
                    <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-instagram" /></svg>
                  </span>
                </div>
                <p className="flex-1 p-5 text-sm leading-6 text-slate-600">{post.caption}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="section-gradient scroll-mt-24 py-28 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
                Request a Free Remodeling Quote in Salt Lake City
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
                Tell us about your project and we&rsquo;ll reply within one business day with a free
                estimate.
              </p>

              <div className="mt-9 space-y-5">
                <a href={PHONE_HREF} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold ring-1 ring-white/10 transition group-hover:bg-white/10">
                    <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-phone" /></svg>
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-white/40">
                      Call or text
                    </span>
                    <span className="mt-1 block text-lg font-semibold text-white">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>
                <a href={EMAIL_MAILTO} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold ring-1 ring-white/10 transition group-hover:bg-white/10">
                    <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-mail" /></svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-white/40">
                      Email
                    </span>
                    <span className="mt-1 block break-words text-sm font-semibold text-white">
                      {EMAIL_DISPLAY}
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl">
                <iframe
                  src={MAP_EMBED_URL}
                  title="Google Map showing Next Step Remodeling serving Sandy and Salt Lake City, Utah"
                  className="block h-64 w-full border-0 bg-white/5"
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-xs">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gold transition hover:text-gold-light"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>

            <div
              data-reveal
              className="rounded-3xl bg-white p-7 text-slate-900 opacity-0 translate-y-8 shadow-2xl shadow-black/20 transition-all duration-700 ease-out sm:p-9"
            >
              <h3 className="font-display text-2xl font-normal text-ink sm:text-3xl">Get a Free Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
