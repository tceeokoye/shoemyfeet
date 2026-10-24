"use client";

import { usePathname } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";

const siteOrigin = "https://shoemyfeet.org";

export default function ProjectShareLinks() {
  const pathname = usePathname();
  const projectUrl = `${siteOrigin}${pathname}`;
  const encodedUrl = encodeURIComponent(projectUrl);
  const shareText = encodeURIComponent("Take a look at this project by Shoe My Feet Foundation");

  const links = [
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      mark: "f",
    },
    {
      label: "Share on X",
      href: `https://x.com/intent/post?url=${encodedUrl}&text=${shareText}`,
      mark: "X",
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      mark: "in",
    },
    {
      label: "Share by email",
      href: `mailto:?subject=${encodeURIComponent("A Shoe My Feet Foundation project")}&body=${encodedUrl}`,
      icon: Mail,
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${shareText}%20${encodedUrl}`,
      icon: MessageCircle,
    },
  ];

  return (
    <nav aria-label="Share this project" className="mt-6 flex items-center gap-2">
      {links.map(({ label, href, mark, icon: Icon }) => (
        <a
          key={label}
          aria-label={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          className="flex h-8 min-w-8 items-center justify-center rounded-full text-[#F97316] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {Icon ? (
            <Icon aria-hidden="true" size={15} strokeWidth={2.2} />
          ) : (
            <span aria-hidden="true" className="text-xs font-extrabold">
              {mark}
            </span>
          )}
        </a>
      ))}
    </nav>
  );
}
