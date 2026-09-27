import { ProjectPage } from "@/components/bossa/ProjectPage";
import { PROJECTS } from "@/components/bossa/projects";
import { buildProjectJsonLd, buildProjectMetadata } from "@/components/bossa/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return buildProjectMetadata("pt", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectPage slug={slug} locale="pt" jsonLd={buildProjectJsonLd("pt", slug)} />;
}
