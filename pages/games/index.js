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
import Image from 'next/image'
import Link from 'next/link'
import PixelatedImage from '@/components/pixelated-image'
import { CarouselPhone } from '@/components/carousel-phone'
import TextScrambler from '@/components/text-scrambler'
import { CarouselGames } from '@/components/carousel-games'
import { CarouselCards } from '@/components/carousel-cards'


// Sanity
import SanityPageService from '@/services/sanityPageService'
import ScramblePillButton from '@/components/scramble-pill-button'

const query = `{
  "games": *[_type == "gamesLibrary"] | order(orderRank asc){
    projectCode,
    title,
    partnerName,
    gameplayVideo,
    googlePlayStoreLink,
    appStoreLink
  },
  "successStories": *[_type == "caseStudies"]{
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
    partnerName,
    projectName,
    publishDate,
    slug {
      current
    }
  },
  "gamesLanding": *[_type == "games"][1] {
    title,
    heroIntroText,
    fromCustomersToCollaboratorsText,
    peopleYoullMeetText,
    peopleYoullMeet[] {
      heading,
      text
    },
    buildABrandCtaText,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Games(initialData) {
  // Sanity Data
  const { data: { games, successStories, gamesLanding } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo
        title={gamesLanding.seo?.metaTitle ? gamesLanding.seo?.metaTitle : 'Games'}
        description={gamesLanding.seo?.metaDesc ? gamesLanding.seo?.metaDesc : null}
        openGraph={{
          title: gamesLanding.seo?.metaTitle ? gamesLanding.seo?.metaTitle : gamesLanding.title,
          description: gamesLanding.seo?.metaDesc ? gamesLanding.seo?.metaDesc : null,
          images: gamesLanding.seo?.shareGraphic?.asset[
            {
              url: gamesLanding.seo?.shareGraphic?.asset.url ? gamesLanding.seo?.shareGraphic?.asset.url : null,
              width: gamesLanding.seo?.shareGraphic?.asset.metadata.dimensions.width ? gamesLanding.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: gamesLanding.seo?.shareGraphic?.asset.metadata.dimensions.height ? gamesLanding.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ]
        }}
      />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.div variants={fade}>
            <div className="w-full h-full min-h-screen bg-gradient-to-t from-pink/20 to-pink pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden mb-[8vw]">
              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>

              <div className="max-w-screen-3xl mx-auto">
                <h1 className="font-black text-[clamp(50px,_9vw,190px)] leading-[0.95] mb-4 uppercase relative z-10 w-11/12 lg:w-full"><TextScrambler text="Win with the ease of cheating" seed={15} step={2} /></h1>

                <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%] max-w-[720px] pt-[5%] lg:pt-[10%] relative pb-8 lg:pb-0">
                  <div className="relative z-10">
                    <p className="text-lg md:text-2xl xl:text-3xl mb-12 lg:mb-16">{gamesLanding.heroIntroText}</p>

                    <a href="https://lab-v2.homagames.com/login" target="_blank" rel="noreferrer noopener" className="bg-black text-white px-12 py-6 uppercase tracking-wide w-1/2 text-center">
                      Submit your game
                    </a>
                  </div>
                </div>
                
                <ScrollParallax isAbsolutelyPositioned lerpEase={0.15}>
                  <div className="absolute bottom-0 right-[10%] md:right-[3%] lg:right-[10%] z-0 w-[75%] lg:w-[65%] xl:w-[40%] max-w-[400px] lg:max-w-[580px] xl:max-w-[650px]">
                    {/* <Image
                      src="/images/horse.webp"
                      alt="Bee"
                      layout="responsive"
                      width={864}
                      height={865}
                      className="w-full"
                    /> */}
                    <PixelatedImage image={'/images/farmer.webp'} width={1120} height={1186} />
                  </div>
                </ScrollParallax>
              </div>
            </div>

            <div className="mb-[8vw]">
              <CarouselGames heading="Greatest Hits To Date" items={games} />
            </div>

            <Container>
              <div className="flex flex-wrap py-12 lg:pt-[10vw] lg:pb-[5vw] xl:pb-0">
                <div className="w-full lg:w-1/2">
                  <h2 className="font-black text-[clamp(48px,_4.17vw,_80px)] leading-[0.95] mb-8 lg:mb-[5vw] uppercase w-11/12 break-words">From Customers to collaborators</h2>

                  <div className="w-11/12 content mb-8 lg:mb-12">
                    <p>{gamesLanding.fromCustomersToCollaboratorsText}</p>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-start translate-y-[-15%] lg:translate-y-[-25%]">
                  <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full`}>
                    <source src={'/videos/faces.webm'} type="video/webm" />

                    Sorry. Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </Container>

            <CarouselCards heading="Our Partners" items={successStories} />

            <div className="relative border-b border-black/50">
              <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.05} zIndex={10}>
                <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.14} zIndex={10}>
                  <div className="absolute bottom-[25%] right-[48%] z-0 w-full max-w-[100px] lg:max-w-[180px]">
                    {/* <Image
                      src="/images/bee.webp"
                      alt="Bee"
                      layout="responsive"
                      width={398}
                      height={548}
                      className="w-full"
                    /> */}
                    <PixelatedImage image={'/images/bee.webp'} width={398} height={548} />
                  </div>
                </ScrollParallax>
              </MouseParallax>

              <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.05} zIndex={0}>
                <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={-0.23} zIndex={0}>
                  <div className="absolute top-[40%] left-[12%] z-0 w-full max-w-[55px] lg:max-w-[95px] -scale-x-100 rotate-[15deg]">
                    {/* <Image
                      src="/images/bee.webp"
                      alt="Bee"
                      layout="responsive"
                      width={398}
                      height={548}
                      className="w-full"
                    /> */}
                    <PixelatedImage image={'/images/bee.webp'} width={398} height={548} />
                  </div>
                </ScrollParallax>
              </MouseParallax>

              <MouseParallax isAbsolutelyPositioned lerpEase={0.15} strength={0.05} zIndex={10}>
                <ScrollParallax isAbsolutelyPositioned lerpEase={0.15} strength={0.1} zIndex={10}>
                  <div className="absolute top-[35%] right-[8%] z-0 w-full max-w-[65px] lg:max-w-[140px] rotate-[-14deg]">
                    {/* <Image
                      src="/images/bee.webp"
                      alt="Bee"
                      layout="responsive"
                      width={398}
                      height={548}
                      className="w-full"
                    /> */}
                    <PixelatedImage image={'/images/bee.webp'} width={398} height={548} />
                  </div>
                </ScrollParallax>
              </MouseParallax>

              <div className="relative z-0 flex overflow-x-hidden">
                <div className="my-56 lg:my-[25vw] animate-marquee whitespace-nowrap">
                  <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
                  <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
                  <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
                </div>

                <div className="my-56 lg:my-[25vw] absolute top-0 animate-marquee2 whitespace-nowrap">
                  <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
                  <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
                  <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">All Killer, No Filler</span>
                </div>
              </div>
            </div>



            <div className="bg-lime text-black">
              <div className="grid grid-cols-12 py-12 lg:py-[10vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
                
                <div className="col-span-12 z-10">
                  <h2 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase w-[70%] lg:w-[50%] max-w-[800px]">How we get your game in lights</h2>

                  <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8">
                    <div className="w-full lg:w-1/2 xl:w-1/4 border-b xl:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full`}>
                        <source src={'/videos/chess.webm'} type="video/webm" />

                        Sorry. Your browser does not support the video tag.
                      </video>

                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-3xl leading-[0.95] mb-5 lg:mb-8 uppercase">Test your idea</h3>

                      <div className="content content--small w-11/12">
                        <p>There’s no reward in building a game no one will download or play. With Homa, you’ll have access to all the latest trends, niches and statistics you need to make sure you’re building games billions will play.</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 xl:w-1/4 border-b xl:border-b-0 xl:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full`}>
                        <source src={'/videos/cog.webm'} type="video/webm" />

                        Sorry. Your browser does not support the video tag.
                      </video>

                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-3xl leading-[0.95] mb-5 lg:mb-8 uppercase">Send a prototype</h3>

                      <div className="content content--small w-11/12">
                        <p>Send a prototype our way and one of our Publishing Managers will be in touch to talk about how we can help, one-to-one.</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 xl:w-1/4 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full`}>
                        <source src={'/videos/brick.webm'} type="video/webm" />

                        Sorry. Your browser does not support the video tag.
                      </video>

                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-3xl leading-[0.95] mb-5 lg:mb-8 uppercase">Build a game</h3>

                      <div className="content content--small w-11/12">
                        <p>With our SDK you can start iterating immediately to perfect your game by every metric, from cost of acquisition to retention to session times. You’ll also get hot-off-the-press insights from our Market Intelligence team.</p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 xl:w-1/4 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full`}>
                        <source src={'/videos/rocket.webm'} type="video/webm" />

                        Sorry. Your browser does not support the video tag.
                      </video>

                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-3xl leading-[0.95] mb-5 lg:mb-8 uppercase">Launch a hit</h3>

                      <div className="content content--small w-11/12">
                        <p>Once everything is running smoothly, we’ll push it out into the world using the right channels at the right time to maximize impact and land at the top of the charts, where the real money is.</p>
                      </div>
                    </div>
                  </div>

                
                  <a href="https://lab-v2.homagames.com/login" target="_blank" rel="noreferrer noopener" className="inline-block border border-black/50 font-medium uppercase leading-none py-6 px-10 rounded-sm bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white">Submit your game</a>
                </div>
              </div>
            </div>


            <div className="relative overflow-hidden">

              <div className="absolute bottom-0 right-0 w-[75%] lg:w-[45%] max-w-[850px]">
                {/* <Image
                  src="/images/our-team-cta.jpg"
                  alt="About Test"
                  layout="responsive"
                  width={1910}
                  height={2032}
                  className="w-full"
                /> */}

                {/* <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full`}>
                  <source src={'/videos/chess.webm'} type="video/webm" />

                  Sorry. Your browser does not support the video tag.
                </video> */}
              </div>

              <div className="grid grid-cols-12 py-12 pb-[85vw] lg:py-[10vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
                <div className="col-span-12 lg:col-span-2 relative z-10">
                  <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">Our Team</span>
                </div>
                
                <div className="col-span-12 lg:col-span-7 z-10 relative">
                  <h2 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase">People you'll meet along the way.</h2>
                  <div className="content max-w-[720px] mb-8 xl:mb-12 w-9/12">
                    <p>{gamesLanding.peopleYoullMeetText}</p>
                  </div>

                  <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8 max-w-[650px] bg-white relative z-10">
                    {gamesLanding.peopleYoullMeet.map((e, i) => {
                      return (
                        <div className={`w-full border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10 ${(i + 1) == gamesLanding.peopleYoullMeet.length ? '' : 'border-b' }`} key={i}>
                          <h3 className="font-bold text-xl lg:text-2xl xl:text-3xl leading-[0.95] mb-4 lg:mb-6 uppercase">{e.heading}</h3>

                          <div className="content content--small w-9/12 lg:w-11/12">
                            <p>{e.text}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <a href="https://lab-v2.homagames.com/login" target="_blank" rel="noreferrer noopener" className="inline-block font-medium uppercase leading-none py-6 px-10 rounded-sm bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white">Submit your game</a>
                </div>

                <div className="col-span-12 lg:col-span-3 relative hidden xl:block self-center">
                  <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`w-full scale-[1.4] xl:scale-[1.5] translate-x-[-25%] xl:translate-x-[-30%] xl:translate-y-[20%]`}>
                    <source src={'/videos/chess.webm'} type="video/webm" />

                    Sorry. Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>


            <div className="w-full bg-white relative overflow-hidden">
              <div className="grid grid-cols-12 border-black/50 border-t border-b relative z-10">
                <div className="col-span-10 col-start-2 border-black/50 border-l border-r bg-transparent h-[12vw]">
                  <div className="flex flex-wrap h-full">
                    <div className="w-full lg:w-1/2"></div>
                    <div className="w-full lg:w-1/2 lg:border-l border-black/50"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 border-black/50 relative z-10">
                <div className="col-span-10 col-start-2 border-black/50 border-l border-r">
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-6 md:p-10 xl:p-16">
                      <h2 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-[10vw] uppercase">Build a brand, then make a game out of it.</h2>

                      <div className="w-11/12 content mb-8 lg:mb-12">
                        <p>{gamesLanding.buildABrandCtaText}</p>
                      </div>
                      
                      <ScramblePillButton href="/community" label="Learn More" internal />
                    </div>

                    <div className="w-full lg:w-1/2 lg:border-l border-black/50 bg-gray-200 overflow-hidden relative">
                      <div className="scale-[1.125] w-full h-full">
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
              </div>

              <div className="grid grid-cols-12 border-black/50 border-t relative z-10">
                <div className="col-span-10 col-start-2 border-black/50 border-l border-r bg-transparent h-[12vw]">
                  <div className="flex flex-wrap h-full">
                    <div className="w-full lg:w-1/2"></div>
                    <div className="w-full lg:w-1/2 lg:border-l border-black/50"></div>
                  </div>
                </div>
              </div>
            </div>

            <FooterCta image="/images/about-footer.jpg">
              <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-white bg-gradient-to-b from-pink/20 to-pink p-6 md:p-10 xl:p-16 text-center">
                <span className="block font-black uppercase text-2xl md:text-3xl xl:text-4xl mb-20 md:mb-[15vw] xl:mb-[12.5vw]">One hit is good, Multiple is the goal.</span>

                <div className="w-8/12 mx-auto max-w-md mb-20 md:mb-[15vw] xl:mb-[12.5vw] text-lg md:text-xl xl:text-2xl">
                  <p>There’s no secret to success, just a winning formula. So why stop at one?</p>
                </div>

                <ScramblePillButton href="/homa-lab" label="Learn More" internal />
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