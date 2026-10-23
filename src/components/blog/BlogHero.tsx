import EditorialHero from "@/components/ui/EditorialHero";

interface BlogHeroProps {
  onReadLatestClick: () => void;
  onExploreCategoriesClick: () => void;
}

const floatingStats = [
  { value: "14,000+", label: "Children Shod" },
  { value: "35", label: "Cobblers Trained" },
  { value: "48+", label: "Field Volunteers" },
];

export default function BlogHero({ onReadLatestClick, onExploreCategoriesClick }: BlogHeroProps) {
  return (
    <>
      <EditorialHero
        eyebrow="Digital magazine · Field dispatch"
        title={<>Stories That <span className="text-[#142E56]">Inspire Every Step</span></>}
        description="Discover inspiring stories, outreach highlights, educational resources, and the latest news from Shoe My Feet Foundation. Every article reflects our mission to bring hope, dignity, and opportunity to children through the gift of proper footwear."
        image="/images/hero.jpg"
        imageAlt="Children receiving shoes during a Shoe My Feet Foundation outreach"
      >
        <button type="button" onClick={onReadLatestClick} className="btn-primary">Read Latest Stories</button>
        <button type="button" onClick={onExploreCategoriesClick} className="inline-flex items-center border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B]">Explore Categories</button>
      </EditorialHero>
      <section className="border-y border-[#F3F4F6] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#F3F4F6] px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          {floatingStats.map((stat) => (
            <div key={stat.label} className="py-6 text-center sm:py-8">
              <p className="font-heading text-3xl font-semibold leading-none text-[#142E56]">{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#696558]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}