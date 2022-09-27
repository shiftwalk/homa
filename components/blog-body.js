// Tools
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

// Transitions
import { fade } from '@/helpers/transitions'

// Components
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FooterCta from '@/components/footer-cta'
import Image from 'next/image'
import { ScrollParallax } from 'react-just-parallax'
import MousePosition from '@/components/mouse-position'
import DayInfo from '@/components/day-info'
import Link from 'next/link'

// Sanity
import SanityPageService from '@/services/sanityPageService'
import SkipButtons from './skip-buttons'
import TextScrambler from './text-scrambler'

export const articlesPerPage = 3;

export const query = `{
  "blog": *[_type == "blog"] | order(date desc) [$start ... $stop] {
    title,
    category-> {
      title,
      slug {
        current
      }
    },
    slug {
      current
    }
  },
  "categories": *[_type == "categories"] {
    title,
    slug {
      current
    }
  },
  "numberOfArticles": count(*[_type == "blog"]) 
}`

const pageService = new SanityPageService(query)

export default function BlogBody({blog, numberOfArticles, categories, subPage, index}) {
  
  return (
    <Layout>
      <NextSeo title="Blog" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.div variants={fade}>
            <div className={`w-full bg-white px-6 xl:px-10 mx-auto relative overflow-hidden ${subPage ? 'pt-16 lg:pt-28 xl:pt-32' : 'pt-24 lg:pt-28 xl:pt-32 border-b border-black/50' }`}>
              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>

              <div className={`max-w-screen-3xl mx-auto hidden lg:block ${!subPage && 'mb-12 lg:mb-24 xl:mb-32' }`}>
                <h1 className="text-base uppercase tracking-widest font-medium leading-none block"><TextScrambler text="The news arcade" seed={14} /></h1>
              </div>

              {!subPage && (
                <div className="flex flex-wrap max-w-screen-3xl mx-auto mb-8 xl:mb-10">
                  <div className="w-full lg:w-2/3 flex flex-nowrap overflow-x-scroll lg:overflow-hidden lg:flex-wrap ">
                    {categories?.map((e, i) => {
                      return (
                        <Link href={`/blog/categories/${e.slug.current}`}>
                          <a className="inline-block flex-shrink-0 border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white mr-3 mb-3">{e.title}</a>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {!subPage && (
              <div className="w-full border-b border-black/50">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 py-6 lg:py-10 pl-6 xl:pl-10 pr-6 xl:pr-10">
                    <div className="max-w-[920px] ml-auto">
                      <Link href={`/blog/categories/${blog[0].category.slug.current}`}>
                        <a className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white mr-3 mb-6 lg:mb-12">{blog[0].category.title}</a>
                      </Link>

                      <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] mb-12 lg:mb-[15vw] uppercase w-11/12">Headline that runs over multiple lines lorem ipsum dolor sit amet consectetur adipiscing elit.</h2>

                      <div className="flex flex-wrap">
                        {Array.from(Array(4), (e, i) => {
                          return (
                            <Link href="#">
                              <a className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white mr-3 mb-3">0{i + 1}</a>
                            </Link>
                          )
                        })}
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
            )}
            
            <div className="max-w-screen-3xl mx-auto px-6 lg:px-10 mt-10 lg:mt-[6vw]">
              <div className="flex flex-wrap md:-mx-4 lg:-mx-6">
                {blog.map((e, i) => {
                  return (
                    <div className="md:px-4 lg:px-6 w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-20 lg:mb-32">
                      <Link href={`/blog/${e.slug.current}`}>
                        <a className="block border border-black/50 w-full">
                          <div className="aspect-square w-full bg-gray-200 border-b border-black/50"></div>

                          <div className="p-6 xl:p-10">
                            <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl uppercase w-full mb-12 md:mb-20 lg:mb-28 xl:mb-32">{e.title}</h2>


                            <div className="flex items-end">
                              {e.category && (
                                <span className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">{e.category.title}</span>
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

              {/* PAGINATION */}
              {numberOfArticles > 3 && (
                <div className="mb-8 lg:mb-12 xl:mb-16">
                  <SkipButtons index={index} maxIndex={Math.floor(numberOfArticles/articlesPerPage)} />
                </div>           
              )}
            </div>

            <FooterCta>
              <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-white bg-gradient-to-b from-pink/20 to-pink p-6 md:p-10 xl:p-16 text-center">
                <span className="block font-black uppercase text-2xl md:text-3xl xl:text-4xl mb-20 md:mb-[15vw] xl:mb-[12.5vw]">Sign up to our newsletter</span>

                <div className="">
                  <button className="block w-full text-center bg-black text-white font-medium uppercase leading-none py-6 px-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">Sign up</button>
                </div>
              </div>
            </FooterCta>

            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}