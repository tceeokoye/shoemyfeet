"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon } from "@/components/ui/Icons";

export type ScrollOverBgLinkStyle = "text" | "button" | "outline" | "white";

export interface ScrollOverBgProps {
  backgroundImage: string;
  minHeight?: string;
  id?: string;
  as?: "section" | "article" | "div";
  ariaLabel?: string;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
  backgroundPosition?: string;
  align?: "center" | "left" | "right";

  // Badges & Eyebrows & Icons
  icon?: ReactNode;
  badge?: ReactNode;
  badgeClassName?: string;
  eyebrow?: ReactNode;
  eyebrowClassName?: string;

  // Title
  title?: ReactNode;
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  titleClassName?: string;
  titlebgImage?: string;

  // Description / Subtitle
  description?: ReactNode;
  descriptionClassName?: string;
  subtitle?: ReactNode;
  subtitleClassName?: string;

  // Primary Link
  href?: string;
  linkLabel?: ReactNode;
  linkClassName?: string;
  linkStyle?: ScrollOverBgLinkStyle;
  linkIcon?: ReactNode;
  linkExternal?: boolean;

  // Secondary Link
  secondaryHref?: string;
  secondaryLinkLabel?: ReactNode;
  secondaryLinkClassName?: string;
  secondaryLinkStyle?: ScrollOverBgLinkStyle;
  secondaryLinkIcon?: ReactNode;
  secondaryLinkExternal?: boolean;

  // Custom Actions / Children
  actions?: ReactNode;
  actionsClassName?: string;
  children?: ReactNode;
}

const defaultLinkClass = (style: ScrollOverBgLinkStyle) => {
  switch (style) {
    case "button":
      return "group inline-flex items-center justify-center gap-3 rounded-[10px] bg-[#F97316] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#EA580C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-lg";
    case "white":
      return "group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] shadow-lg transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
    case "outline":
      return "group inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
    case "text":
    default:
      return "group inline-flex items-center justify-center gap-2 text-base font-semibold text-white transition-colors hover:text-[#F97316]";
  }
};

function RenderLink({
  href,
  label,
  className,
  style = "text",
  icon,
  external,
}: {
  href: string;
  label: ReactNode;
  className?: string;
  style?: ScrollOverBgLinkStyle;
  icon?: ReactNode;
  external?: boolean;
}) {
  const finalClass = className ?? defaultLinkClass(style);
  const defaultIcon =
    icon !== undefined ? (
      icon
    ) : style === "button" ? (
      <ArrowRightIcon
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
        size={18}
      />
    ) : (
      <ArrowRightIcon
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
        size={16}
      />
    );

  const content = (
    <>
      <span>{label}</span>
      {defaultIcon}
    </>
  );

  const isExternal =
    external ??
    (href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.endsWith(".pdf") ||
      href.endsWith(".docx"));

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={finalClass}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={finalClass}>
      {content}
    </Link>
  );
}

export default function ScrollOverBg({
  backgroundImage,
  minHeight = "min-h-[520px]",
  id,
  as: Component = "section",
  ariaLabel,
  className = "",
  overlayClassName = "bg-black/65",
  contentClassName = "mx-auto max-w-3xl",
  backgroundPosition = "bg-center",
  align = "center",

  icon,
  badge,
  badgeClassName = "mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-md sm:text-sm",
  eyebrow,
  eyebrowClassName = "mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#F97316] sm:text-base",

  title,
  titleTag = "h2",
  titleClassName = "mb-7 font-heading text-3xl font-semibold leading-tight text-[#F97316] sm:text-4xl",
  titlebgImage,

  description,
  descriptionClassName = "mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg",
  subtitle,
  subtitleClassName = "mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base",

  href,
  linkLabel = "Read More",
  linkClassName,
  linkStyle = "text",
  linkIcon,
  linkExternal,

  secondaryHref,
  secondaryLinkLabel,
  secondaryLinkClassName,
  secondaryLinkStyle = "outline",
  secondaryLinkIcon,
  secondaryLinkExternal,

  actions,
  actionsClassName = "mt-9 flex flex-wrap items-center justify-center gap-4",

  children,
}: ScrollOverBgProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    if (!section || !background) return;

    let rafId: number | null = null;

    const updateBackgroundPosition = () => {
      const rect = section.getBoundingClientRect();
      background.style.transform = `translate3d(0, ${-rect.top}px, 0)`;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateBackgroundPosition();
        rafId = null;
      });
    };

    updateBackgroundPosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateBackgroundPosition);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateBackgroundPosition);
    };
  }, []);

  const TitleTag = titleTag;
  const textAlignClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  const hasHeaderContent =
    icon || badge || eyebrow || title || description || subtitle;
  const hasLinks = Boolean(href || secondaryHref || actions);

  return (
    <Component
      ref={sectionRef as never}
      id={id}
      aria-label={ariaLabel}
      className={`relative isolate flex items-center justify-center overflow-hidden bg-[#17140f] px-4 py-20 text-white ${textAlignClass} sm:px-6 lg:px-8 ${minHeight} ${className}`}
    >
      <div
        ref={backgroundRef}
        aria-hidden="true"
        className={`absolute inset-y-0 z-0 h-svh w-screen bg-cover ${backgroundPosition} will-change-transform`}
        style={{
          left: "50%",
          marginLeft: "-50vw",
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-0 ${overlayClassName}`}
      />

      {/* Render children only if no header content and no actions */}
      {!hasHeaderContent && !hasLinks && children ? (
        <div className="relative z-10 w-full">{children}</div>
      ) : (
        <motion.div
          className={`relative z-10 w-full ${contentClassName}`}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {icon && (
            <motion.div variants={fadeUp} className="mb-4 flex justify-center">
              {icon}
            </motion.div>
          )}

          {badge && (
            <motion.div variants={fadeUp} className="mb-4">
              <span className={badgeClassName}>{badge}</span>
            </motion.div>
          )}

          {eyebrow && (
            <motion.p variants={fadeUp} className={eyebrowClassName}>
              {eyebrow}
            </motion.p>
          )}

          {title && (
            <motion.div variants={fadeUp}>
              <TitleTag className={titleClassName}>
                {titlebgImage ? (
                  <span className="relative isolate inline-flex items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 z-0 bg-center bg-no-repeat [background-size:100%_100%]"
                      style={{
                        backgroundImage: `url('${titlebgImage}')`,
                      }}
                    />
                    <span className="relative z-10">{title}</span>
                  </span>
                ) : (
                  title
                )}
              </TitleTag>
            </motion.div>
          )}

          {description && (
            <motion.div variants={fadeUp} className={descriptionClassName}>
              {description}
            </motion.div>
          )}

          {subtitle && (
            <motion.div variants={fadeUp} className={subtitleClassName}>
              {subtitle}
            </motion.div>
          )}

          {hasLinks && (
            <motion.div variants={fadeUp} className={actionsClassName}>
              {actions ? (
                actions
              ) : (
                <>
                  {href && (
                    <RenderLink
                      href={href}
                      label={linkLabel}
                      className={linkClassName}
                      style={linkStyle}
                      icon={linkIcon}
                      external={linkExternal}
                    />
                  )}
                  {secondaryHref && secondaryLinkLabel && (
                    <RenderLink
                      href={secondaryHref}
                      label={secondaryLinkLabel}
                      className={secondaryLinkClassName}
                      style={secondaryLinkStyle}
                      icon={secondaryLinkIcon}
                      external={secondaryLinkExternal}
                    />
                  )}
                </>
              )}
            </motion.div>
          )}

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      )}
    </Component>
  );
}
