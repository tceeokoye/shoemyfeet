import EditorialHero from "@/components/ui/EditorialHero";
import FastImage from "@/components/ui/FastImage";
import { CameraIcon, VideoIcon, ArrowRightIcon } from "@/components/ui/Icons";

const previewImages = [
  { src: "/images/gallery1.jpg", alt: "Shoe distribution in a community", label: "Distribution" },
  { src: "/images/crafting4.jpeg", alt: "Shoemaking workshop", label: "Workshop" },
  { src: "/images/gallery2.jpg", alt: "School visit", label: "School visit" },
  { src: "/images/happy-kids.jpeg", alt: "Children at community outreach", label: "Community" },
];

export default function GalleryHero() {
  return (
    <>
      <EditorialHero
        eyebrow="Shoe My Feet Foundation · Media gallery"
        title={<>Every Moment <span className="text-[#142E56]">Tells a Story</span></>}
        description="Explore the unforgettable moments captured during our outreach programs, school visits, volunteer activities, and life-changing shoe distributions across Nigeria."
        image="/images/everymoment.jpeg"
        imageAlt="Real Shoe My Feet Foundation outreach photography"
      >
        <a href="#media-filters" className="btn-primary inline-flex items-center gap-2">
          <CameraIcon size={16} /> Explore Photos
        </a>
        <a href="#featured-video" className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B]">
          <VideoIcon size={16} /> Watch Videos <ArrowRightIcon size={15} />
        </a>
      </EditorialHero>
      <section className="bg-white py-5 sm:py-7">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {previewImages.map((image) => (
            <figure key={image.label} className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
              <FastImage src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-7 text-xs font-medium text-white">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}