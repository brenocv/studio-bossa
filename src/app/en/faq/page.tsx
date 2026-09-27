import { FaqPage } from "@/components/bossa/FaqPage";
import { buildFaqJsonLd, buildFaqMetadata } from "@/components/bossa/seo";

export const metadata = buildFaqMetadata("en");

export default function Page() {
  return <FaqPage locale="en" jsonLd={buildFaqJsonLd("en")} />;
}
