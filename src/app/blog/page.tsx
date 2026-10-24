import Link from "next/link";
import Image from "@/components/ui/RealImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICLES, SUCCESS_STORIES, type Article } from "@/lib/blogData";
import { generateBreadcrumbSchema } from "@/lib/seoSchemas";

type BlogCard = {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  article: Article;
};

const newsArticles = ARTICLES.slice(0, 6);
const featuredArticles = ARTICLES.slice(6);

const blogCards: BlogCard[] = [
  ...SUCCESS_STORIES.map((story) => ({
    id: story.id,
    title: story.childName,
    excerpt: story.summary,
    coverImage: story.coverImage,
    category: "Success Story",
    article: ARTICLES.find((article) => article.id === story.storyId) ?? ARTICLES[0],
  })),
  ...featuredArticles.map((article) => ({
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    coverImage: article.coverImage,
    category: article.category,
    article,
  })),
];

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="relative mx-auto mb-10 flex min-h-14 w-fit min-w-[260px] items-center justify-center px-10 py-3 text-center font-heading text-lg font-extrabold uppercase text-white sm:mb-12 sm:min-w-[320px] sm:text-xl">
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-no-repeat [background-size:100%_100%]"
        style={{ backgroundImage: "url('/images/challenge-brush.svg')" }}
      />
      <span className="relative z-10">{title}</span>
    </h2>
  );
}

function StoryCards({
  cards,
}: {
  cards: BlogCard[];
}) {
  return (
    <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <article key={card.id} className="group min-w-0">
          <Link
            href={`/blog/${card.article.slug}`}
            className="relative block aspect-[16/9] w-full overflow-hidden bg-[#F3F4F6] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A3A6B]"
            aria-label={`Read ${card.title}`}
          >
            <Image
              src={card.coverImage}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-[#111827]/20 transition-colors group-hover:bg-[#111827]/10" />
          </Link>

          <p className="mt-3 text-xs font-semibold text-[#F97316]">
            {card.category}
          </p>
          <h3 className="mt-1 font-heading text-lg font-semibold leading-snug text-[#1A3A6B]">
            <Link
              href={`/blog/${card.article.slug}`}
              className="text-left transition-colors hover:text-[#F97316] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A3A6B]"
            >
              {card.title}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-5 text-[#565650]">
            {card.excerpt}
          </p>
          <Link
            href={`/blog/${card.article.slug}`}
            className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#1A3A6B] transition-colors hover:text-[#F97316] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A3A6B]"
          >
            Read More <span aria-hidden="true">›</span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://shoemyfeet.org" },
    { name: "News & Blog", item: "https://shoemyfeet.org/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="min-h-screen bg-white">
        <section
          aria-labelledby="news-heading"
          className="bg-[#F8F8F7] px-5 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-32"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0, rgba(26, 58, 107, 0.018) 1px, transparent 3px), repeating-linear-gradient(90deg, transparent 0, rgba(26, 58, 107, 0.014) 1px, transparent 3px)",
          }}
        >
          <div className="mx-auto w-full">
            <h1 id="news-heading" className="sr-only">
              Shoe My Feet Foundation News
            </h1>
            <SectionHeading title="Our News" />
            <StoryCards
              cards={newsArticles.map((article) => ({
                id: article.id,
                title: article.title,
                excerpt: article.excerpt,
                coverImage: article.coverImage,
                category: article.category,
                article,
              }))}
            />
          </div>
        </section>

        <section
          id="blog"
          aria-labelledby="blog-heading"
          className="bg-white px-5 py-12 sm:px-10 sm:py-16"
        >
          <div className="mx-auto w-full">
            <h2 id="blog-heading" className="sr-only">
              Stories from our blog
            </h2>
            <SectionHeading title="From Our Blog" />
            <StoryCards cards={blogCards} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
