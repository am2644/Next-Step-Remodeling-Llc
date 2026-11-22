import "dotenv/config";
import { prisma } from "../src/lib/db";

const projects = [
  {
    id: 1,
    title: "Warm Wood Kitchen with Curved Islands",
    category: "kitchens",
    imageUrl: "/assets/work/kitchen-warm-wood.jpg",
  },
  {
    id: 2,
    title: "Vaulted Great Room with Wood Ceiling",
    category: "basements",
    imageUrl: "/assets/work/great-room.jpg",
  },
  {
    id: 3,
    title: "Bright White Kitchen with Island",
    category: "kitchens",
    imageUrl: "/assets/work/kitchen-white-island.jpg",
  },
  {
    id: 4,
    title: "Two-Story Deck & Covered Balcony",
    category: "additions",
    imageUrl: "/assets/work/deck-balcony.jpg",
  },
  {
    id: 5,
    title: "Finished Basement Bedroom",
    category: "basements",
    imageUrl: "/assets/work/basement-bedroom.jpg",
  },
  {
    id: 6,
    title: "Mountain-View Sitting Room",
    category: "basements",
    imageUrl: "/assets/work/sitting-room.jpg",
  },
  {
    id: 7,
    title: "Modern New Home Build",
    category: "additions",
    imageUrl: "/assets/work/new-home-exterior.jpg",
  },
  {
    id: 8,
    title: "Custom Home Framing",
    category: "additions",
    imageUrl: "/assets/work/home-framing.jpg",
  },
  {
    id: 9,
    title: "Kitchen Remodel in Progress",
    category: "kitchens",
    imageUrl: "/assets/work/kitchen-progress.jpg",
  },
];

async function main() {
  const base = new Date("2026-11-20T12:00:00Z").getTime();

  for (const [index, project] of projects.entries()) {
    const createdAt = new Date(base - index * 60_000);

    await prisma.portfolioItem.upsert({
      where: { id: project.id },
      update: {
        title: project.title,
        category: project.category,
        imageUrl: project.imageUrl,
        createdAt,
      },
      create: {
        ...project,
        createdAt,
      },
    });
  }

  console.log(`Seeded ${projects.length} portfolio items.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
