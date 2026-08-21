"use client";

export type EventType =
  | "article_view"
  | "article_share"
  | "article_bookmark"
  | "search_query"
  | "filter_category"
  | "filter_tag"
  | "newsletter_signup"
  | "event_rsvp"
  | "resource_download"
  | "author_profile_view";

export interface AnalyticsEvent {
  type: EventType;
  label?: string;
  metadata?: Record<string, string | number | boolean>;
  timestamp: string;
}

export function trackEvent(type: EventType, label?: string, metadata?: Record<string, string | number | boolean>) {
  const event: AnalyticsEvent = {
    type,
    label,
    metadata,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    // Console audit mode for local development / analytics hook
    // console.log("[Analytics Tracked]", event);
    try {
      const existing = JSON.parse(localStorage.getItem("smf_analytics_log") || "[]");
      existing.push(event);
      localStorage.setItem("smf_analytics_log", JSON.stringify(existing.slice(-100)));
    } catch {
      // Ignore storage errors in private browsing
    }
  }
}

export function trackArticleView(articleId: string, title: string) {
  trackEvent("article_view", title, { articleId });
}

export function trackArticleShare(articleId: string, platform: string) {
  trackEvent("article_share", platform, { articleId });
}

export function trackSearch(query: string) {
  if (query.trim()) {
    trackEvent("search_query", query);
  }
}
