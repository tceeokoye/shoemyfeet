import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "@/components/ui/RealImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MailIcon } from "@/components/ui/Icons";
import { ARTICLES, type Article, type ContentBlock } from "@/lib/blogData";

function findArticle(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return ARTICLES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    return { title: "Article Not Found | Shoe My Feet Foundation" };
  }

  return {
    title: `${article.title} | Shoe My Feet Foundation`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://shoemyfeet.org/blog/${article.slug}`,
      images: [{ url: article.coverImage, alt: article.title }],
    },
  };
}

function ArticleContent({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-justify">{block.text}</p>;
    case "heading": {
      const Heading = block.level === 2 ? "h2" : "h3";
      return (
        <Heading className="font-heading text-[13px] font-bold leading-5 text-[#1A3A6B]">
          {block.text}
        </Heading>
      );
    }
    case "pullQuote":
      return (
        <blockquote className="border-l-4 border-[#F97316] px-6 py-5">
          <p className="font-heading text-lg font-semibold italic text-[#1A3A6B] sm:text-xl">
            “{block.quote}”
          </p>
          {block.attribution && (
            <cite className="mt-3 block text-sm not-italic text-[#565650]">
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      );
    case "imageGallery":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.images.map((image) => (
            <figure key={image.url}>
              <div className="relative aspect-video overflow-hidden bg-[#F3F4F6]">
                <Image src={image.url} alt={image.caption} fill className="object-cover" />
              </div>
              <figcaption className="mt-2 text-sm text-[#565650]">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      );
    case "videoEmbed":
      return (
        <figure>
          <video
            controls
            poster={block.poster}
            className="aspect-video w-full bg-black"
            preload="metadata"
          >
            <source src={block.videoUrl} />
            Your browser does not support embedded video.
          </video>
          <figcaption className="mt-2 text-sm text-[#565650]">
            {block.title}
          </figcaption>
        </figure>
      );
    case "statsGrid":
      return (
        <dl className="grid gap-4 sm:grid-cols-3">
          {block.stats.map((stat) => (
            <div key={stat.label} className="border border-[#E5E7EB] bg-white p-5 text-center">
              <dd className="font-heading text-2xl font-bold text-[#1A3A6B]">
                {stat.value}
              </dd>
              <dt className="mt-1 font-semibold text-[#1A3A6B]">{stat.label}</dt>
              <p className="mt-2 text-sm leading-5 text-[#565650]">
                {stat.description}
              </p>
            </div>
          ))}
        </dl>
      );
    case "calloutBox":
      return (
        <aside className="border-l-4 border-[#F97316] bg-[#FFF7ED] px-5 py-4">
          <h3 className="font-heading font-bold text-[#1A3A6B]">{block.title}</h3>
          <p className="mt-1 text-sm leading-6 text-[#343434]">{block.text}</p>
        </aside>
      );
    case "bulletList":
      return (
        <ul className="list-disc space-y-2 pl-6 marker:text-[#F97316]">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="border border-[#D1D5DB] bg-[#F3F4F6] px-3 py-2 font-heading font-bold text-[#1A3A6B]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className="border border-[#D1D5DB] px-3 py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "downloadAttachment":
      return (
        <a
          href={block.downloadUrl}
          download
          className="inline-flex items-center gap-2 border border-[#1A3A6B] px-5 py-3 font-semibold text-[#1A3A6B] transition-colors hover:bg-[#F3F4F6]"
        >
          {block.title} ({block.fileType}, {block.fileSize})
        </a>
      );
  }
}

function ShareLinks({ article }: { article: Article }) {
  const shareUrl = `https://shoemyfeet.org/blog/${article.slug}`;
  const title = article.title;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const links = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      mark: "f",
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      mark: "X",
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      mark: "in",
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    },
  ];

  return (
    <nav aria-label="Share article" className="mt-6 flex justify-center gap-5">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.label === "Email" ? undefined : "_blank"}
          rel={link.label === "Email" ? undefined : "noreferrer"}
          aria-label={`Share on ${link.label}`}
          className="flex size-5 items-center justify-center rounded-full text-[#F97316] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {link.mark ? (
            <span aria-hidden="true" className="text-[11px] font-extrabold leading-none">
              {link.mark}
            </span>
          ) : (
            <MailIcon aria-hidden="true" size={13} />
          )}
        </a>
      ))}
    </nav>
  );
}

function ArticlePageContent({ article }: { article: Article }) {
  return (
    <>
      <Navbar variant="flat" />
      <main className="bg-[#F8F8F7] pt-12 sm:pt-14">
        <header className="relative isolate flex min-h-[300px] items-center justify-center overflow-hidden px-5 py-12 text-center sm:min-h-[308px] sm:py-10">
          <Image
            src={article.coverImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#111827]/60" />
          <div className="relative z-10 mx-auto max-w-[660px]">
            <h1 className="font-body text-2xl font-normal leading-[1.1] tracking-tight text-white sm:text-[28px]">
              {article.title}
            </h1>
            <ShareLinks article={article} />
          </div>
        </header>

        <article
          className="px-5 py-8 sm:py-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0, rgba(26, 58, 107, 0.018) 1px, transparent 3px), repeating-linear-gradient(90deg, transparent 0, rgba(26, 58, 107, 0.014) 1px, transparent 3px)",
          }}
        >
          <div className="mx-auto max-w-[670px]">
            <div className="space-y-3.5 font-body text-[13px] leading-[1.55] text-[#1A3A6B] sm:space-y-4">
              {article.contentBlocks.map((block, index) => (
                <ArticleContent key={`${block.type}-${index}`} block={block} />
              ))}
            </div>

            <div className="mt-8 text-center sm:mt-10">
              <Link href="/blog" className="btn-primary">
                Back to Blog <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default async function BlogArticlePage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) notFound();

  return <ArticlePageContent article={article} />;
}
