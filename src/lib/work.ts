import { PORTFOLIO_CATEGORY_LABELS } from "@/lib/site";

export type WorkProjectContent = {
  summary: string;
  overview: [string, string];
  highlights: string[];
  quote: { text: string; author: string; source: string };
  projectType: string;
};

export const WORK_PROJECT_CONTENT: Record<number, WorkProjectContent> = {
  1: {
    summary:
      "A custom kitchen with warm wood cabinetry, fluted details, two curved islands, and a wood-slat ceiling beneath mountain views.",
    overview: [
      "The cabinetry sets the tone: warm wood grain, fluted accents, and floor-to-ceiling panels around the range and refrigerator. Quartz countertops and a full-height stone backsplash keep the palette light while letting the millwork lead.",
      "Two curved islands create distinct zones for prep, seating, and entertaining. A wood-slat ceiling, layered pendant lights, and brass hardware tie the kitchen to the adjoining great room.",
    ],
    highlights: [
      "Custom wood cabinetry with fluted accents",
      "Two curved islands with quartz countertops",
      "Wood-slat ceiling and pendant lighting",
      "Paneled appliances and brass fixtures",
    ],
    quote: {
      text: "Next Step Remodeling is the best in the industry. Hands down!",
      author: "Nate Keyvani",
      source: "Google review",
    },
    projectType: "Kitchen remodeling",
  },
  2: {
    summary:
      "A two-story great room with a coffered wood ceiling, statement chandelier, limestone fireplace wall, and mountain views.",
    overview: [
      "The ceiling does the heavy lifting in this great room: a warm wood grid with integrated lighting and a large ring chandelier centered over the seating area.",
      "A limestone fireplace wall anchors one side with built-in media, while a wall of windows on the other side frames the mountains. Wide-plank flooring and neutral furnishings keep the room comfortable rather than formal.",
    ],
    highlights: [
      "Coffered wood ceiling with integrated lighting",
      "Statement ring chandelier",
      "Limestone fireplace with built-in media",
      "Wall of windows with mountain views",
    ],
    quote: {
      text: "Each step of the process was completed with care and precision; from the electrical and plumbing, the flooring, and down to the finishing work, it has all been very satisfactory.",
      author: "Steven Hirning",
      source: "Google review",
    },
    projectType: "Whole-home renovation",
  },
  3: {
    summary:
      "A full kitchen remodel with white shaker cabinetry, quartz counters, a tiled backsplash, black hardware, and a large island.",
    overview: [
      "The layout keeps a familiar work triangle while opening up the center of the room. A long island adds prep space on one side and seating on the other, with pendant lights above.",
      "White shaker cabinets, quartz counters, and a clean tile backsplash give the kitchen a bright, durable finish. Black hardware, a new range hood, and luxury vinyl plank flooring complete the update.",
    ],
    highlights: [
      "White shaker cabinetry with black hardware",
      "Quartz countertops and tiled backsplash",
      "Large island with pendant lighting",
      "New range hood and luxury vinyl plank flooring",
    ],
    quote: {
      text: "Great service. Quality work!",
      author: "Jon Behrmann",
      source: "Google review",
    },
    projectType: "Kitchen remodeling",
  },
  4: {
    summary:
      "A before-and-after rebuild of a two-story deck, adding a covered balcony, new railings, stairs, and a stone retaining wall.",
    overview: [
      "The original deck was taken back to the structure and rebuilt with new framing, posts, and stairs. The upper level gained a covered balcony that can be used through Utah's sunny afternoons.",
      "New doors, railings, and a stone retaining wall tie the deck into the house and the sloped yard. The result is outdoor space that works for both everyday use and entertaining.",
    ],
    highlights: [
      "Two-story deck rebuilt with new framing and stairs",
      "Covered upper balcony with timber posts",
      "New railings and access doors",
      "Stone retaining wall and hardscape",
    ],
    quote: {
      text: "Parker helped us get our dream backyard. Very professional and timely. Very responsive!",
      author: "Robyn Francey",
      source: "Google review",
    },
    projectType: "Deck & outdoor living",
  },
  5: {
    summary:
      "A finished basement bedroom with new flooring, fresh paint, new doors and trim, and recessed lighting.",
    overview: [
      "The basement space was cleaned up and finished into a usable bedroom, with new light oak luxury vinyl plank flooring and a fresh, neutral paint palette.",
      "New closet doors, passage doors, baseboards, and recessed lighting make the room feel like the rest of the house rather than an afterthought.",
    ],
    highlights: [
      "New light oak luxury vinyl plank flooring",
      "Fresh paint and new baseboards",
      "New closet and passage doors",
      "Recessed lighting and updated outlets",
    ],
    quote: {
      text: "We did a whole remodel on our unfinished basement. The whole process was gone over with us, and explained in a way that we understood…",
      author: "Heather Tiffany",
      source: "Google review",
    },
    projectType: "Basement finishing",
  },
  6: {
    summary:
      "A quiet sitting room off the main living space, framed by floor-to-ceiling windows, new flooring, and painted trim.",
    overview: [
      "This sitting area takes advantage of the view. A wall of windows runs nearly floor to ceiling, with soft drapery and trim that frame the mountains instead of competing with them.",
      "New flooring and paint keep the room calm and light, and the open arrangement leaves plenty of room for furniture and a round side table.",
    ],
    highlights: [
      "Floor-to-ceiling window wall",
      "New flooring and painted trim",
      "Furniture-ready sitting area",
      "Mountain views from the main level",
    ],
    quote: {
      text: "We could not be happier with the finished product!",
      author: "Steven Hirning",
      source: "Google review",
    },
    projectType: "Whole-home renovation",
  },
  7: {
    summary:
      "A modern two-story home build with vertical siding, brick cladding, steel accents, and stacked covered balconies.",
    overview: [
      "The exterior mixes vertical siding with a brick facade and steel canopy details for a modern look that still fits the neighborhood.",
      "Stacked balconies give the upper floors usable outdoor space, and the full window package is designed to take in the valley and mountain views.",
    ],
    highlights: [
      "Two-story new construction",
      "Vertical siding and brick facade",
      "Stacked covered balconies",
      "Modern window and trim package",
    ],
    quote: {
      text: "No matter the size of project they can help make it a reality.",
      author: "Jordan Morrell",
      source: "Google review",
    },
    projectType: "New home construction",
  },
  8: {
    summary:
      "Framing underway on a large custom home near Lake City, with a multi-gable roofline and stacked window walls.",
    overview: [
      "This custom home shows the bones of a project before the finishes go on: full wood framing, a multi-gable roof structure, and large window openings stacked across the main floors.",
      "Building on a sloped lot means planning the site work and structural sequence early. The framing is set up to carry the roofline and the window walls that will frame the surrounding hills.",
    ],
    highlights: [
      "Full wood framing and roof structure",
      "Multi-gable roofline",
      "Stacked window openings",
      "Custom home build on a sloped lot",
    ],
    quote: {
      text: "They stuck to the bid with no added up charges and got the job completed in the agreed to time frame.",
      author: "Skip Smith",
      source: "Google review",
    },
    projectType: "New home construction",
  },
  9: {
    summary:
      "A kitchen remodel mid-build: new white cabinetry, a large island, and quartz counters going in ahead of backsplash and appliance finish work.",
    overview: [
      "This progress shot shows the middle of a kitchen remodel, once the cabinets and counters are set but before the final details. New white cabinetry wraps the room, and a large island defines the work zone.",
      "Quartz countertops are installed, appliances are protected, and the floors stay covered while the backsplash, lighting, and final trim are completed.",
    ],
    highlights: [
      "New white cabinetry and island",
      "Quartz countertops installed",
      "Protected appliances and work areas",
      "Backsplash and final trim to follow",
    ],
    quote: {
      text: "Great service. Quality work!",
      author: "Jon Behrmann",
      source: "Google review",
    },
    projectType: "Kitchen remodeling",
  },
};

export function getWorkProject(item: {
  id: number;
  title: string;
  category: string;
}): WorkProjectContent {
  const content = WORK_PROJECT_CONTENT[item.id];
  if (content) return content;

  const categoryLabel = PORTFOLIO_CATEGORY_LABELS[item.category] ?? "Home remodeling";

  return {
    summary: `${item.title} is a recent ${categoryLabel.toLowerCase()} project completed by Next Step Remodeling in Sandy, UT and the Salt Lake Valley.`,
    overview: [
      "Every project starts with a walkthrough, a clear scope, and a plan for the selections that will shape the finished space.",
      "Parker stays involved from the first estimate through the final punch list, keeping communication direct and the work moving.",
    ],
    highlights: [
      "Owner-led planning and communication",
      "Careful protection and cleanup",
      "A final walkthrough before completion",
    ],
    quote: {
      text: "Great service. Quality work!",
      author: "Jon Behrmann",
      source: "Google review",
    },
    projectType: categoryLabel,
  };
}
