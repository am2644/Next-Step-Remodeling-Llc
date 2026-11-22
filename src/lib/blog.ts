export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author: string; source: string }
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readTime: string;
  author: string;
  heroImage: string;
  heroAlt: string;
  blocks: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "basement-remodel-salt-lake-city",
    title: "Finishing a Basement: From Bare Studs to a Dream Bath",
    description:
      "What a full basement remodel involves — framing, layout, plumbing, finishes, and the details that turn unfinished square footage into everyday living space.",
    excerpt:
      "An unfinished basement became a full living suite with a jetted tub, new bathroom, and finishes that match the rest of the home.",
    date: "2026-11-19",
    dateLabel: "November 19, 2026",
    readTime: "4 min read",
    author: "Next Step Remodeling",
    heroImage: "/assets/work/basement-bedroom.jpg",
    heroAlt:
      "Finished basement bedroom with new light oak flooring, fresh paint, and white doors in a Utah home",
    blocks: [
      {
        type: "paragraph",
        text: "An unfinished basement is the largest unused room in many Utah homes. It has the square footage, the headroom, and the mechanical space — what it lacks is a plan. Finishing it can add a bedroom, a bathroom, a family room, or a rental unit without changing the footprint of the house.",
      },
      { type: "heading", text: "Start with how the space will be used" },
      {
        type: "paragraph",
        text: "The layout comes before the finishes. A basement can usually support more than one use, so the first conversation is about priorities: a guest suite, a bathroom, storage, a workout area, or a kitchenette. Mechanical equipment, window wells, and ceiling height all shape where walls can go.",
      },
      {
        type: "paragraph",
        text: "On this project, the homeowners wanted a full basement build-out with a bathroom that felt like the rest of the house — including a tub they had been planning around for years. Every step of the process was walked through and explained before the work began.",
      },
      {
        type: "quote",
        text: "We did a whole remodel on our unfinished basement. The whole process was gone over with us, and explained in a way that we understood… My wife ended up getting this very large jacuzzi size tub that she really wanted to be implemented into the bathroom build. Parker was able to make her dream bathroom come true!",
        author: "Heather Tiffany",
        source: "Google review",
      },
      { type: "heading", text: "The bathroom is usually the hard part" },
      {
        type: "paragraph",
        text: "Basement bathrooms are plumbing projects first and finish projects second. Drain locations, venting, and the pump needed below grade can limit where the fixtures go. Working those details out early keeps the design from being redrawn after the concrete is opened.",
      },
      {
        type: "paragraph",
        text: "Once the rough-in is right, the room can take on the look of an upstairs bath: a tiled shower, a freestanding or jetted tub, a vanity with storage, and lighting that doesn't feel like a basement.",
      },
      {
        type: "image",
        src: "/assets/work/basement-bedroom.jpg",
        alt: "Finished basement bedroom with new flooring, baseboards, and white doors in a Next Step Remodeling project",
        caption: "New flooring, paint, doors, and trim make a finished basement feel like the rest of the home.",
      },
      { type: "heading", text: "Finishes that make it feel like home" },
      {
        type: "paragraph",
        text: "The details matter more downstairs, where there is less natural light. Light flooring, fresh paint, new doors and trim, and layered lighting all help the space read as a normal room rather than a converted storage area.",
      },
      {
        type: "list",
        items: [
          "A layout planned around egress, mechanicals, and plumbing",
          "New flooring, paint, doors, and trim throughout",
          "Recessed and layered lighting that brightens the space",
          "A full bathroom with fixtures matched to the main floor",
        ],
      },
      {
        type: "paragraph",
        text: "If your basement is still framed-out or unfinished, call or text us at (801) 698-5482, or request a free estimate online.",
      },
    ],
  },
  {
    slug: "what-salt-lake-homeowners-say-about-remodeling",
    title: "What Salt Lake Homeowners Say About Remodeling With Next Step",
    description:
      "Clear communication, careful finishes, and problem-solving: what 10 five-star Google reviews reveal about remodeling with Next Step Remodeling in Sandy and Salt Lake City, UT.",
    excerpt:
      "Ten five-star Google reviews point to the same strengths: clear communication, careful finishes, and a crew that treats your home with respect.",
    date: "2026-11-18",
    dateLabel: "November 18, 2026",
    readTime: "5 min read",
    author: "Next Step Remodeling",
    heroImage: "/assets/work/great-room.jpg",
    heroAlt:
      "Vaulted great room with a coffered wood ceiling and mountain views in a Salt Lake Valley home",
    blocks: [
      {
        type: "paragraph",
        text: "A remodel is a long stretch of decisions, schedules, and people moving through your home. Homeowners rarely judge the experience by the tile alone. They remember whether the contractor answered the phone, protected the floors, and followed through on the small things. We went back through the Google reviews for Next Step Remodeling, and the same themes appeared again and again.",
      },
      { type: "heading", text: "Communication comes first" },
      {
        type: "paragraph",
        text: "Parker leads every project from the first walkthrough to the final punch list, with Monica keeping clients updated along the way. That direct line matters when finish selections, inspection windows, and delivery dates start to overlap. Homeowners consistently mention the same thing: they knew where the project stood.",
      },
      {
        type: "quote",
        text: "From the beginning of the process, both Parker and Monica were communicative with each step and transparent of the subcontractor(s) they chose… Our remodel was completed in February 2024, and we could not be happier with the finished product!",
        author: "Steven Hirning",
        source: "Google review",
      },
      {
        type: "paragraph",
        text: "The process is built around that clarity. A walkthrough produces a practical scope and a free estimate. Samples and design selections happen before demolition, not in the middle of it. Updates keep the plan visible while the work is underway.",
      },
      {
        type: "image",
        src: "/assets/work/kitchen-warm-wood.jpg",
        alt: "Custom kitchen with warm wood cabinetry, curved islands, and a wood-slat ceiling in Utah",
        caption: "A recent kitchen remodel with custom cabinetry and curved islands.",
      },
      { type: "heading", text: "A finish that holds up close" },
      {
        type: "paragraph",
        text: "Most of the work is decided in the details — the shower niche, the line where tile meets drywall, the reveal on a cabinet door, the way a countertop edge meets a sink. The best compliments come after a homeowner has lived with the space for a while.",
      },
      {
        type: "quote",
        text: "They used gorgeous travertine stone throughout and created the double shower-heads setup I had always envisioned. Every detail was executed perfectly.",
        author: "Lisa Frates",
        source: "Google review",
      },
      {
        type: "quote",
        text: "The quality of the work was excellent, and everything turned out better than we expected.",
        author: "Alicia Sloan",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/kitchen-white-island.jpg",
        alt: "White kitchen with a large island, quartz counters, and black hardware in a Salt Lake Valley home",
        caption: "A white kitchen with a large island and quartz counters.",
      },
      { type: "heading", text: "When a remodel throws a curveball" },
      {
        type: "paragraph",
        text: "Older Salt Lake homes have a way of keeping secrets. Opening a wall can reveal outdated plumbing, old wiring, or framing that was never meant for a modern layout. Water damage adds another layer: the rebuild has to dry the space, repair what is hidden, and finish the room as if nothing happened.",
      },
      {
        type: "quote",
        text: "We had a great experience with Parker and Next Step Remodeling during a recent bathroom remodel and flood repair… The bid was very reasonable, and there were no surprises along the way.",
        author: "Alicia Sloan",
        source: "Google review",
      },
      { type: "heading", text: "Respect for the home — and the people in it" },
      {
        type: "paragraph",
        text: "A remodel means having a crew in your home for weeks at a time. Punctuality, politeness, and a clean job site are not extras — they are part of the job.",
      },
      {
        type: "quote",
        text: "They stuck to the bid with no added up charges and got the job completed in the agreed to time frame. The foreman kept me in the loop through the whole process and I couldn’t be happier with the end result.",
        author: "Skip Smith",
        source: "Google review",
      },
      {
        type: "quote",
        text: "Parker helped us get our dream backyard. Very professional and timely. Very responsive!",
        author: "Robyn Francey",
        source: "Google review",
      },
      { type: "heading", text: "What this means for your project" },
      {
        type: "paragraph",
        text: "If you are planning a kitchen, bathroom, basement, addition, or whole-home project in Salt Lake City or Sandy, the fundamentals stay the same:",
      },
      {
        type: "list",
        items: [
          "A walkthrough with a clear, itemized estimate",
          "Design selections and samples before construction",
          "One point of contact and regular updates during the build",
          "A final walkthrough and punch list before we call it finished",
        ],
      },
      {
        type: "paragraph",
        text: "We work across the Salt Lake Valley. If you would like to walk through your project, call or text (801) 698-5482, or request a free estimate online.",
      },
    ],
  },
  {
    slug: "primary-bath-upgrades-salt-lake-city",
    title: "Primary Bath Upgrades That Hold Up: Showers, Tubs, and Double Vanities",
    description:
      "What goes into a Salt Lake Valley primary bath remodel: a walk-in shower built around the room, a tub placed with purpose, and a double vanity that earns its space.",
    excerpt:
      "The best primary baths are planned around daily routines: a shower you can step into, a tub that fits the room, and a vanity with room for two.",
    date: "2026-11-16",
    dateLabel: "November 16, 2026",
    readTime: "4 min read",
    author: "Next Step Remodeling",
    heroImage: "/assets/next-step-about.jpg",
    heroAlt:
      "Mountain-view sitting room with floor-to-ceiling windows in a Next Step Remodeling home renovation",
    blocks: [
      {
        type: "paragraph",
        text: "A primary bath has to work every morning, for everyone in the house. That is a different brief than a powder room or a guest bath, and it is why the planning conversation matters as much as the tile selection. These are the upgrades we plan most often across the Salt Lake Valley.",
      },
      { type: "heading", text: "The shower becomes the centerpiece" },
      {
        type: "paragraph",
        text: "A walk-in shower opens the room, is easier to clean than a tub surround, and works for every age in the household. Large-format tile, a built-in niche for daily products, and a glass enclosure keep it simple and bright. Some homeowners add a second shower head or a bench without closing the space in.",
      },
      {
        type: "quote",
        text: "They used gorgeous travertine stone throughout and created the double shower-heads setup I had always envisioned. Every detail was executed perfectly.",
        author: "Lisa Frates",
        source: "Google review",
      },
      { type: "heading", text: "A tub, placed with purpose" },
      {
        type: "paragraph",
        text: "Not every bath has room for a separate tub — and not every homeowner wants one. When there is space, placement matters. A freestanding tub set under a window or beneath a vaulted ceiling becomes a feature instead of an obstacle, and it can share the room with a walk-in shower if the layout allows.",
      },
      {
        type: "paragraph",
        text: "When a tub is the priority, the rest of the room gets planned around it. On one recent basement project, the homeowners had a specific jetted tub in mind, and the bathroom was laid out so it could be built in without compromising the shower or vanity.",
      },
      {
        type: "quote",
        text: "My wife ended up getting this very large jacuzzi size tub that she really wanted to be implemented into the bathroom build. Parker was able to make her dream bathroom come true!",
        author: "Heather Tiffany",
        source: "Google review",
      },
      { type: "heading", text: "A double vanity that earns its space" },
      {
        type: "paragraph",
        text: "A long vanity gives two people their own side of the counter, but it needs to fit the room. Storage, mirror size, lighting, and outlet placement all get decided together so the vanity wall works in daily use rather than just in photos.",
      },
      { type: "heading", text: "What to decide before demo day" },
      {
        type: "list",
        items: [
          "Shower-first or tub-first? The answer changes the layout",
          "Tile size and pattern: large format reads calm, patterned floors add character",
          "Vanity length and storage before counter material",
          "Lighting: mirror, ceiling, and any natural light",
        ],
      },
      {
        type: "paragraph",
        text: "Planning a primary bath remodel in Salt Lake City or Sandy? Call or text (801) 698-5482, or request a free estimate — we will walk the room and map the options with you.",
      },
    ],
  },
  {
    slug: "water-damage-repair-salt-lake-valley",
    title: "Water Damage Repair: What the Rebuild Actually Takes",
    description:
      "Storms, leaks, and burst pipes leave more damage than is visible. Here is how Next Step Remodeling dries out and rebuilds water-damaged rooms across the Salt Lake Valley.",
    excerpt:
      "Drying out is only half the job. Walls, trim, paint, flooring, and finish all have to come back — and look like nothing ever happened.",
    date: "2026-11-13",
    dateLabel: "November 13, 2026",
    readTime: "4 min read",
    author: "Next Step Remodeling",
    heroImage: "/assets/work/basement-bedroom.jpg",
    heroAlt:
      "Restored interior with fresh paint, new flooring, and white doors after water damage repair in Utah",
    blocks: [
      {
        type: "paragraph",
        text: "Water damage rarely announces how far it spread. A storm pushes water under a door, a supply line lets go behind a wall, or a freeze cracks a pipe — and days later the damage shows up in baseboards, drywall, and flooring that looked fine at first. Utah winters bring both hard freezes and fast snowmelt, and both have a way of finding the weakest point of a house.",
      },
      { type: "heading", text: "The visible damage is the smaller part" },
      {
        type: "paragraph",
        text: "Before anything gets rebuilt, the space has to be dried out and checked. Water travels along framing and under flooring, so the scope is set by what the moisture readings say, not by what the wall looks like. Only then does the rebuild list become clear: which sections of drywall and baseboard come out, whether trim can be saved, and how far the flooring needs to go.",
      },
      { type: "heading", text: "Rebuilding the room, not just the hole" },
      {
        type: "paragraph",
        text: "A good restoration finish matches the rest of the house. That means replacing saturated drywall and baseboards, patching and re-texturing so the repair disappears, and repainting full walls so there is no visible touch-up line. Doors, trim, and fixtures go back level and square, and the flooring is matched or replaced as one continuous field.",
      },
      {
        type: "quote",
        text: "We had a great experience with Parker and Next Step Remodeling during a recent bathroom remodel and flood repair. They redid our bathroom, added a shower, and replaced damaged drywall after a flood… The bid was very reasonable, and there were no surprises along the way.",
        author: "Alicia Sloan",
        source: "Google review",
      },
      { type: "heading", text: "Finishing with the next storm in mind" },
      {
        type: "paragraph",
        text: "In rooms that see moisture, material choices matter. A luxury vinyl plank floor like the one in this basement bedroom stands up to humidity and cleans up easily, and a fresh coat of paint on repaired walls gives the whole space a clean start.",
      },
      {
        type: "paragraph",
        text: "One practical note: photograph the damage before cleanup begins. It helps with insurance paperwork and makes the scope easier to explain.",
      },
      { type: "heading", text: "What a restoration scope usually includes" },
      {
        type: "list",
        items: [
          "Dry-out and moisture checks before demolition",
          "Removal and replacement of saturated drywall, trim, and insulation",
          "Texture and paint blended into the surrounding walls",
          "Flooring repair or replacement",
          "Reset of doors, fixtures, and finishing details",
        ],
      },
      {
        type: "paragraph",
        text: "If your home has taken on water, call or text (801) 698-5482. We will walk the damage with you and put together a free estimate for the rebuild.",
      },
    ],
  },
  {
    slug: "garage-adu-home-additions-salt-lake",
    title: "Garages, ADUs, and Home Additions: Planning the Extra Space",
    description:
      "How Next Step Remodeling plans detached garages, RV bays, in-law apartments, and home expansions across Sandy and the Salt Lake Valley — from permits to finishes.",
    excerpt:
      "Not every project starts inside the house. Garages, RV bays, ADUs, and expansions ask for the same thing: planning, permits, and a clear scope.",
    date: "2026-11-10",
    dateLabel: "November 10, 2026",
    readTime: "3 min read",
    author: "Next Step Remodeling",
    heroImage: "/assets/work/new-home-exterior.jpg",
    heroAlt:
      "Modern two-story new home build with vertical siding, brick cladding, and stacked balconies in Utah",
    blocks: [
      {
        type: "paragraph",
        text: "Most of our work happens in kitchens, bathrooms, and basements. But a home can also need something new: a detached garage, an RV bay, an in-law apartment, a backyard deck, or room to expand. Those projects follow the same fundamentals as an interior remodel — clear scope, realistic schedule, one point of contact — with more site work and permitting up front.",
      },
      { type: "heading", text: "A garage built for the way you use it" },
      {
        type: "paragraph",
        text: "A garage is only useful if it fits what you park in it. Ceiling height, door size, slab thickness, electrical, and access all get set before construction. For an RV owner, that can mean a taller door and a deeper bay than a standard plan allows.",
      },
      {
        type: "quote",
        text: "They built a detached four car RV garage for me and I am very pleased with it. They stuck to the bid with no added up charges and got the job completed in the agreed to time frame.",
        author: "Skip Smith",
        source: "Google review",
      },
      { type: "heading", text: "ADUs and in-law apartments" },
      {
        type: "paragraph",
        text: "An accessory dwelling unit is a small house with the same systems as a big one: a kitchen, a bath, heating, electricity, and a separate entrance. Planning the utility runs and the layout early is what keeps the project predictable. Whether the goal is rental income or room for family, the unit has to feel independent and safe.",
      },
      {
        type: "quote",
        text: "Parker and the team at Next Step Remodeling remodeled our MIL apartment in 2023, and they did an absolutely incredible job. We honestly couldn’t have been happier with the entire process.",
        author: "Lindsay Hammond",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/deck-balcony.jpg",
        alt: "Before-and-after of a two-story deck and covered balcony rebuild with a stone retaining wall in Utah",
        caption: "Outdoor living counts as an addition too: a rebuilt two-story deck and covered balcony.",
      },
      { type: "heading", text: "Expanding the house you already have" },
      {
        type: "paragraph",
        text: "Sometimes the answer is not a new property but a new wing. An expansion can add a primary suite, a larger kitchen, or a garage with living space above. The work has to tie into the existing structure, match the roofline, and keep the house weather-tight throughout the build.",
      },
      {
        type: "quote",
        text: "Next Step Remodeling helped us achieve our dream expansion of our home. They were delightful to work with and helped coordinate every aspect of our expansion and our new garage. No matter the size of project they can help make it a reality.",
        author: "Jordan Morrell",
        source: "Google review",
      },
      { type: "heading", text: "What to plan before you build" },
      {
        type: "list",
        items: [
          "Site access and utility routes before design is final",
          "Permit and inspection requirements for your city",
          "Future use: storage, rental, family, or resale",
          "A schedule that accounts for weather and inspections",
        ],
      },
      {
        type: "paragraph",
        text: "If you are considering a garage, ADU, deck, or expansion in Sandy or across the Salt Lake Valley, call or text (801) 698-5482 for a free estimate.",
      },
    ],
  },
  {
    slug: "three-kitchen-remodel-directions-salt-lake",
    title: "Three Kitchens, Three Directions: White, Warm Wood, and Mid-Build",
    description:
      "White shaker cabinetry in one Sandy kitchen, warm wood and curved islands in another, and a mid-build progress look — how the right direction shapes a kitchen remodel.",
    excerpt:
      "The cabinets set the direction. Everything else — counters, backsplash, hardware — follows. Three recent kitchens show how far that idea can go.",
    date: "2026-11-06",
    dateLabel: "November 6, 2026",
    readTime: "4 min read",
    author: "Next Step Remodeling",
    heroImage: "/assets/work/kitchen-white-island.jpg",
    heroAlt:
      "White shaker kitchen with a large island, quartz counters, tiled backsplash, and black hardware in Utah",
    blocks: [
      {
        type: "paragraph",
        text: "A kitchen remodel is a long list of choices, and the first decision sets the rest. Cabinet color drives the counter and backsplash conversation, which drives the hardware, the lighting, and the feel of the finished room. Three recent Next Step kitchens show how different that direction can be.",
      },
      { type: "heading", text: "Classic white keeps a kitchen bright" },
      {
        type: "paragraph",
        text: "This kitchen kept its layout and let the finishes do the work: white shaker cabinets, quartz counters, a clean tiled backsplash, and black hardware. A large island adds prep space and seating, with pendant lights above and durable luxury vinyl plank underfoot. The result is bright and calm, and it will not date quickly.",
      },
      {
        type: "image",
        src: "/assets/work/kitchen-white-island.jpg",
        alt: "White kitchen with a large island, quartz counters, tiled backsplash, and black hardware",
        caption: "White shaker cabinetry, quartz counters, and a large island.",
      },
      {
        type: "quote",
        text: "The quality of the work was excellent, and everything turned out better than we expected.",
        author: "Alicia Sloan",
        source: "Google review",
      },
      { type: "heading", text: "Warm wood makes the kitchen the personality piece" },
      {
        type: "paragraph",
        text: "In this home, warm wood cabinetry and fluted details turn a large kitchen into the room everyone remembers. Two curved islands create separate zones for prep and entertaining, while a wood-slat ceiling and layered pendant lights tie the kitchen to the great room. Quartz counters and a full-height stone backsplash keep the palette light.",
      },
      {
        type: "image",
        src: "/assets/work/kitchen-warm-wood.jpg",
        alt: "Kitchen with warm wood cabinetry, two curved islands, wood-slat ceiling, and pendant lighting",
        caption: "Wood cabinetry, curved islands, and a wood-slat ceiling in a custom kitchen.",
      },
      {
        type: "quote",
        text: "Next Step Remodeling is the best in the industry. Hands down!",
        author: "Nate Keyvani",
        source: "Google review",
      },
      { type: "heading", text: "Mid-build is part of the process" },
      {
        type: "paragraph",
        text: "A kitchen looks different at every stage. Once the cabinets and counters are in but before the backsplash, lighting, and final trim, the room is all structure and potential. Planning the sequence — demo, rough-in, cabinets, counters, tile, appliances, paint — is what keeps the finish work from being rushed.",
      },
      {
        type: "image",
        src: "/assets/work/kitchen-progress.jpg",
        alt: "Kitchen remodel in progress with white cabinetry, an island, and protected appliances",
        caption: "A kitchen mid-build: cabinets and quartz counters in, backsplash and trim to follow.",
      },
      { type: "heading", text: "How to choose your direction" },
      {
        type: "list",
        items: [
          "Plan the cabinetry first; it sets the budget and the palette",
          "Pick counters and backsplash together, not in separate trips",
          "Decide what to keep — layout, appliances — before what to change",
          "Choose finishes for daily life, not just for the photo",
        ],
      },
      {
        type: "paragraph",
        text: "Not sure which direction fits your home and budget? Call or text (801) 698-5482, or request a free estimate and we will talk it through at the walkthrough.",
      },
    ],
  },
  {
    slug: "whole-home-renovation-what-to-expect",
    title: "Whole-Home Renovation: What the Process Actually Looks Like",
    description:
      "A look at a full-home renovation in Salt Lake City — moving walls, permits, subcontractors, and finishes — and what homeowners should expect before demo day.",
    excerpt:
      "Taking a home down to the studs is a long project. The homeowners who come out happy are the ones who knew what each phase would ask of them.",
    date: "2026-11-02",
    dateLabel: "November 2, 2026",
    readTime: "4 min read",
    author: "Next Step Remodeling",
    heroImage: "/assets/work/great-room.jpg",
    heroAlt:
      "Vaulted great room with wood ceiling, chandelier, and mountain views in a whole-home renovation",
    blocks: [
      {
        type: "paragraph",
        text: "A whole-home renovation is less a single project than a series of projects that share walls, plumbing, and a timeline. Rooms have to be sequenced, inspections have to be scheduled, and decisions that were easy in a single-room remodel start to affect each other. It works when the scope and the process are clear from the start.",
      },
      { type: "heading", text: "The walkthrough sets the scope" },
      {
        type: "paragraph",
        text: "On a renovation, the first walkthrough is about what has to move. Walls, doorways, plumbing runs, and electrical service all get evaluated against the plan. A good scope calls out what will be replaced, what will be reworked, and what will stay. It also identifies the permits needed before demolition can begin.",
      },
      {
        type: "paragraph",
        text: "One recent Salt Lake City project took a 3 bedroom, 1 bathroom home to the studs and rebuilt it as a 2 bed, 2 bath. That kind of change is a construction project first — moving walls and doorways, updating plumbing and electrical, and keeping the house safe and dry throughout.",
      },
      { type: "heading", text: "Communication carries the project" },
      {
        type: "paragraph",
        text: "A full renovation has more moving parts than a single room, which makes one point of contact essential. Homeowners should know which sub is on site, what is being inspected, and what decision is needed next. That rhythm is what keeps a long project from feeling out of control.",
      },
      {
        type: "quote",
        text: "From the beginning of the process, both Parker and Monica were communicative with each step and transparent of the subcontractor(s) they chose. Electricians, plumbers, flooring, and tile subcontractors were punctual and respectful… Our remodel was completed in February 2024, and we could not be happier with the finished product!",
        author: "Steven Hirning",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/great-room.jpg",
        alt: "Great room with coffered wood ceiling, fireplace, and mountain views after a whole-home renovation",
        caption: "A finished great room in a whole-home renovation — the kind of space the plan is built for.",
      },
      { type: "heading", text: "Finishes come together at the end" },
      {
        type: "paragraph",
        text: "The last phase is where a renovation becomes a home. Flooring, paint, trim, doors, and lighting all land in the final stretch, and the punch list is where the small things get resolved. Walk through every room with the same questions: does it work, does it look finished, and would you notice it if no one pointed it out?",
      },
      {
        type: "quote",
        text: "Parker and the team at Next Step Remodeling remodeled our MIL apartment in 2023, and they did an absolutely incredible job. We honestly couldn’t have been happier with the entire process.",
        author: "Lindsay Hammond",
        source: "Google review",
      },
      { type: "heading", text: "What to expect from a whole-home remodel" },
      {
        type: "list",
        items: [
          "A detailed scope before demolition begins",
          "Permits and inspections scheduled into the timeline",
          "A single point of contact for decisions and updates",
          "Sequenced trades so the work keeps moving",
          "A final walkthrough and punch list in every room",
        ],
      },
      {
        type: "paragraph",
        text: "Planning a whole-home renovation in Salt Lake City, Sandy, or the surrounding valley? Call or text (801) 698-5482, or request a free estimate online.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
