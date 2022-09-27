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
import MousePosition from '@/components/mouse-position'
import DayInfo from '@/components/day-info'
import Link from 'next/link'
import Image from 'next/image'
import SocialScroller from '@/components/social-scroller'
import TextScrambler from '@/components/text-scrambler'
import PixelatedImage from '@/components/pixelated-image'

// Sanity
// import SanityPageService from '@/services/sanityPageService'

// const query = `{
//   "about": *[_type == "about"][0]{
//     title,
//     imageExample {
//       asset-> {
//         ...
//       },
//       caption,
//       alt,
//       hotspot {
//         x,
//         y
//       },
//     },
//     seo {
//       ...,
//       shareGraphic {
//         asset->
//       }
//     }
//   }
// }`

// const pageService = new SanityPageService(query)

export default function About(initalData) {
  // Sanity Data
  // const { data: { about } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo title="About" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.div variants={fade} className="w-full h-full min-h-screen lg:min-h-[110vh] bg-pink/30 pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden">
            <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-[1.07]">
              <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.035}>
                <Image
                  src="/images/who-we-are.jpg"
                  alt="Who We Are Landscape"
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

            <div className="max-w-screen-3xl mx-auto">
              <h1 className="font-black text-[clamp(80px,_9vw,190px)] leading-[0.95] mb-4 uppercase relative z-10 w-11/12 lg:w-full"><TextScrambler text="Mobile gaming’s major players" seed={25} step={2} /></h1>
            </div>
          </m.div>

          <m.div variants={fade} className="bg-gradient-to-b from-pink/20 to-pink relative overflow-hidden">
            <div className="w-full border-b border-black/50">
              <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[15vw] pb-[50vw] md:py-[15vw] md:px-10">
                  <div className="grid grid-cols-10 items-center relative">
                    <div className="col-span-9 md:col-span-5 mb-12 md:mb-0 relative z-10">
                      <p className="text-2xl uppercase font-bold mb-6">Before Homa, making a hit mobile game was blood, sweat and luck. Now, it’s more like step one, step two, step three.</p>
                      
                      <p className="text-2xl uppercase font-bold">So, who are we? We’re the people behind mobile gaming’s great leap forward. the creative specialists giving game creators the tools, support and data needed to power up their creativity and multiply their downloads.</p>
                    </div>

                    <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={0.015}>
                      <ScrollParallax isAbsolutelyPositioned lerpEase={0.015} zIndex={0}>
                        <div className="absolute bottom-[-55vw] left-[20vw] md:left-auto md:bottom-[-15vw] md:right-[-10vw] w-[120%] md:w-[66%] z-0">
                          {/* <Image
                            src="/images/character-test.webp"
                            alt="Character Test"
                            layout="responsive"
                            width={930}
                            height={1236}
                          /> */}

                          <PixelatedImage image={'/images/character-skull.webp'} width={1982} height={2046} />
                        </div>
                      </ScrollParallax>
                    </MouseParallax>

                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-b border-black/50">
              <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                <div className="col-span-10 col-start-2 md:col-span-12 md:col-start-0 pt-[10vw] pb-[5vw] md:px-10">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12">
                      <p className="text-2xl uppercase font-bold mb-8 lg:mb-12">Our Community</p>

                      <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] mb-12 lg:mb-32 uppercase">Build communities and technology that help game makers transform their ideas into games billions are eager to download and play.</h2>

                      <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8">
                        <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                          <h3 className="font-black text-[clamp(100px,_9vw,_200px)] leading-[0.95] mb-4 uppercase w-11/12">110+</h3>

                          <div className="content w-11/12 mb-16 lg:mb-48">
                            <p className="uppercase font-bold">Humans</p>
                          </div>
                        </div>

                        <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                          <h3 className="font-black text-[clamp(100px,_9vw,_200px)] leading-[0.95] mb-4 uppercase w-11/12">25</h3>

                          <div className="content w-11/12 mb-16 lg:mb-48">
                            <p className="uppercase font-bold">Countries of origin</p>
                          </div>
                        </div>

                        <div className="w-full lg:w-1/3 p-5 lg:p-6 xl:p-8 2xl:p-10">
                          <h3 className="font-black text-[clamp(100px,_9vw,_200px)] leading-[0.95] mb-4 uppercase w-11/12">07</h3>

                          <div className="content w-11/12 mb-16 lg:mb-48">
                            <p className="uppercase font-bold">Office dogs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          <m.div variants={fade} className="w-full py-[25vw] lg:py-[18vw] xl:py-[15vw] relative overflow-hidden mb-0 px-6 lg:px-10">
            <div className="w-full h-full absolute inset-0 z-0 object-cover object-center scale-[1.1]">
              <ScrollParallax isAbsolutelyPositioned lerpEase={1} strength={-0.035} zIndex={0}>
                <Image
                  src="/images/who-we-are.jpg"
                  alt="Who We Are Landscape"
                  layout="fill"
                  quality={75}
                  priority
                  className="w-full h-full absolute inset-0 z-0 object-cover object-center"
                />
              </ScrollParallax>
            </div>

            <div className="max-w-screen-xl mx-auto text-center relative z-10">
              <span className="text-2xl uppercase font-bold mb-8 lg:mb-12 block">Our People</span>
              <h2 className="font-black text-[clamp(50px,_5.5vw,120px)] leading-[0.95] uppercase text-center relative z-10 w-11/12 lg:w-full mb-8 lg:mb-12">To lead the world,<br/> you need people from all over it</h2>

              <Link href="/careers">
                <a class="roll-btn w-auto inline-block">
                  <span class="roll-btn__front">Apply for a Job at Homa</span>
                  <span class="roll-btn__back">Apply for a Job at Homa</span>
                </a>
              </Link>
            </div>
          </m.div>


          <m.div variants={fade} className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 px-6 xl:px-10 py-20 lg:py-28 xl:py-32 bg-gray-100 border-b lg:border-b-0 lg:border-r border-black/50">
              <div className="lg:sticky lg:top-28 xl:top-32 lg:pb-32 xl:pb-48">
                <div className="flex w-full lg:h-screen lg:-mt-32 xl:-mt-40 items-center justify-center">
                  <div className="w-[300px] h-[300px] bg-pink lg:-mt-32 xl:-mt-40"></div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 pb-12 lg:pb-16 xl:pb-24">
              {Array.from(Array(9), (e, i) => {
                return (
                  <div className={`w-full ${i + 1 != 9 && 'border-b border-black/50'} px-6 xl:px-10 py-6 xl:py-10 flex flex-wrap`}>
                    <div className="w-auto mr-12">
                      <span className="uppercase text-sm tracking-widest mt-1 block font-medium">0{i + 1}</span>
                    </div>
                    <div className="w-3/4">
                      <h3 className="font-black text-3xl lg:text-4xl xl:text-5xl leading-[0.95] mb-12 lg:mb-24 uppercase max-w-[500px] xl:max-w-none">Title</h3>

                      <div className="content w-11/12 lg:w-11/12 max-w-[650px]">
                        <p>Copy TBC.</p>
                      </div>
                    </div>
                  </div>  
                )
              })}
            </div>
          </m.div>

          <m.div variants={fade}>
            {Array.from(Array(3), (e, i) => {
              return (
                <div className={`bg-lime text-black border-t border-black/50 ${i !== 2 ? 'z-0 sticky top-0' : ' relative z-10' }`} key={i}>
                  <div className="grid grid-cols-12 py-[15vw] h-screen px-6 xl:px-10 max-w-screen-3xl mx-auto items-center">
                    
                    <div className="col-span-12 lg:col-span-6 z-10">
                      <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">We Value:</span>
                      <h2 className="display-text mb-6 lg:mb-12 xl:mb-16">Ambition</h2>
                      <span className="uppercase text-xl lg:text-2xl xl:text-3xl tracking-widest mb-3 lg:mb-5 block font-black leading-none lg:leading-none xl:leading-none">We put flags on summits</span>
                      <div className="content content--lg max-w-3xl mb-8 xl:mb-12 w-10/12">
                        <p>We set our goals ambitiously high and don’t shy away from the climb. We’re on a mission to take over an industry thick with incumbents who won’t go quietly into the night. To succeed here, you’ll need a highly metaphorical shield and a sword.</p>
                      </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6 z-10 h-full">
                      <div className="h-full flex items-center justify-center">
                        <div className="w-[300px] h-[300px] border-black border"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </m.div>

          <m.div className="bg-white relative z-10">
            <div className="">
              <div className="relative z-0 flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/500/500" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/600/600" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/700/700" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/800/800" alt="PLACEHOLDER" />
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/500/500" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/600/600" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/700/700" alt="PLACEHOLDER" />
                  <img className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square" src="https://place.dog/800/800" alt="PLACEHOLDER" />
                </div>
              </div>
            </div>

            <SocialScroller />
            <FooterCta image={"/images/about-footer.jpg"} />
            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

// Sanity CMS Props
// export async function getStaticProps(context) {
//   const cms = await pageService.fetchQuery(context)

//   return {
//     props: { ...cms }
//   }
// }