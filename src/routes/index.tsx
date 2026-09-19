import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteCanvas } from "@/components/SiteCanvas";
import { SiteChrome } from "@/components/SiteChrome";
import { SEO } from "@/components/SEO";
import { trackCurrentVisitor } from "@/lib/visitor-tracker";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useEffect(() => {
    void trackCurrentVisitor(window.location.pathname);
  }, []);

  return (
    <SiteCanvas>
      <SEO
        title="High-Performance Websites & Digital Studio"
        description="High-performance websites, web design, web development, and digital marketing studio. Precision engineering on every screen."
        ogType="website"
        keywords={["web design", "web development", "digital studio", "high-performance websites", "UI/UX", "Rank Math SEO"]}
      />
      <SiteChrome page="home" />
    </SiteCanvas>
  );
}
