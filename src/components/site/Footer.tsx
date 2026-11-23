import Link from "next/link";
import {
  assetUrl,
  EMAIL_DISPLAY,
  EMAIL_MAILTO,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LICENSE_NUMBER,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_AREA,
} from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-gradient bg-night text-white/60">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-32 md:py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="inline-flex" aria-label="Next Step Remodeling home">
              <span className="flex items-center rounded-xl bg-white px-3 py-2">
                <img
                  src={assetUrl("/assets/logo.png")}
                  alt="Next Step Remodeling"
                  width="690"
                  height="590"
                  className="h-16 w-auto"
                />
              </span>
            </Link>
            <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-white/40">Sandy, Utah</p>
            <p className="mt-5 max-w-xs text-sm leading-6">
              Thoughtful kitchen, bathroom, and basement remodels, plus additions and new builds, for
              homes across the Salt Lake Valley.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="flex gap-0.5 text-gold" role="img" aria-label="5 out of 5 stars">
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-star" /></svg>
              </span>
              <span className="text-xs font-medium text-white/50">5.0 on Google · 10 reviews</span>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Services</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/services#kitchens" className="transition hover:text-white">
                  Kitchen remodeling
                </Link>
              </li>
              <li>
                <Link href="/services#bathrooms" className="transition hover:text-white">
                  Bathroom remodeling
                </Link>
              </li>
              <li>
                <Link href="/services#basements" className="transition hover:text-white">
                  Basements &amp; whole-home
                </Link>
              </li>
              <li>
                <Link href="/services#additions" className="transition hover:text-white">
                  Additions &amp; new builds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-3 transition hover:text-white">
                  <svg className="h-4 w-4 shrink-0 text-gold" aria-hidden="true"><use href="#icon-phone" /></svg>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={EMAIL_MAILTO} className="flex items-start gap-3 transition hover:text-white">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true"><use href="#icon-mail" /></svg>
                  <span>{EMAIL_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <svg className="h-4 w-4 shrink-0 text-gold" aria-hidden="true"><use href="#icon-instagram" /></svg>
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-gold" aria-hidden="true"><use href="#icon-check" /></svg>
                {SERVICE_AREA}
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-gold" aria-hidden="true"><use href="#icon-check" /></svg>
                Licensed Utah contractor #{LICENSE_NUMBER}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Next Step Remodeling LLC. All rights reserved.</p>
          <p>Serving Sandy, Salt Lake City, and the surrounding communities.</p>
        </div>
      </div>
    </footer>
  );
}
