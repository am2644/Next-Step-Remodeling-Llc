export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetUrl(path: string) {
  if (!path || !path.startsWith("/")) return path;
  if (BASE_PATH && path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}

export const PHONE_DISPLAY = "(801) 698-5482";
export const PHONE_HREF = "tel:+18016985482";
export const EMAIL_DISPLAY = "nextstepremodeling@gmail.com";
export const EMAIL_MAILTO = "mailto:nextstepremodeling@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/next_step_remodeling_llc/";
export const INSTAGRAM_HANDLE = "@next_step_remodeling_llc";
export const LICENSE_NUMBER = "8416576-5501";
export const SERVICE_AREA = "Sandy, UT & the Salt Lake Valley";
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Next+Step+Remodeling+LLC+Sandy+UT";
export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Next+Step+Remodeling+LLC+Sandy+UT&z=11&hl=en&output=embed";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_OPTIONS = [
  { value: "kitchen", label: "Kitchen remodeling" },
  { value: "bathroom", label: "Bathroom remodeling" },
  { value: "basement", label: "Basement finishing" },
  { value: "addition", label: "Addition, garage or ADU" },
  { value: "whole-home", label: "Whole-home renovation" },
  { value: "other", label: "Multiple projects / not sure" },
] as const;

export const SERVICE_LABELS: Record<string, string> = Object.fromEntries(
  SERVICE_OPTIONS.map((option) => [option.value, option.label]),
);

export const PORTFOLIO_CATEGORIES = ["kitchens", "basements", "additions"] as const;

export const PORTFOLIO_CATEGORY_LABELS: Record<string, string> = {
  kitchens: "Kitchens",
  basements: "Basements & Whole-Home",
  additions: "Additions & New Builds",
};

export const PROJECT_ASPECTS: Record<string, string> = {
  "/assets/work/kitchen-warm-wood.jpg": "aspect-[4/3]",
  "/assets/work/great-room.jpg": "aspect-[4/3]",
  "/assets/work/kitchen-white-island.jpg": "aspect-[3/4]",
  "/assets/work/deck-balcony.jpg": "aspect-[4/3]",
  "/assets/work/basement-bedroom.jpg": "aspect-[4/3]",
  "/assets/work/sitting-room.jpg": "aspect-[3/4]",
  "/assets/work/new-home-exterior.jpg": "aspect-[4/5]",
  "/assets/work/home-framing.jpg": "aspect-[3/4]",
  "/assets/work/kitchen-progress.jpg": "aspect-[4/3]",
};
