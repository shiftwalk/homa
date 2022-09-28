import React from 'react'
import SanityPageService from '@/services/sanityPageService'
import FooterCta from '@/components/footer-cta';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { fade } from '@/helpers/transitions';
import Layout from '@/components/layout';
import { NextSeo } from 'next-seo';
import DayInfo from '@/components/day-info';
import MousePosition from '@/components/mouse-position';
import Link from 'next/link';
import SanityImage from '@/components/sanity-image';

const query = `{
  "currentCat": *[_type == "categories" && slug.current == $slug][0] {
    title
  },
  "blog": *[_type == "blog" && category->slug.current == $slug] | order(date desc) {
    title,
    category-> {
      slug {
        current
      }
    },
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
    }
  }
}`

const pageService = new SanityPageService(query)

export default function BlogCategory(initialData) {
  const { data: { currentCat, blog } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo
        title={currentCat.title}
        description="Homa Games team is international, dynamic and passionate about games, working fully with partners all around the world."
      />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.div variants={fade}>
            <div className={`w-full bg-white px-6 xl:px-10 mx-auto relative overflow-hidden pt-16 lg:pt-28 xl:pt-32`}>
              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>

              <div className={`max-w-screen-3xl mx-auto mt-6 lg:mt-0`}>
                <Link href="/blog">
                  <a className="w-10 lg:w-12 xl:w-16 h-10 lg:h-12 xl:h-16 border border-black/50 p-3 xl:p-4 flex items-center justify-center leading-[0] text-2xl mb-6 lg:mb-10 xl:mb-16 hover:bg-black hover:text-white">
                    <svg className="w-full" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.102 20.9 20.9 1.1M20.898 20.9 1.1 1.1" stroke="currentColor" stroke-miterlimit="10"/></svg>
                  </a>
                </Link>

                <h1 className="font-black text-[clamp(50px,_5vw,_100px)] leading-[0.95] uppercase w-11/12">{currentCat.title}</h1>

                <span className="text-base uppercase tracking-widest font-medium leading-none block">{blog.length} Results</span>
              </div>
            </div>
            
            <div className="max-w-screen-3xl mx-auto px-6 lg:px-10 mt-10 lg:mt-[6vw]">
              <div className="flex flex-wrap md:-mx-4 lg:-mx-6">
                {blog.map((e, i) => {
                  return (
                    <div className="md:px-4 lg:px-6 w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-20 lg:mb-32">
                      <Link href="#">
                        <a className="block border border-black/50 w-full">
                          <div className="aspect-square w-full bg-gray-200 border-b border-black/50 relative overflow-hidden">
                            <SanityImage
                              image={e.heroImage}
                              layout="fill"
                              className="block w-full h-full absolute inset-0 aspect-square scale-[1.03]"
                            />
                          </div>

                          <div className="p-6 xl:p-10">
                            <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl uppercase w-full mb-12 md:mb-20 lg:mb-28 xl:mb-32">{e.title}</h2>


                            <div className="flex items-end">
                              {e.category && (
                                <span className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">{e.category.slug.current}</span>
                              )}

                              <span className="block text-sm lg:text-base text-black/50 leading-none ml-auto">June 8 2022</span>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>

            <FooterCta />          
            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}


export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('categories')
  return {
    paths: paths,
    fallback: false,
  };
}