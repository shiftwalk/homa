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
import { MouseParallax, ScrollParallax } from 'react-just-parallax'
import DayInfo from '@/components/day-info'
import MousePosition from '@/components/mouse-position'
import Link from 'next/link'
import Image from 'next/image'
import PixelatedImage from '@/components/pixelated-image'
import TextScrambler from '@/components/text-scrambler'

// Sanity
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
import GridOverlay from '@/components/grid-overlay'

const query = `{
  "products": *[_type == "products"]{
    title,
    introText,
    slug {
      current
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
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function HomaLab(initialData) {
  // Sanity Data
  const { data: { products } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo title="Homa Lab" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.div variants={fade}>
            <div className="w-full h-full min-h-screen lg:min-h-[110vh] bg-pink/30 pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden">
              <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-[1.07]">
                <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.035}>
                  <Image
                    src="/images/homa-lab.jpg"
                    alt="Homa Lab Landscape"
                    layout="fill"
                    quality={75}
                    priority
                    className="w-full h-full absolute inset-0 z-0 object-cover object-top"
                  />
                </ScrollParallax>
              </div>

              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>

              <div className="max-w-screen-3xl mx-auto relative z-10">
                <h1 className="font-black text-[clamp(80px,_8.5vw,170px)] leading-[0.95] mb-16 lg:mb-32 uppercase relative z-10 w-11/12 lg:w-full"><TextScrambler text="If you’re not using this, you’re just playing around" seed={50} step={3} /></h1>

                <a href="https://lab-v2.homagames.com/login" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-12 py-6 uppercase tracking-wide w-1/2 text-center">
                  Submit your game
                </a>
              </div>
            </div>

            <div className="border-b border-black/50 relative overflow-hidden">
              <Container>
                <div className="flex flex-wrap py-12 pb-96 lg:py-[12vw]">
                  <div className="w-full lg:w-1/2">
                    <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl mb-8 lg:mb-[5vw] uppercase w-10/12 tracking-wide">Welcome to our data-powered centrifuge of ideas, insights and tools to game the system and score HITS. Lab coat optional.</h2>

                    <div className="w-10/12 content mb-8 lg:mb-12">
                      <p>Homa Lab is a SaaS workspace and data platform built by and for game devs. It helps you develop new game ideas by looking at market trends to spot niches and fresh mechanics. Then it helps you test out builds for quality, engagement, and marketability.</p>
                    </div>
                  </div>

                  <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={0.025}>
                    <ScrollParallax isAbsolutelyPositioned lerpEase={0.15}>
                      <div className="absolute bottom-[-30px] right-[10vw] w-[55vw] lg:w-[32vw] xl:w-[32vw] 2xl:w-[30vw] max-w-[230px] lg:max-w-[480px] z-0">
                        {/* <Image
                          src="/images/character-test.webp"
                          alt="Character Test"
                          layout="responsive"
                          width={930}
                          height={1236}
                        /> */}

                        <PixelatedImage image={'/images/princess.webp'} width={994} height={1612} />
                      </div>
                    </ScrollParallax>
                  </MouseParallax>
                </div>
              </Container>
            </div>
            
            {products.map((e, i) => {
              return (
                <div className="bg-white relative overflow-hidden" key={i}>
                  <div className="w-full border-b border-black/50">
                    <div className="grid grid-cols-12 ">
                      <div className="col-span-10 col-start-2 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50">
                        <div className="grid grid-cols-10">
                          <div className="col-span-9 lg:col-span-5 mb-12 lg:mb-0 py-10 lg:py-12 lg:px-12 flex flex-wrap">
                            <div className="w-full mb-auto">
                              <span className="uppercase text-base tracking-widest mb-5 lg:mb-8 block font-medium">0{i + 1}</span>
                              <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] mb-12 lg:mb-32 uppercase w-11/12 max-w-[600px]">{e.title}</h2>
                            </div>
                            <div className="w-full mt-auto">
                              <div className="content mb-6 lg:mb-12 w-11/12">
                                <p>{e.introText}</p>
                              </div>

                              <Link href={`/homa-lab/${e.slug.current}`}>
                                <a className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">Learn More</a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-span-10 lg:col-span-5 lg:col-start-6 relative overflow-hidden lg:border-l lg:border-black/50">
                            <GridOverlay />
                            <div className="scale-[1.25] w-full h-full aspect-square">
                              <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.05}>
                                <SanityImage image={e.heroImage} layout="fill" className="w-full h-full absolute inset-0 z-0 object-cover object-top" />
                              </ScrollParallax>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-b border-black/50 hidden lg:block">
                    <div className="grid grid-cols-12">
                      <div className="col-span-10 col-start-2 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50 h-[8vw]">
                        <div className="grid grid-cols-10">
                          <div className="col-span-9 lg:col-span-5">
                          </div>
                          <div className="col-span-10 lg:col-span-5 lg:col-start-6 lg:border-l lg:border-black/50 h-[8vw]">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="bg-lime text-black">
              <div className="grid grid-cols-12 py-12 lg:py-[15vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
                <div className="col-span-12 lg:col-span-2 relative z-10">
                  <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">Homa Academy</span>
                </div>
                
                <div className="col-span-12 lg:col-span-8 z-10">
                  <h1 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase">Level up your game</h1>
                  <div className="content max-w-3xl mb-8 xl:mb-12 w-10/12">
                    <p>The Academy is a dev-centered learning hub where you can access game design and game play analysis of the latest hits, training on how to build great games, methods for ideation and player experience optimization.</p>
                  </div>

                  <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8">
                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-3xl leading-[0.95] mb-12 lg:mb-32 uppercase">Analysis &amp; Feedback</h3>

                      <div className="content content--small w-11/12">
                        <p>The weekly Homa Hangout where we dissect hit games.</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-3xl leading-[0.95] mb-12 lg:mb-32 uppercase w-11/12">Best in class mentorship</h3>

                      <div className="content content--small w-11/12">
                        <p>Best practice guides for ideation and game design.</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-3xl leading-[0.95] mb-12 lg:mb-32 uppercase">Access to our library</h3>

                      <div className="content content--small w-11/12">
                        <p>Resource examples for (hyper and hybrid) casual games, UI/UX analysis and examples</p>
                      </div>
                    </div>
                  </div>

                  <Link href="#">
                    <a className="inline-block border border-black/50 font-medium uppercase leading-none py-6 px-10 rounded-sm bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>

            <FooterCta image="/images/homa-lab-footer.jpg">
              <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-white bg-gradient-to-b from-pink/20 to-pink p-6 md:p-10 xl:p-16 text-center">
                <span className="block font-black uppercase text-2xl md:text-3xl xl:text-4xl mb-20 md:mb-[15vw] xl:mb-[12.5vw]">We've just said a lot of things, come see that they're all true.</span>

                <div className="w-8/12 mx-auto max-w-md mb-20 md:mb-[15vw] xl:mb-[12.5vw]">

                <a href="https://lab-v2.homagames.com/login" target="_blank" rel="noopener noreferrer" className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">Enter the Homa Lab</a>
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

// Sanity CMS Props
export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}