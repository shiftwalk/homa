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
import SanityImage from './sanity-image'
import BlogCard from './blog-card'
import ScramblePillButton from './scramble-pill-button'

export const articlesPerPage = 24;


export const query = `{
  "blog": *[_type == "blog"] | order(publishDate desc) [$start ... $stop] {
    title,
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
    publishDate,
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
  "numberOfArticles": count(*[_type == "blog"]),
  "contact": *[_type == "contact"][0]{
    email,
    phone,
    twitter,
    instagram,
    linkedIn,
    facebook,
    tikTok,
    discord
  }
}`

const pageService = new SanityPageService(query)

export default function BlogBody({blog, numberOfArticles, categories, subPage, index, contact}) {
  
  return (
    <Layout>
      <NextSeo
        title="Latest Tips & Tricks in the Mobile Industry"
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
            <div className={`w-full bg-white px-6 xl:px-10 mx-auto relative overflow-hidden ${subPage ? 'pt-16 lg:pt-28 xl:pt-32' : 'pt-24 lg:pt-28 xl:pt-32 border-b border-black/50' }`}>
              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>

              <div className={`max-w-screen-3xl mx-auto block ${!subPage && 'mb-6 lg:mb-24 xl:mb-32' }`}>
                <h1 className="text-sm lg:text-base uppercase tracking-widest font-medium leading-none block"><TextScrambler text="The news arcade" seed={14} /></h1>
              </div>

              {!subPage && (
                <div className="flex flex-wrap max-w-screen-3xl mx-auto mb-5 lg:mb-8 xl:mb-10">
                  <div className="w-full lg:w-2/3 flex flex-nowrap overflow-x-scroll lg:overflow-hidden lg:flex-wrap ">
                    {categories?.map((e, i) => {
                      return (
                        <ScramblePillButton href={`/blog/categories/${e.slug.current}`} label={e.title} internal className="mr-3 mb-3 min-w-[155px] text-center" />
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {!subPage && (
              <div className="w-full border-b border-black/50">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 py-12 lg:py-10 pl-6 xl:pl-10 pr-6 xl:pr-10">
                    <div className="max-w-[920px] ml-auto">
                      <ScramblePillButton href={`/blog/categories/${blog[0].category.slug.current}`} label={blog[0].category.title} internal className="mr-3 mb-6 lg:mb-12" />

                      <Link href={`/blog/${blog[0].slug.current}`}>
                        <a className="block">
                          <h2 className="font-black text-[clamp(40px,_4.45vw,_86px)] leading-[0.9] mb-12 lg:mb-[15vw] uppercase w-[99%] lg:w-11/12">{blog[0].title}</h2>
                        </a>
                      </Link>

                      {/* <div className="flex flex-wrap">
                        {Array.from(Array(4), (e, i) => {
                          return (
                            <Link href="#">
                              <a className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white mr-3 mb-3">0{i + 1}</a>
                            </Link>
                          )
                        })}
                      </div> */}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2 lg:border-l border-black/50 relative overflow-hidden">
                    <Link href={`/blog/${blog[0].slug.current}`}>
                      <a className="w-full h-full aspect-square block">
                        <SanityImage
                          image={blog[0].heroImage}
                          layout="fill"
                          className="w-full h-full absolute inset-0 z-0 object-cover object-top"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            <div className="max-w-screen-3xl mx-auto px-6 lg:px-10 mt-20 lg:mt-[6vw]">
              <h2 className="block font-bold uppercase text-lg lg:text-2xl xl:text-3xl w-full mb-6 lg:mb-10">More Stories</h2>
              <div className="flex flex-wrap md:-mx-4 lg:-mx-6">
                {blog.map((e, i) => {
                  let d = new Date(e.publishDate);
                  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

                  return (
                    <div className="md:px-4 lg:px-6 w-full md:w-1/2 lg:w-1/3 mb-12 md:mb-20 lg:mb-32" key={i}>
                      <BlogCard
                        href={`/blog/${e.slug.current}`}
                        heading={e.title}
                        image={e.heroImage}
                        category={e.category.title}
                        date={`${da} ${mo} ${ye}`}
                      />
                    </div>
                  )
                })}
              </div>

              {/* PAGINATION */}
              {numberOfArticles > 24 && (
                <div className="mb-8 lg:mb-12 xl:mb-16">
                  <SkipButtons index={index} maxIndex={Math.floor(numberOfArticles/articlesPerPage)} />
                </div> 
              )}
            </div>

            <FooterCta />
            <Footer contact={contact} />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}