// Tools
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

// Transitions
import { fade } from '@/helpers/transitions'

// Components
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FooterCta from '@/components/footer-cta'
import { ScrollParallax } from 'react-just-parallax'
import MousePosition from '@/components/mouse-position'
import DayInfo from '@/components/day-info'
import Link from 'next/link'
import Image from 'next/image'

// Sanity
import SanityPageService from '@/services/sanityPageService'

const query = `{
  "article": *[_type == "blog" && slug.current == $slug][0]{
    title,
    category-> {
      title,
      slug {
        current
      }
    },
    publishDate,
    author-> {
      name
    },
    slug {
      current
    }
  }
}`

const pageService = new SanityPageService(query)

export default function BlogSlug(initialData) {
  // Sanity Data
  const { data: { article } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo title={article.title} />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.div variants={fade}>
            <div className={`w-full bg-white px-6 xl:px-10 mx-auto relative overflow-hidden pt-16 lg:pt-28 xl:pt-32 border-b border-black/50`}>
              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>

              <div className={`max-w-screen-3xl mx-auto mt-6 lg:mt-0`}>
                <Link href="/blog">
                  <a className="w-10 lg:w-12 xl:w-16 h-10 lg:h-12 xl:h-16 border border-black/50 p-3 xl:p-4 flex items-center justify-center leading-[0] text-2xl mb-6 lg:mb-10 xl:mb-12 hover:bg-black hover:text-white">
                    <svg className="w-full" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.102 20.9 20.9 1.1M20.898 20.9 1.1 1.1" stroke="currentColor" stroke-miterlimit="10"/></svg>
                  </a>
                </Link>
              </div>
            </div>

            <div className="bg-white relative overflow-hidden">              
              <div className="w-full border-b border-black/50">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 py-6 lg:py-10 pl-6 xl:pl-10 pr-6 xl:pr-10">
                    <div className="max-w-[920px] ml-auto flex flex-wrap h-full">
                      <div className="w-full">
                        <Link href={`/blog/categories/${article.category.slug.current}`}>
                          <a className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white mr-3 mb-6 lg:mb-12">{article.category.title}</a>
                        </Link>

                        <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] mb-12 lg:mb-[15vw] uppercase w-11/12">{article.title}</h2>
                      </div>

                      <div className="mt-auto w-full">
                        {article.publishDate && (
                          <span className="uppercase text-sm lg:text-base tracking-widest mb-2 lg:mb-4 font-medium flex">
                            <span className="min-w-[150px]">Published:</span>
                            <span className="block">{article.publishDate}</span>
                          </span>
                        )}
                        {article.author && (
                          <span className="uppercase text-sm lg:text-base tracking-widest mb-2 lg:mb-4 font-medium flex">
                            <span className="min-w-[150px]">Author:</span>
                            <span className="block">{article.author.name}</span>
                          </span>
                        )}
                        <span className="uppercase text-sm lg:text-base tracking-widest mb-2 lg:mb-4 font-medium flex">
                          <span className="min-w-[150px]">Read Time:</span>
                          <span className="block">X minutes</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 lg:border-l border-black/50 relative overflow-hidden">
                    <div className="scale-[1.125] w-full h-full aspect-square">
                      <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.05}>
                        <Image
                          src="/images/about.jpg"
                          alt="About Test"
                          layout="fill"
                          className="w-full h-full absolute inset-0 z-0 object-cover object-top"
                        />
                      </ScrollParallax>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content py-[10vw]">
                <div className="w-full">
                  <p className="text-center">Article content will go here...</p>
                </div>
              </div>

              <FooterCta image={"/images/about.jpg"} />
              <Footer />
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

// Sanity CMS Props
export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return props
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('blog')
  return {
    paths: paths,
    fallback: false,
  };
}