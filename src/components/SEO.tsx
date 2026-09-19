import { useEffect } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  twitterCard?: "summary" | "summary_large_image";
  keywords?: string[];
  schemaOrg?: Record<string, unknown>;
  noIndex?: boolean;
}

const DEFAULT_SITE_NAME = "Codex Dynamics";
const DEFAULT_TITLE = "Codex Dynamics — High-Performance Websites & Digital Studio";
const DEFAULT_DESCRIPTION =
  "High-performance websites, web design, web development, and digital marketing studio. Precision engineering on every screen.";
const DEFAULT_OG_IMAGE = "/hero/studio.jpg";

/**
 * SEO component managing document head tags including title, meta descriptions,
 * Open Graph, Twitter Cards, canonical links, and Schema.org JSON-LD.
 * Acts as a reactive lightweight Head manager (pure React 19 + DOM reconciliation).
 */
export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  articleAuthor = DEFAULT_SITE_NAME,
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  articleTags,
  twitterCard = "summary_large_image",
  keywords,
  schemaOrg,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title
    ? `${title} — ${DEFAULT_SITE_NAME}`
    : DEFAULT_TITLE;

  useEffect(() => {
    if (typeof document === "undefined") return;

    // 1. Title
    document.title = fullTitle;

    // Helper to safely set or create a <meta> tag
    const setMeta = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attributeName, attributeValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to set or create a <link> tag
    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Helper to remove meta tags by selector
    const removeMeta = (selector: string) => {
      const el = document.head.querySelector(selector);
      if (el) el.remove();
    };

    // 2. Standard Meta Tags
    setMeta('meta[name="description"]', "name", "description", description);
    if (keywords && keywords.length > 0) {
      setMeta('meta[name="keywords"]', "name", "keywords", keywords.join(", "));
    } else {
      removeMeta('meta[name="keywords"]');
    }

    if (noIndex) {
      setMeta('meta[name="robots"]', "name", "robots", "noindex, nofollow");
    } else {
      setMeta('meta[name="robots"]', "name", "robots", "index, follow, max-image-preview:large");
    }

    // 3. Canonical Link
    const currentUrl = canonical || (typeof window !== "undefined" ? window.location.href : "");
    if (currentUrl) {
      setLink("canonical", currentUrl);
    }

    // 4. Open Graph Tags
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", DEFAULT_SITE_NAME);
    setMeta('meta[property="og:title"]', "property", "og:title", title || DEFAULT_TITLE);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", ogType);
    if (currentUrl) {
      setMeta('meta[property="og:url"]', "property", "og:url", currentUrl);
    }
    if (ogImage) {
      const absoluteImage = ogImage.startsWith("http")
        ? ogImage
        : `${window.location.origin}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;
      setMeta('meta[property="og:image"]', "property", "og:image", absoluteImage);
      setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", title || DEFAULT_SITE_NAME);
    }

    // Article Specific Open Graph tags
    if (ogType === "article") {
      if (articleAuthor) {
        setMeta('meta[property="article:author"]', "property", "article:author", articleAuthor);
      }
      if (articlePublishedTime) {
        setMeta('meta[property="article:published_time"]', "property", "article:published_time", articlePublishedTime);
      }
      if (articleModifiedTime) {
        setMeta('meta[property="article:modified_time"]', "property", "article:modified_time", articleModifiedTime);
      }
      if (articleSection) {
        setMeta('meta[property="article:section"]', "property", "article:section", articleSection);
      }
      if (articleTags && articleTags.length > 0) {
        setMeta('meta[property="article:tag"]', "property", "article:tag", articleTags.join(", "));
      }
    } else {
      removeMeta('meta[property="article:author"]');
      removeMeta('meta[property="article:published_time"]');
      removeMeta('meta[property="article:modified_time"]');
      removeMeta('meta[property="article:section"]');
      removeMeta('meta[property="article:tag"]');
    }

    // 5. Twitter Card Tags
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", twitterCard);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title || DEFAULT_TITLE);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    if (ogImage) {
      const absoluteImage = ogImage.startsWith("http")
        ? ogImage
        : `${window.location.origin}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", absoluteImage);
    }

    // 6. Schema.org Structured Data (JSON-LD)
    const scriptId = "seo-schema-jsonld";
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schemaOrg) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = scriptId;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schemaOrg);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    // Cleanup on unmount if needed
    return () => {
      // Revert to site default title if component unmounts
      document.title = DEFAULT_TITLE;
    };
  }, [
    fullTitle,
    title,
    description,
    canonical,
    ogType,
    ogImage,
    articleAuthor,
    articlePublishedTime,
    articleModifiedTime,
    articleSection,
    articleTags,
    twitterCard,
    keywords,
    schemaOrg,
    noIndex,
  ]);

  return null;
}
