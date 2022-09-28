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

// Sanity
import SanityPageService from '@/services/sanityPageService'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollParallax } from 'react-just-parallax'
import SanityImage from '@/components/sanity-image'
import TextScrambler from '@/components/text-scrambler'
import GridOverlay from '@/components/grid-overlay'

const query = `{
  "product": *[_type == "products" && slug.current == $slug][0] {
    title,
    introText,
    introTextLong,
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
    contentSections[] {
      title,
      shortDescription,
      longDescription,
      sectionItems[] {
        text
      },
      sectionDownloadsLinks[] {
        buttonText,
        buttonUrl
      }
    },
    sectionItemsSingleSection[] {
      text,
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
}`

const pageService = new SanityPageService(query)

export default function HomaLabChild(initialData) {
  // Sanity Data
  const { data: { product } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo
        title={product.seo?.metaTitle ? product.seo?.metaTitle : product.title }
        description={product.seo?.metaDesc ? product.seo?.metaDesc : null}
      />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="pt-[55px] lg:pt-[70px] xl:pt-[81px]"
        >
          <m.div variants={fade}>
            <div className="w-full border-b border-black/50">
              <div className="flex flex-wrap">
                <div className="w-full order-2 lg:order-1 lg:w-1/2 py-6 lg:py-10 pl-6 xl:pl-10 pr-6 xl:pr-10">
                  <div className="max-w-[920px] ml-auto flex flex-wrap h-full">
                    <div className="w-full">
                      <h2 className="font-black leading-none uppercase text-[clamp(45px,_6vw,100px)] w-11/12">{product.title}</h2>
                    </div>
                    <div className="mt-auto w-full">
                      {product.introTextLong && (
                        <div className="content max-w-3xl mb-6 lg:mb-10 w-11/12">
                          <p>{product.introTextLong}</p>
                        </div>
                      )}

                      <a className="pill-btn group" href="https://lab-v2.homagames.com/login" target="_blank" rel="noopener noreferrer">
                        <div className="relative">
                          <span className="block group-hover:opacity-0">Enter The Homa Lab</span>
                          <span className="absolute top-0 left-0 right-0 hidden  group-hover:block"><TextScrambler text="Enter The Homa Lab" seed={5} step={1} singleLine /></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 order-1 lg:order-2 lg:border-l border-b lg:border-b-0 border-black/50 relative overflow-hidden">
                  <GridOverlay />
                  <div className="scale-[1.125] w-full h-full aspect-square">
                    <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.05}>
                      <SanityImage
                        image={product.heroImage}
                        layout="fill"
                        className="w-full h-full absolute inset-0 z-0 object-cover object-top"
                      />
                    </ScrollParallax>
                  </div>
                </div>
              </div>
            </div>
            {product.contentSections && (
              <div className="w-full flex flex-wrap">
                <div className="w-full lg:w-1/2 px-6 xl:px-10 py-20 lg:py-28 xl:py-32 border-b lg:border-r border-black/50">
                  <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">{product.title} Overview</span>
                  {product.contentSections?.map((e, i) => {
                    return (
                      <div key={i} className="mb-5 lg:mb-8">
                        <span className="font-bold text-xl lg:text-2xl xl:text-3xl uppercase tracking-wide leading-[1] lg:leading-[1] xl:leading-[1] block mb-3 lg:mb-5">{e.title}</span>
                        <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">{e.shortDescription}</span>

                        {e.sectionDownloadsLinks?.map((e, i) => {
                          return (
                            <a key={i} className="inline-block flex-shrink-0 border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white mr-3 mb-3" href={e.buttonUrl} target="_blank" rel="noopener noreferrer">{e.buttonText}</a>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
                <div className="w-full lg:w-1/2 px-6 xl:px-10 py-20 lg:py-28 xl:py-32 border-b lg:border-r border-black/50 relative overflow-hidden aspect-square">
                  <GridOverlay/>
                </div>
              </div>
            )}

            <div className="w-full flex flex-wrap">
              <div className="w-full lg:w-1/2 px-6 xl:px-10 py-20 lg:py-28 xl:py-32 bg-gray-100 border-b lg:border-b-0 lg:border-r border-black/50">
                <div className="lg:sticky lg:top-28 xl:top-32 lg:pb-32 xl:pb-48">
                  <div className="flex w-full lg:h-screen lg:-mt-32 xl:-mt-40 items-center justify-center">
                    <div className="w-[300px] h-[300px] bg-pink lg:-mt-32 xl:-mt-40"></div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 pb-12 lg:pb-16 xl:pb-24">
                {product.contentSections?.map((e, i) => {
                  return (
                    <>
                      <div className={`w-full ${i + 1 != 9 && 'border-b border-black/50'} px-6 xl:px-10 py-6 xl:py-10 flex flex-wrap`}>
                        <div className="w-full lg:w-3/4">
                          <h3 className="font-black text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-12 lg:mb-24 uppercase max-w-[500px] xl:max-w-none">{e.title}</h3>

                          <div className="w-11/12 lg:w-11/12 max-w-[650px] pb-[15vw]">
                            <div className="content mb-6 lg:mb-10">
                              <p>{e.longDescription}</p>
                            </div>

                            {e.sectionDownloadsLinks?.map((e, i) => {
                              return (
                                <a key={i} className="inline-block flex-shrink-0 border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white mr-3 mb-3" href={e.buttonUrl} target="_blank" rel="noopener noreferrer">{e.buttonText}</a>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                      {e.sectionItems?.map((e, i) => {
                        return (
                          <div className={`w-full ${i + 1 != 9 && 'border-b border-black/50'} px-6 xl:px-10 py-6 xl:py-10 flex flex-wrap`}>
                            <div className="w-full">
                              <h3 className="font-black text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-12 lg:mb-24 uppercase max-w-[500px] xl:max-w-none">0{i + 1}</h3>

                              <div className="w-11/12 lg:w-11/12 max-w-[650px]">
                                <p className="font-bold text-xl lg:text-2xl xl:text-3xl uppercase tracking-wide leading-[1] lg:leading-[1] xl:leading-[1]">{e.text}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </>
                  )
                })}
                {product.sectionItemsSingleSection?.map((e, i) => {
                  return (
                    <div className={`w-full ${i + 1 != 9 && 'border-b border-black/50'} px-6 xl:px-10 py-6 xl:py-10 flex flex-wrap`}>
                      <div className="w-full">
                        <h3 className="font-black text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-12 lg:mb-24 uppercase max-w-[500px] xl:max-w-none">0{i + 1}</h3>

                        <div className="w-11/12 lg:w-11/12 max-w-[650px]">
                          <p className="font-bold text-xl lg:text-2xl xl:text-3xl uppercase tracking-wide leading-[1] lg:leading-[1] xl:leading-[1]">{e.text}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {!product.sectionItemsSingleSection && !product.contentSections && (
                  <div className={`w-full px-6 xl:px-10 py-6 xl:py-10 flex flex-wrap`}>
                    <div className="w-full">
                      <h3 className="font-black text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-12 lg:mb-24 uppercase max-w-[500px] xl:max-w-none">01</h3>

                      <div className="w-11/12 lg:w-11/12 max-w-[650px]">
                        <p className="font-bold text-xl lg:text-2xl xl:text-3xl uppercase tracking-wide leading-[1] lg:leading-[1] xl:leading-[1]">Coming soon...</p>
                      </div>
                    </div>
                  </div>
                )}
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
  const paths = await pageService.fetchPaths('products')
  return {
    paths: paths,
    fallback: false,
  };
}