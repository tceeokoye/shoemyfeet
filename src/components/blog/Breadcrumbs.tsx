"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@/components/ui/Icons";

interface BreadcrumbsProps {
  category?: string;
  articleTitle?: string;
  onCategoryClick?: (category: string) => void;
}

export default function Breadcrumbs({ category, articleTitle, onCategoryClick }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-body text-gray-500">
        <li>
          <Link href="/" className="hover:text-[#2563eb] transition-colors font-medium">
            Home
          </Link>
        </li>
        <li>
          <ChevronRightIcon size={12} className="text-gray-400" />
        </li>
        <li>
          {category || articleTitle ? (
            <Link href="/blog" className="hover:text-[#2563eb] transition-colors font-medium">
              Blog & Stories
            </Link>
          ) : (
            <span className="font-bold text-[#2563eb]" aria-current="page">
              Blog & Stories
            </span>
          )}
        </li>

        {category && (
          <>
            <li>
              <ChevronRightIcon size={12} className="text-gray-400" />
            </li>
            <li>
              {articleTitle ? (
                <button
                  type="button"
                  onClick={() => onCategoryClick && onCategoryClick(category)}
                  className="hover:text-[#2563eb] transition-colors font-medium text-left"
                >
                  {category}
                </button>
              ) : (
                <span className="font-bold text-[#f97316]" aria-current="page">
                  {category}
                </span>
              )}
            </li>
          </>
        )}

        {articleTitle && (
          <>
            <li>
              <ChevronRightIcon size={12} className="text-gray-400" />
            </li>
            <li className="max-w-[200px] sm:max-w-xs truncate font-bold text-[#2563eb]" aria-current="page">
              {articleTitle}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
