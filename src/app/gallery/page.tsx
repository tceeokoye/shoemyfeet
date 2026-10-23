import type { Metadata } from "next";
import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";
import FastImage from "@/components/ui/FastImage";

export const metadata: Metadata = {
  title: "Media Gallery | Shoe My Feet Foundation",
  description:
    "Explore high-quality photos, documentaries, and videos capturing shoe distribution events, school visits, volunteer activities, and child shoemaking empowerment across Nigeria.",
  keywords: [
    "Shoe My Feet Foundation gallery",
    "shoe distribution photos Nigeria",
    "charity video documentary Enugu Kaduna Edo",
    "NGO media gallery Nigeria",
    "children school shoes photos",
    "children's empowerment shoemaking photos",
  ],
  openGraph: {
    title: "Media Gallery | Shoe My Feet Foundation",
    description:
      "Every moment tells a story. Explore our journey through photos and videos capturing outreach events, school visits, and life-changing shoe distributions.",
    url: "https://shoemyfeet.org/gallery",
    siteName: "Shoe My Feet Foundation",
    type: "website",
  },
};

export default function GalleryPage() {
  const collections = [
    {
      title: "Photos",
      description: "Browse photographs from school visits, distributions, and community outreach.",
      href: "/gallery/photos",
      image: "/images/gallery1.jpg",
      alt: "Children during a shoe distribution",
      label: "Photo collection",
    },
    {
      title: "Videos",
      description: "Watch documentaries, beneficiary stories, and moments from the field.",
      href: "/gallery/videos",
      image: "/images/gallery4.jpg",
      alt: "A foundation video documenting community outreach",
      label: "Films and stories",
    },
    {
      title: "Events",
      description: "Explore event albums and follow the foundation's outreach timeline.",
      href: "/gallery/events",
      image: "/images/gallery2.jpg",
      alt: "A school outreach event",
      label: "Outreach archive",
    },
  ];

  return (
    <>
      <EditorialHero
        eyebrow="Shoe My Feet Foundation · Gallery"
        title={<>Every moment <span className="text-[#142E56]">tells a story.</span></>}
        description="Explore the people, places, and progress behind our work through photographs, films, and event albums from communities across Nigeria."
        image="/images/everymoment.jpeg"
        imageAlt="Children during a Shoe My Feet Foundation community outreach"
      >
        <Link href="/gallery/photos" className="btn-primary">Explore the gallery</Link>
      </EditorialHero>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-14">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">Explore the collection</p>
              <h2 className="font-heading text-3xl font-semibold text-[#111827] sm:text-4xl">Stories from the field</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#565650]">
              Choose a collection to explore moments of learning, connection, and change.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <Link key={collection.href} href={collection.href} className="group block">
                <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
                  <FastImage
                    src={collection.image}
                    alt={collection.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">{collection.label}</p>
                <h3 className="font-heading text-2xl font-medium text-[#111827] group-hover:text-[#1A3A6B]">{collection.title}</h3>
                <p className="mt-2 text-base leading-7 text-[#565650]">{collection.description}</p>
                <span className="mt-4 inline-block border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#8f3710]">
                  Explore {collection.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
