import { Breadcrumbs } from "./Breadcrumbs";

export function PageShell({
  title,
  intro,
  path,
  children,
}: {
  title: string;
  intro?: string;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container-ge py-8">
      <div className="mx-auto max-w-[760px]">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: title, href: path }]} />
        <header className="mt-4 border-b border-line pb-6">
          <h1 className="font-head text-3xl font-bold text-charcoal sm:text-4xl">{title}</h1>
          {intro && <p className="mt-3 text-muted">{intro}</p>}
        </header>
        <div className="prose-ge mt-6">{children}</div>
      </div>
    </div>
  );
}
