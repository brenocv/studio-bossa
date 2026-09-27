import { ProjectsIndexPage } from "@/components/bossa/ProjectsIndexPage";
import { buildIndexMetadata } from "@/components/bossa/seo";

export const metadata = buildIndexMetadata("pt");

export default function Page() {
  return <ProjectsIndexPage locale="pt" />;
}
