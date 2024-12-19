import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      // Description will go into a meta tag in <head />
      description="blog, portfolio, art, music, creative writing, life hack"
    >
      <main className={clsx(`bg-black text-white flex flex-col grow `)}>
        <div className="container flex flex-col justify-center items-center grow">
          <div className="">content here</div>
        </div>
      </main>
    </Layout>
  );
}
