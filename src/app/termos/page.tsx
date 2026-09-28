import { LegalPage } from "@/components/bossa/LegalPage";
import { buildLegalMetadata } from "@/components/bossa/seo";

export const metadata = buildLegalMetadata("terms", "pt");

export default function Page() {
  return <LegalPage kind="terms" locale="pt" />;
}
