import { HomePage } from "@/components/bossa/HomePage";
import { buildJsonLd, buildMetadata } from "@/components/bossa/seo";

// English (UK) version ( /en/ )
export const metadata = buildMetadata("en");

export default function Page() {
  return <HomePage locale="en" jsonLd={buildJsonLd("en")} />;
}
