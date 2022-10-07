// Tools
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

// Transitions
import { fade } from '@/helpers/transitions'

// Components
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ScrollParallax } from 'react-just-parallax'
import Image from 'next/image'
import DayInfo from '@/components/day-info'
import MousePosition from '@/components/mouse-position'
import DiscordIcon from "@/icons/discord.svg"
import TikTokIcon from "@/icons/tiktok.svg"
import TwitterIcon from "@/icons/twitter.svg"
import { CarouselTeam } from '@/components/carousel-team'
import AccordionList from '@/components/accordion'
import TextScrambler from '@/components/text-scrambler'

// Sanity
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
import GridOverlay from '@/components/grid-overlay'
import { CarouselTikTok } from '@/components/carousel-tiktok'
import ScramblePillButton from '@/components/scramble-pill-button'
import LocalImage from '@/components/local-image'

const query = `{
  "team": *[_type == "team"]{
    title,
    image {
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
    jobTitle,
    company,
    linkedIn,
    twitter,
  },
  "community": *[_type == "community"][0]{
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
    mobileHeroImage {
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
    gangQAndA[] {
      question,
      answer
    },
    tikToks[] {
      url,
      video,
      postDate
    },
    roadmap[] {
      date,
      heading,
      text,
      image {
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
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
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

export default function Community(initialData) {
  // Sanity Data
  const { data: { team, community, contact } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo
        title={community.seo?.metaTitle ? community.seo.metaTitle : 'Community'}
        description={community.seo?.metaDesc ? community.seo.metaDesc : null}
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
            <div className="w-full h-full min-h-screen lg:min-h-[110vh] bg-pink/30 pt-24 lg:pt-40 xl:pt-52 px-6 xl:px-10 mx-auto relative overflow-hidden">
              <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-[1.07]">
                <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={1} strength={-0.035}>
                  <SanityImage
                    image={community.heroImage}
                    layout="fill"
                    className="w-full h-full absolute inset-0 z-0 object-cover cover-image--bottom hidden lg:block"
                  />
                  <SanityImage
                    image={community.mobileHeroImage}
                    layout="fill"
                    className="w-full h-full absolute inset-0 z-0 object-cover cover-image--bottom block lg:hidden"
                  />
                </ScrollParallax>
              </div>

              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>

              <div className="max-w-screen-3xl mx-auto">
                <h1 className="font-black text-[clamp(55px,_8.5vw,_180px)] leading-[0.95] tracking-tight mb-4 uppercase relative z-10 w-11/12 lg:w-full"><TextScrambler text="Out of the game, into the universe." seed={30} step={2} /></h1>
              </div>
            </div>


            <div className="w-full flex flex-wrap border-b border-t border-black/50 mb-12 lg:mb-[10vw]">
              <div className="w-full lg:w-1/2 px-6 xl:px-10 py-20 lg:py-28 xl:py-32">
                <div className="lg:pb-32 xl:pb-48 max-w-screen-md ml-auto">
                  <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">A new player has entered the game</span>

                  <h3 className="font-bold text-xl lg:text-2xl xl:text-3xl mb-8 lg:mb-[5vw] uppercase w-full lg:w-10/12 tracking-wide leading-[1.2]">Our characters were tired of playing games, so we’re turning them loose and putting them in your hands. Welcome to a universe where you and your favorite character become two sides of the same coin. Endless adventure awaits.<br/><br/>Launching soon.</h3>
                </div>
              </div>

              {/* Players & Fans */}
              <div className="w-full lg:w-1/2 px-6 xl:px-10 py-20 lg:pt-[145px] xl:pt-[145px] lg:pb-24 xl:pb-24 bg-black text-white ">
                <span className="uppercase text-sm tracking-widest mb-12 lg:mb-12 xl:mb-16 block font-medium">Follow us for updates</span>
                
                <div className="max-w-screen-md mr-auto">
                  <ul className="w-full grid gap-6 xl:gap-10 grid-cols-12 mb-12 lg:mb-16 xl:mb-24">
                    <li className="block col-span-6 lg:col-span-6">
                      <a
                        href={contact.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group w-full"
                      >
                        <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 group-hover:bg-[#5865F2] group-focus:bg-[#5865F2] mr-4 flex items-center justify-center">
                          <DiscordIcon className="w-[56.5%] text-[#E6C3E6] group-hover:text-white group-focus:text-white" />
                        </span>

                        <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                          <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">Join</span>

                          <span className="inline-block ml-auto text-xs tracking-widest font-medium">/homegang</span>
                        </span>
                      </a>
                    </li>
                    <li className="block col-span-6 lg:col-span-6">
                      <a
                        href={contact.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group w-full"
                      >
                        <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 group-hover:bg-[#1DA1F2] group-focus:bg-[#1DA1F2] mr-4 flex items-center justify-center">
                          <TwitterIcon className="w-[50%] text-[#E6C3E6] group-hover:text-white group-focus:text-white" />
                        </span>

                        <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                          <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">Follow</span>

                          <span className="inline-block ml-auto text-xs tracking-widest font-medium">@homagames</span>
                        </span>
                      </a>
                    </li>

                    <li className="block col-span-6 lg:col-span-6">
                      <a
                        href={contact.tikTok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group w-full"
                      >
                        <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 group-hover:bg-white group-focus:bg-white mr-4 flex items-center justify-center">
                          <TikTokIcon className="w-[50%] text-[#E6C3E6] group-hover:text-black group-focus:text-black" />
                        </span>

                        <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                          <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">Follow</span>

                          <span className="inline-block ml-auto text-xs tracking-widest font-medium">@homagames</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:mb-[8vw] py-12 lg:py-0">
              <CarouselTikTok heading="Watch This Space, on Tik-Tok" items={community.tikToks} />
            </div>

            <div className="bg-white relative overflow-hidden">
              <div className="w-full border-b lg:border-t border-black/50">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50">
                    <div className="grid grid-cols-10">
                      <div className="col-span-9 lg:col-span-5 mb-0 lg:mb-0 py-10 lg:py-12 px-6 lg:px-12 flex flex-wrap order-2 lg:order-1">
                        <div className="w-full mb-auto">
                          <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] mb-12 lg:mb-32 uppercase max-w-[750px] ">Make The Character Yours</h2>
                        </div>
                        <div className="w-full mt-auto">
                          <div className="content mb-0 lg:mb-12 w-full lg:w-11/12 leading-[1.24] pb-12 lg:pb-0">
                            <p>We’re building an interconnected universe where you take ownership of your favorite Homa character and traverse the universe together, playing new games, stacking stats, collecting prizes and running headfirst into adventure.</p>
                            
                            <p>We call it Homagang. Get a character and step inside.</p>
                          </div>

                          {/* <ScramblePillButton href="https://homagang.xyz" label="Learn More" /> */}
                        </div>
                      </div>
                      <div className="col-span-10 lg:col-span-5 lg:col-start-6 relative overflow-hidden order-1 lg:order-2">
                        <div className="scale-[1.15] w-full h-full aspect-square">
                          <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={1} strength={-0.05}>
                            <LocalImage
                              src="/images/character-yours.jpg"
                              alt="About Test"
                              layout="fill"
                              className="w-full h-full absolute inset-0 z-0 object-cover object-center"
                            />
                          </ScrollParallax>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-black/50 hidden lg:block">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50 h-[8vw]">
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



            <div className="bg-pink/20">
              <div className="grid grid-cols-12 pt-[15vw] lg:pt-[12vw] pb-4 lg:pb-[3vw]">
                <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                  <div className="grid grid-cols-10">
                    <div className="col-span-9 lg:col-span-9 flex flex-wrap px-6 lg:px-0">
                      <h2 className="display-text tracking-tight">Our Roadmap</h2>
                    </div>
                  </div>
                </div>
              </div>
              {community.roadmap.map((e, i) => {
                return (
                  <div className="relative overflow-hidden" key={i}>
                    <div className={`w-full ${i == 0 && 'border-t'} border-b border-black/50`}>
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-10 lg:col-start-2 lg:border-l lg:border-r border-black/50">
                          <div className="grid grid-cols-10">
                            <div className="col-span-10 lg:col-span-5 mb-12 lg:mb-0 py-10 lg:py-12 px-6 lg:px-12 flex flex-wrap order-2 lg:order-1">
                              <div className="w-full mb-auto">
                                <span className="uppercase text-base tracking-widest mb-5 lg:mb-8 block font-medium">{e.date}</span>
                                <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] mb-12 lg:mb-32 uppercase">{e.heading}</h2>
                              </div>
                              <div className="w-full mt-auto">
                                <div className="w-11/12">
                                  <p className="font-bold text-xl lg:text-2xl xl:text-3xl uppercase w-full lg:w-10/12 tracking-wide mb-0 leading-[1.24]">{e.text}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-span-10 lg:col-span-5 lg:col-start-6 relative overflow-hidden order-1 lg:order-2">
                              <GridOverlay/>
                              <div className="scale-[1.1725] w-full h-full aspect-square">
                                <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={1} strength={-0.05}>
                                  <SanityImage
                                    image={e.image}
                                    alt="Roadmap"
                                    layout="fill"
                                    className="w-full h-full absolute inset-0 z-0 object-cover object-center"
                                  />
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
            </div>



            <div className="bg-orange/40 mb-[8vw] relative overflow-hidden pt-12 lg:pt-0 pb-[90vw] lg:pb-0 border-b border-black/50">
              <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={1} strength={-0.05} zIndex={0}>
                <div className="scale-[1.11] absolute inset-0 w-full h-full">
                  <LocalImage
                    src="/images/homagang-cta.jpg"
                    alt="About Test"
                    layout="fill"
                    className="w-full h-full absolute inset-0 z-0 object-cover object-center"
                  />             
                </div>   
              </ScrollParallax>

              <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={1} strength={0.05} zIndex={1}>
                <div className="absolute bottom-0 right-0 w-[85%] lg:w-[40%] max-w-[900px] mb-[-0.4vw]">
                  <LocalImage
                    src="/images/princess-large.webp"
                    alt="About Test"
                    layout="responsive"
                    width={1566}
                    height={1480}
                    className="w-full"
                  />             
                </div>   
              </ScrollParallax>

              <div className="grid grid-cols-12 py-12 lg:pt-[15vw] lg:pb-[20.5vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
                <div className="col-span-12 lg:col-span-2 relative z-10">
                  <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">About</span>
                </div>
                
                <div className="col-span-12 lg:col-span-5 z-10">
                  <h2 className="font-black text-[clamp(44px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase">HOMAGANG is a sistergang of HOMA</h2>
                  <div className="content max-w-3xl mb-8 xl:mb-12 w-full lg:w-10/12 leading-[1.24]">
                    <p>Behind Homagang is one of the world’s biggest mobile gaming engines and publishing arms. Homa is a gaming technology lab that gives game creators the tools and human expertise needed to turn their creative ideas into commercial hits. Every day more than 10m people around the world play a game built on, or published through Homa, and now Homagang let’s you escape the lab and explore a universe connected by the blockchain.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-[8vw]">
              <CarouselTeam items={team} />
            </div>
            
            {/* Hidden as content not ready... */}
            {/* <div className="mb-[8vw]">
              <div className="max-w-screen-2xl mx-auto">
                <div className="px-6 lg:px-24">
                  <AccordionList items={community.gangQAndA} />
                </div>
              </div>
            </div> */}

            <div className="bg-orange/40 relative overflow-hidden pb-[80vw] lg:pb-0 border-t border-black/50">
              <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={1} strength={-0.05} zIndex={0}>
                <div className="scale-[1.12] absolute inset-0 w-full h-full">
                  <LocalImage
                    src="/images/join-us-cta2.jpg"
                    alt="About Test"
                    layout="fill"
                    className="w-full h-full absolute inset-0 z-0 object-cover object-center"
                  />             
                </div>   
              </ScrollParallax>

              <ScrollParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.025} strength={0.05} zIndex={1}>
                <div className="absolute bottom-0 right-0 w-[55%] lg:w-[25%] max-w-[500px] mr-[15%] mb-[5%] lg:mb-[15%] lg:mr-[10%]">
                  <Image
                    src="/images/character-test-2.webp"
                    alt="About Test"
                    layout="responsive"
                    width={902}
                    height={1344}
                    className="w-full"
                  />             
                </div>   
              </ScrollParallax>

              <div className="grid grid-cols-12 py-20 lg:pt-[12vw] lg:pb-[20.5vw] px-6 xl:px-10 max-w-screen-3xl mx-auto ">
                <div className="col-span-12 lg:col-span-5 z-10">
                  <h2 className="display-text mb-8 lg:mb-12 xl:mb-20">Want to join us?</h2>

                  <ul className="w-full grid gap-6 xl:gap-10 grid-cols-12 mb-12 lg:mb-16 xl:mb-24">
                    <li className="block col-span-6 lg:col-span-5">
                      <a
                        href={contact.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group w-full"
                      >
                        <span className="w-full aspect-square rounded-[15%] bg-white/50 group-hover:bg-[#5865F2] group-focus:bg-[#5865F2] mr-4 flex items-center justify-center">
                          <DiscordIcon className="w-[56.5%] text-white group-hover:text-white group-focus:text-white" />
                        </span>

                        <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                          <span className="inline-block border border-black text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">Join</span>

                          <span className="inline-block ml-auto text-xs tracking-widest font-medium">/homagang</span>
                        </span>
                      </a>
                    </li>
                    <li className="block col-span-6 lg:col-span-5">
                      <a
                        href={contact.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group w-full"
                      >
                        <span className="w-full aspect-square rounded-[15%] bg-white/50 group-hover:bg-[#1DA1F2] group-focus:bg-[#1DA1F2] mr-4 flex items-center justify-center">
                          <TwitterIcon className="w-[50%] text-white group-hover:text-white group-focus:text-white" />
                        </span>

                        <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                          <span className="inline-block border border-black text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">Follow</span>

                          <span className="inline-block ml-auto text-xs tracking-widest font-medium">@homagames</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Footer contact={contact} />
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