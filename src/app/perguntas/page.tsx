import { FaqPage } from "@/components/bossa/FaqPage";
import { buildFaqJsonLd, buildFaqMetadata } from "@/components/bossa/seo";

export const metadata = buildFaqMetadata("pt");

export default function Page() {
  return <FaqPage locale="pt" jsonLd={buildFaqJsonLd("pt")} />;
}
