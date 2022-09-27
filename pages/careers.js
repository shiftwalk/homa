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
import Image from 'next/image'
import { ScrollParallax } from 'react-just-parallax'
import DayInfo from '@/components/day-info'
import MousePosition from '@/components/mouse-position'
import TextScrambler from '@/components/text-scrambler'

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

export default function Careers(initalData) {
  // Sanity Data
  // const { data: { about } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo title="Careers" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.div variants={fade}>
            <div className="w-full bg-gradient-to-b from-pink to-pink/30 pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>
              
              <div className="max-w-screen-3xl mx-auto px-6 xl:px-10 mb-[15vw]">
                <h1 className="font-black text-[clamp(80px,_9vw,190px)] leading-[0.95] mb-4 uppercase relative z-10 w-11/12 lg:w-full">
                  <span className="block mb-8 lg:mb-12">
                    <TextScrambler text="Brains over backgrounds." seed={22} step={2} />
                  </span>
                  <span className="block mb-8 lg:mb-12">
                    <TextScrambler text="Results over CVs." seed={16} step={2} />
                  </span>
                  <span className="block mb-8 lg:mb-12">
                    <TextScrambler text="Determination over degrees." seed={25} step={2} />
                  </span>
                </h1>
              </div>

              <div className="w-full border-t border-b border-black/50">
                <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                  <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[10vw] md:px-10">
                    <div className="grid grid-cols-10 items-center">
                      <div className="col-span-9 md:col-span-5 mb-12 md:mb-0">

                        <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">Work With Us</span>

                        <p className="text-xl lg:text-2xl xl:text-3xl uppercase font-bold">We’re building a modern workplace with a remote-friendly way of working. We ask for a lot, but in return we give a lot – like the flexibility to fit work around your life, and the ability to do work you’re proud of.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full border-b border-black/50 pb-56 md:pb-0">
                <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                  <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[5vw] md:px-10">
                    <div className="grid grid-cols-12 pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <p className="text-2xl uppercase font-bold">[Icon]</p>
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="block font-black text-[clamp(50px,_5vw,_86px)] leading-[0.95] mb-8 lg:mb-12 uppercase max-w-[550px]">Trust from day one</span>

                        <div className="content max-w-[550px]">
                          <p>Take a long lunch. Go to the dentist. Book a spin class. We’ll trust you to get the job done.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <p className="text-2xl uppercase font-bold">[Icon]</p>
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="block font-black text-[clamp(50px,_5vw,_86px)] leading-[0.95] mb-8 lg:mb-12 uppercase max-w-[550px]">Continuous learning</span>

                        <div className="content max-w-[550px]">
                          <p>Knowledge shares, Learning Days and a full-on learning platform mean you’ll gain experience and knowledge here.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <p className="text-2xl uppercase font-bold">[Icon]</p>
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="block font-black text-[clamp(50px,_5vw,_86px)] leading-[0.95] mb-8 lg:mb-12 uppercase max-w-[550px]">Competitive Cash</span>

                        <div className="content max-w-[550px]">
                          <p>We’re looking for people who care about our mission as much as we do – and we know care doesn’t come cheap.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

// Sanity CMS Props
// export async function getStaticProps(context) {
//   const cms = await pageService.fetchQuery(context)

//   return {
//     props: { ...cms }
//   }
// }