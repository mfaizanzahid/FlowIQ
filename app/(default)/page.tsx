export const metadata = {
  title: "FlowIQ - AI-Powered Agents, Apps and Automation",
  keywords: "AI, automation, apps, workflows, agents, productivity",
  description:
    "FlowIQ is an AI agency that automates workflows and enhances productivity through intelligent agents and apps for local businesses.",
  openGraph: {
    title: "FlowIQ - AI-Powered Agents, Workflows and Automation",
    description:
      "FlowIQ is an AI agency that automates workflows and enhances productivity through intelligent agents and apps for local businesses",
    url: "https://flowiq.com",
    siteName: "FlowIQ",
  }
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
