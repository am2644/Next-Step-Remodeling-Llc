import { INSTAGRAM_URL } from "./site";

export type InstagramPost = {
  href: string;
  image: string;
  alt: string;
  caption: string;
};

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    href: INSTAGRAM_URL,
    image: "/assets/instagram/bath-double-vanity.jpg",
    alt: "Bathroom remodel with a white double vanity, two gold-framed mirrors, and a walk-in shower",
    caption:
      "Double vanity, gold mirrors, and a walk-in shower — a bathroom that finally feels finished.",
  },
  {
    href: INSTAGRAM_URL,
    image: "/assets/instagram/bath-freestanding-tub.jpg",
    alt: "Bathroom with a freestanding tub, herringbone tile shower, and white double vanity",
    caption:
      "Freestanding tub, herringbone tile, and a glass shower. A primary bath built to unwind in.",
  },
  {
    href: INSTAGRAM_URL,
    image: "/assets/instagram/kitchen-blue-island.jpg",
    alt: "Kitchen remodel with a blue island, grey cabinets, and light wood flooring",
    caption:
      "Blue island, warm wood floors, and quartz counters. A kitchen refresh with room to move.",
  },
  {
    href: INSTAGRAM_URL,
    image: "/assets/instagram/roof-truss-addition.jpg",
    alt: "Crane setting roof trusses on a home addition in Utah",
    caption:
      "Setting trusses on an addition — structural work that makes room for the next chapter.",
  },
  {
    href: INSTAGRAM_URL,
    image: "/assets/instagram/bath-marble-shower.jpg",
    alt: "Marble-look tiled shower and tub surround with a dark vanity in a bathroom remodel",
    caption:
      "Marble-look tile and a recessed niche — clean lines that hold up to daily use.",
  },
  {
    href: INSTAGRAM_URL,
    image: "/assets/instagram/bath-floating-vanity.jpg",
    alt: "Floating black double vanity with a white counter, black fixtures, and sconce lighting",
    caption:
      "Floating black vanity with a double sink and matte fixtures. Small bathroom, strong statement.",
  },
];
