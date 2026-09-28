import { LegalPage } from "@/components/bossa/LegalPage";
import { buildLegalMetadata } from "@/components/bossa/seo";

export const metadata = buildLegalMetadata("privacy", "en");

export default function Page() {
  return <LegalPage kind="privacy" locale="en" />;
}
