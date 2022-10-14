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
import MousePosition from '@/components/mouse-position'
import DayInfo from '@/components/day-info'
import Link from 'next/link'

// Sanity
import SanityPageService from '@/services/sanityPageService'
import BodyRenderer from '@/components/body-renderer'
import SanityImage from '@/components/sanity-image'

import TwitterIcon from "@/icons/twitter.svg"
import LinkedInIcon from "@/icons/linkedin.svg"
import FacebookIcon from "@/icons/facebook.svg"
import LinkIcon from "@/icons/link.svg"

const readingTime = require('reading-time');

const query = `{
  "article": *[_type == "blog" && slug.current == $slug][0]{
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
    contentBlocks[] {
      ...,
      text,
      authorName,
      authorJobTitle,
      image {
        asset-> {
          ...
        },
        overrideVideo {
          asset-> {
            ...
          }
        },
        overrideVimeoVideo,
        alt,
        caption,
        captionSubHeading
      },
    },
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "products": *[_type == "products"] | order(orderRank asc){
    title,
    slug {
      current
    }
  },
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

export default function BlogSlug(initialData) {
  // Sanity Data
  const { data: { article, contact, products } } = pageService.getPreviewHook(initialData)()
  let d = new Date(article.publishDate);
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  let paragraphs = ''

  article.contentBlocks?.map( function(blocks) {
    if (blocks._type == 'textBlock') {
      blocks.text?.map( function(text){
        text.children.map( function(textInner) {
          paragraphs += `${textInner.text}`
        })
      })
    }
  })

  const estimatedReadTime = readingTime(paragraphs);

  return (
    <Layout>
      <NextSeo
        title={article.seo?.metaTitle ? article.seo?.metaTitle : article.title }
        description={article.seo?.metaDesc ? article.seo?.metaDesc : null}
        openGraph={{
          title: article.seo?.metaTitle ? article.seo?.metaTitle : article.title,
          description: article.seo?.metaDesc ? article.seo?.metaDesc : null,
          images: [
            {
              url: article.seo?.shareGraphic?.asset.url ? article.seo?.shareGraphic?.asset.url : article.heroImage.asset.url,
              width: article.seo?.shareGraphic?.asset.metadata.dimensions.width ? article.seo?.shareGraphic?.asset.metadata.dimensions.width : article.heroImage.asset.metadata.dimensions.width,
              height: article.seo?.shareGraphic?.asset.metadata.dimensions.height ? article.seo?.shareGraphic?.asset.metadata.dimensions.height : article.heroImage.asset.metadata.dimensions.height,
              type: 'image/jpeg',
            }
          ]
        }}
      />

      <Header homaLabNav={products} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.div variants={fade}>
            <div className={`w-full bg-white px-6 xl:px-10 mx-auto relative overflow-hidden pt-16 lg:pt-28 xl:pt-32 lg:border-b border-black/50`}>
              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>

              <div className={`max-w-screen-3xl mx-auto mt-6 lg:mt-0`}>
                <Link href="/blog">
                  <a className="w-10 lg:w-12 xl:w-16 h-10 lg:h-12 xl:h-16 border border-black/50 p-3 xl:p-4 flex items-center justify-center leading-[0] text-2xl mb-6 lg:mb-10 xl:mb-12 hover:bg-black hover:text-white">
                    <svg className="w-full" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.102 20.9 20.9 1.1M20.898 20.9 1.1 1.1" stroke="currentColor" strokeMiterlimit="10"/></svg>
                  </a>
                </Link>
              </div>
            </div>

            <div className="bg-white relative overflow-hidden">              
              <div className="w-full lg:border-b border-black/50">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 py-10 lg:py-10 pl-6 xl:pl-10 pr-6 xl:pr-10">
                    <div className="max-w-[920px] ml-auto flex flex-wrap h-full">
                      <div className="w-full">
                        <Link href={`/blog/categories/${article.category.slug.current}`}>
                          <a className="inline-block border border-black/50 font-medium uppercase leading-none p-1 lg:p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white mr-3 mb-6 lg:mb-12 text-sm lg:text-base">{article.category.title}</a>
                        </Link>

                        <h2 className="font-black text-[clamp(40px,_4.45vw,_86px)] leading-[0.9] mb-2 lg:mb-[15vw] uppercase w-full lg:w-11/12 tracking-tight">{article.title}</h2>
                      </div>

                      <div className="mt-auto w-full hidden lg:block">
                        {article.publishDate && (
                          <span className="uppercase text-sm lg:text-base tracking-widest mb-2 lg:mb-4 font-medium flex">
                            <span className="min-w-[150px]">Published:</span>
                            <span className="block">{da} {mo} {ye}</span>
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
                          <span className="block">{estimatedReadTime && (<>{estimatedReadTime.text}</>)}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 lg:border-l border-black/50 relative overflow-hidden">
                    <div className="w-full h-full aspect-square">
                      <SanityImage
                        image={article.heroImage}
                        alt="About Test"
                        layout="fill"
                        className="w-full h-full absolute inset-0 z-0 object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="w-full block lg:hidden pt-12 pb-5 px-6">
                    {article.publishDate && (
                      <span className="uppercase text-sm lg:text-base tracking-widest mb-2 lg:mb-4 font-medium flex">
                        <span className="min-w-[150px]">Published:</span>
                        <span className="block">{da} {mo} {ye}</span>
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
                      <span className="block">{estimatedReadTime && (<>{estimatedReadTime.text}</>)}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 lg:px-10">
                <div className="content lg:pt-[10vw] pb-[5vw] relative  max-w-screen-3xl mx-auto">
                  <div className="lg:absolute lg:top-[7vw] lg:left-0 z-10 pb-20 lg:pb-0">
                    <span className="uppercase block text-sm lg:text-base tracking-widest mb-2 lg:mb-4 font-medium mt-10 lg:mt-12">Share:</span>
                    
                    <div className="flex flex-wrap">
                      <a
                        href={`http://twitter.com/share?text=${article.title}&url=https://homagames.com/games/${article.slug.current}
                        `}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium tracking-widest leading-none text-black hover:opacity-75 focus:opacity-75 w-[40px] h-[40px] lg:w-[42px] lg:h-[42px] rounded-md bg-[#FFF0FF] flex items-center justify-center mr-2"
                      >
                        <TwitterIcon className="w-[50%]" />
                      </a>

                      <a
                        href={`https://www.facebook.com/share.php?u=https://homagames.com/games/${article.slug.current}&quote=${article.title}
                        `}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium tracking-widest leading-none text-black hover:opacity-75 focus:opacity-75 w-[40px] h-[40px] lg:w-[42px] lg:h-[42px] rounded-md bg-[#FFF0FF] flex items-center justify-center mr-2"
                      >
                        <FacebookIcon className="w-[50%]" />
                      </a>

                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://homagames.com/games/${article.slug.current}&quote=${article.title}
                        `}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium tracking-widest leading-none text-black hover:opacity-75 focus:opacity-75 w-[40px] h-[40px] lg:w-[42px] lg:h-[42px] rounded-md bg-[#FFF0FF] flex items-center justify-center mr-2"
                      >
                        <LinkedInIcon className="w-[50%]" />
                      </a>

                      <button
                        onClick={() => {navigator.clipboard.writeText(`https://homagames.com/games/${article.slug.current}`)}}
                        className="text-base font-medium tracking-widest leading-none text-black hover:opacity-75 focus:opacity-75 w-[40px] h-[40px] lg:w-[42px] lg:h-[42px] rounded-md bg-[#FFF0FF] flex items-center justify-center relative z-10"
                      >
                        <LinkIcon className="w-[50%]" />
                      </button>
                    </div>
                  </div>
                  <div className="lg:w-10/12 xl:w-full mx-auto">
                    <BodyRenderer body={article.contentBlocks} />
                  </div>
                </div>
              </div>

              <FooterCta />
              <Footer contact={contact} homaLabNav={products} />
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