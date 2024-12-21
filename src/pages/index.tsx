import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      // Description will go into a meta tag in <head />
      description="blog, portfolio, art, music, creative writing, life hack"
    >
      <main className={clsx(`home-bg text-white flex flex-col grow `)}>
        <div className="container flex flex-col justify-center items-center grow mt-[24px]">
          <h1>Hello World! </h1>
          <div
            className={clsx(
              `
              w-full
              flex
              flex-col
              gap-[16px]
              xl:justify-evenly
              xl:gap-[0px]
              xl:flex-row
            `
            )}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?si=b6hnLyz4gx-mbcBt&amp;list=PLl3_a4EzgdPozGQyARnTZzjLbCmm6_25N"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uDbUE3jxxqE?si=F9rby9AK1qEwVjHj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <h1>About</h1>
          <img
            src="img/home/photoversary-1920x1358.jpeg"
            alt="main image totoro"
          />
        </div>
      </main>
    </Layout>
  )
}
