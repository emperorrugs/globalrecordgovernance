import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
}

const BASE_URL = "https://www.globalrecordgovernance.com";
const SITE_NAME = "Global Record Governance Foundation";

export function SEOHead({ title, description }: SEOHeadProps) {
  const { pathname } = useLocation();
  const fullTitle = pathname === "/" ? title : `${title} — ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [fullTitle, description, canonicalUrl]);

  return null;
}
