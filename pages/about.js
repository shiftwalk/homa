// Tools
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { InView } from "react-intersection-observer";

// Transitions
import { fade } from "@/helpers/transitions";

// Components
import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FooterCta from "@/components/footer-cta";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import MousePosition from "@/components/mouse-position";
import DayInfo from "@/components/day-info";
import Link from "next/link";
import Image from "next/image";
import SocialScroller from "@/components/social-scroller";
import TextScrambler from "@/components/text-scrambler";
import PixelatedImage from "@/components/pixelated-image";

// Sanity
import SanityPageService from "@/services/sanityPageService";
import SanityImage from "@/components/sanity-image";
import SanityBlockContent from "@sanity/block-content-to-react";
import LocalImage from "@/components/local-image";
import { useState } from "react";
import { CarouselMobileScroller } from "@/components/carousel-mobile-scroller";
import { CarouselMobileScrollerTeam } from "@/components/carousel-mobile-scroller-team";

const query = `{
  "about": *[_type == "about"][0]{
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
    servicesList[] {
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
    scrollingImages[] {
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
    introText,
    ourCommunityHeading,
    ourCommunityStats[] {
      number,
      thing,
    },
    ourPeopleCtaHeading,
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
}`;

const pageService = new SanityPageService(query);

export default function About(initialData) {
  // Sanity Data
  const {
    data: { about, contact },
  } = pageService.getPreviewHook(initialData)();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Layout>
      <NextSeo
        title={about.seo?.metaTitle ? about.seo?.metaTitle : "About"}
        description={about.seo?.metaDesc ? about.seo?.metaDesc : null}
      />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div initial="initial" animate="enter" exit="exit" className="">
          <m.div
            variants={fade}
            className="w-full h-full min-h-screen lg:min-h-[110vh] bg-pink/30 pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden"
          >
            <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-[1.07]">
              <ScrollParallax
                enableOnTouchDevice={false}
                isAbsolutelyPositioned
                lerpEase={1}
                strength={-0.035}
              >
                <SanityImage
                  image={about.heroImage}
                  layout="fill"
                  className="w-full h-full absolute inset-0 z-0 object-cover cover-image--bottom hidden lg:block"
                />
                <SanityImage
                  image={about.mobileHeroImage}
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
              <h1 className="font-black text-[clamp(54px,_9vw,200px)] leading-[0.95] tracking-tight mb-4 uppercase relative z-10 w-11/12 t lg:w-full">
                <TextScrambler
                  text="Mobile gaming’s major players"
                  seed={25}
                  step={2}
                />
              </h1>
            </div>
          </m.div>

          <m.div
            variants={fade}
            className="bg-gradient-to-b from-pink/20 to-pink relative overflow-hidden"
          >
            <div className="w-full border-b border-black/50">
              <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-20 pb-[95vw] md:py-[15vw] md:px-10 relative overflow-hidden md:overflow-visible">
                  <div className="grid grid-cols-10 items-center relative">
                    <div className="col-span-9 md:col-span-5 mb-12 md:mb-0 relative z-10 content text-2xl md:text-2xl lg:text-2xl xl:text-2xl uppercase font-bold content--nolead">
                      <SanityBlockContent
                        serializers={{
                          container: ({ children }) => children,
                        }}
                        blocks={about.introText}
                      />
                    </div>

                    <MouseParallax
                      enableOnTouchDevice={false}
                      isAbsolutelyPositioned
                      lerpEase={0.15}
                      strength={0.015}
                    >
                      <ScrollParallax
                        enableOnTouchDevice={false}
                        isAbsolutelyPositioned
                        lerpEase={0.015}
                        zIndex={0}
                      >
                        <div className="absolute bottom-[-100vw] right-[12vw] left-auto lg:right-[0vw] md:bottom-[-10vw] lg:bottom-[-18vw] md:right-[-10vw] w-[70%] md:w-[40%] lg:w-[35%] z-0 max-w-[450px]">
                          {/* <Image
                            src="/images/character-test.webp"
                            alt="Character Test"
                            layout="responsive"
                            width={930}
                            height={1236}
                          /> */}

                          <LocalImage
                            src={"/images/skull-new.webp"}
                            width={727}
                            height={1184}
                          />
                        </div>
                      </ScrollParallax>
                    </MouseParallax>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-b border-black/50 relative">
              <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                <div className="col-span-10 col-start-2 md:col-span-12 md:col-start-0 pt-20 lg:pt-[10vw] pb-20 lg:pb-[5vw] md:px-10">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12">
                      <p className="tracking-widest lg:tracking-tight block font-medium text-sm lg:text-2xl uppercase lg:font-bold mb-3 lg:mb-12">
                        Our Community
                      </p>

                      <h2 className="font-bold lg:font-black text-[clamp(18px,_4.45vw,_86px)] leading-[1.1] lg:leading-[0.9] mb-12 lg:mb-32 uppercase">
                        {about.ourCommunityHeading}
                      </h2>

                      <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8">
                        {about.ourCommunityStats.map((e, i) => {
                          return (
                            <div
                              className={`w-full lg:w-1/3 p-5 lg:p-6 xl:p-8 2xl:p-10 ${
                                i + 1 !== about.ourCommunityStats.length
                                  ? "border-b lg:border-b-0 border-black/50 lg:border-r"
                                  : ""
                              }`}
                              key={i}
                            >
                              <h3 className="font-black text-[clamp(100px,_9vw,_200px)] leading-[0.95] mb-4 uppercase w-11/12">
                                {e.number}
                              </h3>

                              <div className="content w-11/12 mb-16 lg:mb-48">
                                <p className="uppercase font-bold">{e.thing}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          <m.div
            variants={fade}
            className="w-full py-24 lg:py-[18vw] xl:py-[15vw] relative overflow-hidden mb-0 px-6 lg:px-10"
          >
            <div className="w-full h-full absolute inset-0 z-0 object-cover object-center scale-[1.1] bg-orange/20">
              <ScrollParallax
                enableOnTouchDevice={false}
                isAbsolutelyPositioned
                lerpEase={1}
                strength={-0.035}
                zIndex={0}
              >
                <LocalImage
                  src="/images/who-we-are.jpg"
                  alt="Who We Are Landscape"
                  layout="fill"
                  quality={75}
                  className="w-full h-full absolute inset-0 z-0 object-cover object-center"
                />
              </ScrollParallax>
            </div>

            <div className="md:max-w-screen-md xl:max-w-screen-lg mx-auto text-center relative z-10">
              <span className="text-lg lg:text-2xl uppercase font-bold mb-8 lg:mb-12 block">
                Our People
              </span>
              <h2 className="font-black text-[clamp(38px,_5.5vw,120px)] leading-[0.95] uppercase text-center relative z-10 w-full mb-8 lg:mb-12 tracking-tight">
                {about.ourPeopleCtaHeading}
              </h2>

              <Link href="/careers">
                <a class="roll-btn w-auto inline-block">
                  <span class="roll-btn__front">Apply for a Job at Homa</span>
                  <span class="roll-btn__back">Apply for a Job at Homa</span>
                </a>
              </Link>
            </div>
          </m.div>

          <m.div variants={fade} className="w-full flex-wrap hidden lg:flex">
            <div className="w-full lg:w-1/2 bg-gray-100 border-b lg:border-b-0 lg:border-r border-black/50">
              <div className="lg:sticky lg:top-0 relative overflow-hidden">
                <div className="flex w-full min-h-screen">
                  <div className="w-full min-h-screen">
                    {about.servicesList.map((e, i) => {
                      return (
                        <div
                          className={`${
                            currentIndex == i ? "opacity-100" : "opacity-0"
                          } w-full transition-opacity min-h-screen ease-in-out duration-300 ${
                            i == 0 ? "relative" : "absolute inset-0"
                          }`}
                        >
                          <SanityImage
                            key={i}
                            image={e.image}
                            layout="fill"
                            width={e.image.asset.metadata.width}
                            height={e.image.asset.metadata.height}
                            className="inset-0 absolute w-full h-full object-cover object-center"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 pb-12 lg:pb-16 xl:pb-24 border-t border-black/50">
              {about.servicesList.map((e, i) => {
                return (
                  <InView
                    threshold={1}
                    as="div"
                    onChange={(inView, entry) => inView && setCurrentIndex(i)}
                  >
                    <div
                      className={`w-full ${
                        i + 1 != about.servicesList.length &&
                        "border-b border-black/50"
                      } px-6 xl:px-10 py-6 xl:py-10 flex flex-wrap lg:pb-[20vw] xl:pb-[20vw]`}
                    >
                      <div className="w-auto mr-12">
                        <span className="uppercase text-sm tracking-widest mt-1 block font-medium">
                          0{i + 1}
                        </span>
                      </div>
                      <div className="w-3/4">
                        <h3 className="font-black text-3xl lg:text-4xl xl:text-5xl leading-[0.95] mb-12 lg:mb-24 uppercase max-w-[500px] xl:max-w-none">
                          {e.heading}
                        </h3>

                        <div className="content w-11/12 lg:w-11/12 max-w-[650px]">
                          <p>{e.text}</p>
                        </div>
                      </div>
                    </div>
                  </InView>
                );
              })}
            </div>
          </m.div>

          <m.div
            variants={fade}
            className="w-full block lg:hidden pb-16 lg:pb-0"
          >
            <CarouselMobileScrollerTeam items={about.servicesList} />
          </m.div>

          <m.div variants={fade}>
            <div
              className={`bg-lime text-black border-t border-black/50 z-0 lg:sticky lg:top-0 pt-10 pb-20 lg:pt-0 lg:pb-0`}
            >
              <div className="grid grid-cols-12 h-screen px-6 xl:px-10 max-w-screen-3xl mx-auto items-center">
                <div className="col-span-12 order-2 lg:order-1 lg:col-span-6 z-10">
                  <span className="uppercase text-xs lg:text-sm tracking-widest mb-2 lg:mb-8 block font-medium">
                    We Value:
                  </span>
                  <h2 className="display-text mb-12 lg:mb-12 xl:mb-16">
                    Ambition
                  </h2>
                  <span className="uppercase text-lg lg:text-2xl xl:text-3xl tracking-tight mb-4 lg:mb-5 block font-bold leading-none lg:leading-none xl:leading-none">
                    We put flags on summits
                  </span>
                  <div className="content content--lg max-w-3xl mb-8 xl:mb-12 w-full lg:w-10/12 leading-[1.24]">
                    <p>
                      We set our goals ambitiously high and don’t shy away from
                      the climb. We’re on a mission to take over an industry
                      thick with incumbents who won’t go quietly into the night.
                      To succeed here, you’ll need a highly metaphorical shield
                      and a sword.
                    </p>
                  </div>
                </div>

                <div className="col-span-12 order-1 lg:order-2 lg:col-span-6 z-10 h-full">
                  <div className="h-full flex items-center justify-center relative">
                    <video
                      loop={true}
                      autoPlay="autoplay"
                      playsInline={true}
                      muted
                      className={`w-full translate-y-[-1%]`}
                    >
                      <source
                        src={"/videos/flagpole.mov"}
                        type="video/quicktime"
                      />
                      <source src={"/videos/flagpole.webm"} type="video/webm" />
                      Sorry. Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-lime text-black border-t border-black/50 z-0 lg:sticky lg:top-0 pt-10 pb-20 lg:pt-0 lg:pb-0`}
            >
              <div className="grid grid-cols-12 h-screen px-6 xl:px-10 max-w-screen-3xl mx-auto items-center">
                <div className="col-span-12 order-2 lg:order-1 lg:col-span-6 z-10">
                  <span className="uppercase text-xs lg:text-sm tracking-widest mb-2 lg:mb-8 block font-medium">
                    We Value:
                  </span>
                  <h2 className="display-text mb-12 lg:mb-12 xl:mb-16">
                    Humility
                  </h2>
                  <span className="uppercase text-lg lg:text-2xl xl:text-3xl tracking-tight mb-4 lg:mb-5 block font-bold leading-none lg:leading-none xl:leading-none">
                    We put our egos aside
                  </span>
                  <div className="content content--lg max-w-3xl mb-8 xl:mb-12 w-full lg:w-10/12 leading-[1.24]">
                    <p>
                      We put our hands up. First to volunteer to help, second to
                      high-five. Having an ego is natural, but letting it run
                      the show is unhelpful to everyone. In the words of Mr.
                      Lamar: Sit down. Be humble.
                    </p>
                  </div>
                </div>

                <div className="col-span-12 order-1 lg:order-2 lg:col-span-6 z-10 h-full">
                  <div className="h-full flex items-center justify-center">
                    <video
                      loop={true}
                      autoPlay="autoplay"
                      playsInline={true}
                      muted
                      className={`w-full translate-y-[-1%]`}
                    >
                      <source
                        src={"/videos/hands.mov"}
                        type="video/quicktime"
                      />
                      <source src={"/videos/hands.webm"} type="video/webm" />
                      Sorry. Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-lime text-black border-t border-black/50 relative pt-0 pb-20 lg:pt-0 lg:pb-0 z-10`}
            >
              <div className="grid grid-cols-12 h-screen px-6 xl:px-10 max-w-screen-3xl mx-auto items-center">
                <div className="col-span-12 order-2 lg:order-1 lg:col-span-6 z-10">
                  <span className="uppercase text-xs lg:text-sm tracking-widest mb-2 lg:mb-8 block font-medium">
                    We Value:
                  </span>
                  <h2 className="display-text mb-12 lg:mb-12 xl:mb-16">
                    Curiosity
                  </h2>
                  <span className="uppercase text-lg lg:text-2xl xl:text-3xl tracking-tight mb-4 lg:mb-5 block font-bold leading-none lg:leading-none xl:leading-none">
                    We keep our eyes open
                  </span>
                  <div className="content content--lg max-w-3xl mb-8 xl:mb-12 w-full lg:w-10/12 leading-[1.24]">
                    <p>
                      We believe the best way to know anything is to question
                      everything. And to do that, you need open eyes and open
                      minds at all times.
                    </p>
                  </div>
                </div>

                <div className="col-span-12 order-1 lg:order-2 lg:col-span-6 z-10 h-full">
                  <div className="h-full flex items-center justify-center">
                    <video
                      loop={true}
                      autoPlay="autoplay"
                      playsInline={true}
                      muted
                      className={`w-full translate-y-[-1%]`}
                    >
                      <source src={"/videos/eye.mov"} type="video/quicktime" />
                      <source src={"/videos/eye.webm"} type="video/webm" />
                      Sorry. Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          <m.div className="bg-white relative z-10">
            {/* DISABLED DUE TO MISSING CONTENT */}
            {/* <Marquee speed={130} gradient={false}>
              {about.scrollingImages.map((e, i) => {
                return (
                  <span
                    className="inline-block w-[60%] md:w-[40%] xl:w-[30%] h-[60vw] md:h-[40vw] xl:h-[30vw] aspect-square relative overflow-hidden"
                    key={i}
                  >
                    <SanityImage
                      key={i}
                      image={e}
                      layout="fill"
                      className="block w-full h-full inset-0 scale-[1.02]"
                    />
                  </span>
                );
              })}
            </Marquee> */}

            <SocialScroller contact={contact} />
            <FooterCta image={"/images/about-footer.jpg"} />
            <Footer contact={contact} />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

// Sanity CMS Props
export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context);

  return cms;
}
