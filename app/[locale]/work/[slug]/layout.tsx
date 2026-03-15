import { notFound } from "next/navigation";
import Login from "@/templates/Login";

import { getProject } from "@/app/[locale]/work/[slug]/page";

export default async function Layout({
  params,
  children,
}: React.PropsWithChildren<{
  params: { slug: string };
}>) {
  const pageProps = await params;
  const project = await getProject(pageProps.slug);

  if (!project) notFound();

  return (
    <Login slug={params.slug} meta={project.meta}>
      {children}
    </Login>
  );
}
