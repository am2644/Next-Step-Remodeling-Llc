import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { assetUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Remodeling Services in Salt Lake City, UT | Next Step Remodeling",
  description:
    "Kitchen, bathroom, basement, addition, and whole-home remodeling services in Sandy, Salt Lake City, and the Wasatch Front. Owner-led craftsmanship and free estimates from Next Step Remodeling.",
  openGraph: {
    title: "Remodeling Services in Salt Lake City, UT | Next Step Remodeling",
    description:
      "Kitchen, bathroom, basement, addition, and whole-home remodeling services in Sandy, Salt Lake City, and the Wasatch Front. Owner-led craftsmanship and free estimates from Next Step Remodeling.",
    images: [assetUrl("/assets/hero.jpg")],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h1
            className="hero-reveal max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            Remodeling Services in Salt Lake City, UT
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            style={{ "--d": "220ms" } as CSSProperties}
          >
            Kitchens, bathrooms, basements, additions, and whole-home remodels, handled from design
            through final walkthrough.
          </p>
        </div>
      </section>

      <section id="kitchens" className="scroll-mt-24 bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Kitchen Remodeling in Salt Lake City
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Custom cabinetry, quartz counters, tile, and lighting, planned for the way you cook and
                gather. We handle layout changes, islands, appliance updates, and the finish selections
                that make the room work day after day.
              </p>
            </div>
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <img
                src={assetUrl("/assets/work/kitchen-white-island.jpg")}
                alt="White shaker kitchen with a large island, quartz countertops, and tile backsplash in Utah"
                width="1600"
                height="2133"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="bathrooms" className="scroll-mt-24 bg-mist py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out lg:order-2"
            >
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Bathroom Remodeling in Salt Lake City
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Walk-in showers, freestanding tubs, double vanities, and precise tile work, built to
                last. From primary baths to powder rooms and flood-damage rebuilds, we plan the layout
                and finishes together so the room works for everyone in the house.
              </p>
            </div>
            <figure
              data-reveal
              className="rounded-3xl bg-ink p-8 text-white opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out sm:p-10 lg:order-1"
            >
              <span className="flex gap-0.5 text-gold" role="img" aria-label="5 out of 5 stars">
                <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-star" /></svg>
              </span>
              <blockquote className="mt-6 font-display text-2xl font-light leading-9">
                “My wife ended up getting this very large jacuzzi size tub that she really wanted to be
                implemented into the bathroom build. Parker was able to make her dream bathroom come
                true!”
              </blockquote>
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                Heather Tiffany · Google review
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="basements" className="scroll-mt-24 bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Basement Finishing &amp; Whole-Home Remodels
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Turn an unfinished basement into bedrooms, bathrooms, living space, or a rental
                apartment. We handle framing, drywall, flooring, lighting, trim, and the details that
                make new square footage feel like the rest of your home.
              </p>
            </div>
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <img
                src={assetUrl("/assets/work/basement-bedroom.jpg")}
                alt="Finished basement bedroom with new light oak flooring, fresh paint, and white doors in Utah"
                width="1600"
                height="1200"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="additions" className="scroll-mt-24 bg-mist py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out lg:order-2"
            >
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Additions, Garages &amp; New Builds
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Detached garages, RV bays, home expansions, decks, and ground-up builds — planned with
                the same care as the interiors. We coordinate permits, structure, and finishes so the
                new space blends with your property.
              </p>
            </div>
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out lg:order-1"
            >
              <img
                src={assetUrl("/assets/work/deck-balcony.jpg")}
                alt="Before-and-after of a two-story deck and covered balcony rebuild with stone retaining wall in Utah"
                width="1536"
                height="1024"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Our Remodeling Process
            </h2>
          </div>
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {["Walkthrough & Estimate", "Design & Selections", "Build & Communicate", "Final Walkthrough"].map(
              (step, index) => (
                <li
                  key={step}
                  data-reveal
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  <span className="font-display text-2xl text-gold-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display text-xl text-ink">{step}</p>
                </li>
              ),
            )}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-28">
        <div
          data-reveal
          className="mx-auto max-w-3xl px-5 text-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
            Ready to Start Your Salt Lake Valley Remodeling Project?
          </h2>
          <Link
            href="/contact#contact-form"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Get a Quote
            <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
