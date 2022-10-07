// Tools
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { useScrollPercentage } from "react-scroll-percentage";

// Transitions
import { fade } from "@/helpers/transitions";

// Components
import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FooterCta from "@/components/footer-cta";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import MousePosition from "@/components/mouse-position";
import DayInfo from "@/components/day-info";
import Image from "next/image";
import PixelatedImage from "@/components/pixelated-image";
import TextScrambler from "@/components/text-scrambler";
import { CarouselGames } from "@/components/carousel-games";
import { CarouselCards } from "@/components/carousel-cards";

import { useEffect, useRef } from "react";
import Experience from "@/helpers/webgl/Experience";

// Sanity
import SanityPageService from "@/services/sanityPageService";
import ScramblePillButton from "@/components/scramble-pill-button";
import LocalImage from "@/components/local-image";

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

export default function Games(initialData) {
  const target1 = useRef(null);

  useEffect(() => {
    const experience = new Experience();
    experience.clearPage();
    experience.world.addScene(
      "/models/faces.glb",
      target1.current,
      0.03,
      0.001,
      "#FFF",
      0.5
    );
  });

  // Sanity Data
  const {
    data: { games, successStories, gamesLanding, contact },
  } = pageService.getPreviewHook(initialData)();

  const [marqueeRef, percentage] = useScrollPercentage({
    threshold: 0,
  });

  return (
    <Layout>
      <NextSeo
        title={
          gamesLanding.seo?.metaTitle ? gamesLanding.seo?.metaTitle : "Games"
        }
        description={
          gamesLanding.seo?.metaDesc ? gamesLanding.seo?.metaDesc : null
        }
        openGraph={{
          title: gamesLanding.seo?.metaTitle
            ? gamesLanding.seo?.metaTitle
            : gamesLanding.title,
          description: gamesLanding.seo?.metaDesc
            ? gamesLanding.seo?.metaDesc
            : null,
          images:
            gamesLanding.seo?.shareGraphic?.asset[
              {
                url: gamesLanding.seo?.shareGraphic?.asset.url
                  ? gamesLanding.seo?.shareGraphic?.asset.url
                  : null,
                width: gamesLanding.seo?.shareGraphic?.asset.metadata.dimensions
                  .width
                  ? gamesLanding.seo?.shareGraphic?.asset.metadata.dimensions
                      .width
                  : null,
                height: gamesLanding.seo?.shareGraphic?.asset.metadata
                  .dimensions.height
                  ? gamesLanding.seo?.shareGraphic?.asset.metadata.dimensions
                      .height
                  : null,
                type: "image/jpeg",
              }
            ],
        }}
      />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div initial="initial" animate="enter" exit="exit">
          <m.div variants={fade}>
            <div className="w-full md:min-h-screen bg-gradient-to-t from-pink/20 to-pink pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden mb-[8vw] pb-[260px] lg:pb-0">
              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>

              <div className="max-w-screen-3xl mx-auto">
                <h1 className="font-black text-[clamp(54px,_9vw,190px)] leading-[0.95] tracking-tight mb-4 uppercase relative z-10 w-full lg:w-full">
                  <TextScrambler
                    text="Win with the ease of cheating"
                    seed={15}
                    step={2}
                  />
                </h1>

                <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%] max-w-[600px] pt-[5%] lg:pt-[10%] relative pb-8 lg:pb-0">
                  <div className="relative z-10">
                    <p className="text-base md:text-xl xl:text-2xl mb-12 lg:mb-16 leading-[1.25] xl:leading-[1.23]">
                      {gamesLanding.heroIntroText}
                    </p>

                    <a
                      href="https://lab-v2.homagames.com/login"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="roll-btn block lg:inline-block mb-6 lg:mb-10"
                    >
                      <span className="roll-btn__front">Submit your game</span>
                      <span className="roll-btn__back">Submit your game</span>
                    </a>
                  </div>
                </div>

                <ScrollParallax
                  enableOnTouchDevice={false}
                  isAbsolutelyPositioned
                  lerpEase={0.15}
                >
                  <div className="absolute bottom-[-25%] right-[30%] md:right-[35%] lg:right-[18%] z-0 w-[50%] lg:w-[17%] xl:w-[14%] max-w-[130px] md:max-w-[180px] lg:max-w-[180px] xl:max-w-[260px]">
                    {/* <Image
                      src="/images/horse.webp"
                      alt="Bee"
                      layout="responsive"
                      width={864}
                      height={865}
                      className="w-full"
                    /> */}
                    <LocalImage
                      src={"/images/farmer-new.webp"}
                      width={325}
                      height={1260}
                    />
                  </div>
                </ScrollParallax>
              </div>
            </div>

            <div className="mt-24 lg:mt-0 mb-[8vw]">
              <CarouselGames heading="Greatest Hits To Date" items={games} />
            </div>

            <Container>
              <div className="flex flex-wrap pt-0 pb-20 lg:pt-[10vw] lg:pb-[5vw] xl:pb-0 overflow-hidden">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <h2 className="font-black text-[clamp(44px,_4.17vw,_80px)] leading-[0.95] mb-8 lg:mb-[5vw] uppercase w-11/12 break-words">
                    From Customers
                    <br />
                    to partners
                  </h2>

                  <div className="w-full lg:w-10/12 content mb-8 lg:mb-12 max-w-[720px]">
                    <p>{gamesLanding.fromCustomersToCollaboratorsText}</p>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-start translate-y-[0%] lg:translate-y-[-25%] lg:scale-[1.1] lg:mt-0">
                  <video
                    loop={true}
                    autoPlay="autoplay"
                    playsInline={true}
                    muted
                    className={`w-full`}
                  >
                    <source src={"/videos/faces.mp4"} type="video/mp4" />
                    <source src={"/videos/faces.webm"} type="video/webm" />
                    Sorry. Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </Container>

            <CarouselCards heading="Our Partners" items={successStories} />

            <div className="hidden lg:block relative border-b border-black/50 py-[25vw] overflow-hidden">
              <MouseParallax
                isAbsolutelyPositioned
                lerpEase={0.15}
                strength={-0.05}
                zIndex={10}
              >
                <ScrollParallax
                  enableOnTouchDevice={false}
                  isAbsolutelyPositioned
                  lerpEase={0.15}
                  strength={-0.14}
                  zIndex={10}
                >
                  <div className="absolute bottom-[25%] right-[48%] z-0 w-full max-w-[100px] lg:max-w-[180px]">
                    {/* <Image
                      src="/images/bee.webp"
                      alt="Bee"
                      layout="responsive"
                      width={398}
                      height={548}
                      className="w-full"
                    /> */}
                    <LocalImage
                      src={"/images/bee.webp"}
                      width={398}
                      height={548}
                    />
                  </div>
                </ScrollParallax>
              </MouseParallax>

              <MouseParallax
                isAbsolutelyPositioned
                lerpEase={0.15}
                strength={-0.05}
                zIndex={0}
              >
                <ScrollParallax
                  enableOnTouchDevice={false}
                  isAbsolutelyPositioned
                  lerpEase={0.15}
                  strength={-0.23}
                  zIndex={0}
                >
                  <div className="absolute top-[40%] left-[12%] z-0 w-full max-w-[55px] lg:max-w-[95px] -scale-x-100 rotate-[15deg]">
                    {/* <Image
                      src="/images/bee.webp"
                      alt="Bee"
                      layout="responsive"
                      width={398}
                      height={548}
                      className="w-full"
                    /> */}
                    <LocalImage
                      src={"/images/bee.webp"}
                      width={398}
                      height={548}
                    />
                  </div>
                </ScrollParallax>
              </MouseParallax>

              <MouseParallax
                isAbsolutelyPositioned
                lerpEase={0.15}
                strength={0.05}
                zIndex={10}
              >
                <ScrollParallax
                  enableOnTouchDevice={false}
                  isAbsolutelyPositioned
                  lerpEase={0.15}
                  strength={0.1}
                  zIndex={10}
                >
                  <div className="absolute top-[35%] right-[8%] z-0 w-full max-w-[65px] lg:max-w-[140px] rotate-[-14deg]">
                    {/* <Image
                      src="/images/bee.webp"
                      alt="Bee"
                      layout="responsive"
                      width={398}
                      height={548}
                      className="w-full"
                    /> */}
                    <LocalImage
                      src={"/images/bee.webp"}
                      width={398}
                      height={548}
                    />
                  </div>
                </ScrollParallax>
              </MouseParallax>

              <div
                className="relative z-0 flex overflow-hidden whitespace-nowrap"
                ref={marqueeRef}
              >
                <div
                  className="whitespace-nowrap transition-transform ease-out duration-300"
                  style={{
                    transform: `translateX(-${
                      percentage.toPrecision(100) * 25
                    }%)`,
                  }}
                >
                  <span className="mx-[5vw] lg:mx-[6vw] text-[clamp(80px,_11.2vw,_250px)] font-black uppercase leading-none">
                    All Killer, No Filler
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-lime text-black mt-20 lg:mt-0 border-black/50 border-t lg:border-t-0">
              <div className="grid grid-cols-12 py-20 lg:py-[10vw] lg:px-6 xl:px-24 max-w-screen-3xl mx-auto">
                <div className="col-span-12 z-10">
                  <h2 className="font-black text-[clamp(55px,_4.45vw,_86px)] leading-[0.95] mb-2 lg:mb-16 uppercase w-[85%] lg:w-[50%] max-w-[800px] px-6 lg:px-0">
                    How we get your game in lights
                  </h2>

                  <div className="w-full flex flex-wrap lg:border border-black/50 mb-6 lg:mb-8">
                    <div className="w-full lg:w-1/2 xl:w-1/4 border-b xl:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <video
                        loop={true}
                        autoPlay="autoplay"
                        playsInline={true}
                        muted
                        className={`w-full`}
                      >
                        <source
                          src={"/videos/chess.mov"}
                          type="video/quicktime"
                        />
                        <source src={"/videos/chess.webm"} type="video/webm" />
                        Sorry. Your browser does not support the video tag.
                      </video>

                      <h3 className="font-black tracking-tight text-xl lg:text-2xl xl:text-2xl leading-[0.95] mb-5 lg:mb-8 uppercase">
                        Test your idea
                      </h3>

                      <div className="content content--small w-full lg:w-11/12 pb-2 lg:pb-0 leading-[1.2]">
                        <p>
                          There’s no reward in building a game no one will
                          download or play. With Homa, you’ll have access to all
                          the latest trends, niches and statistics you need to
                          make sure you’re building games billions will play.
                        </p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 xl:w-1/4 border-b xl:border-b-0 xl:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <video
                        loop={true}
                        autoPlay="autoplay"
                        playsInline={true}
                        muted
                        className={`w-full`}
                      >
                        <source
                          src={"/videos/cog.mov"}
                          type="video/quicktime"
                        />
                        <source src={"/videos/cog.webm"} type="video/webm" />
                        Sorry. Your browser does not support the video tag.
                      </video>

                      <h3 className="font-black tracking-tight text-xl lg:text-2xl xl:text-2xl leading-[0.95] mb-5 lg:mb-8 uppercase">
                        Send a prototype
                      </h3>

                      <div className="content content--small w-full lg:w-11/12 pb-2 lg:pb-0 leading-[1.2]">
                        <p>
                          Send a prototype our way and one of our Publishing
                          Managers will be in touch to talk about how we can
                          help, one-to-one.
                        </p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 xl:w-1/4 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <video
                        loop={true}
                        autoPlay="autoplay"
                        playsInline={true}
                        muted
                        className={`w-full`}
                      >
                        <source
                          src={"/videos/brick.mov"}
                          type="video/quicktime"
                        />
                        <source src={"/videos/brick.webm"} type="video/webm" />
                        Sorry. Your browser does not support the video tag.
                      </video>

                      <h3 className="font-black tracking-tight text-xl lg:text-2xl xl:text-2xl leading-[0.95] mb-5 lg:mb-8 uppercase">
                        Build a game
                      </h3>

                      <div className="content content--small w-full lg:w-11/12 pb-2 lg:pb-0 leading-[1.2]">
                        <p>
                          With our SDK you can start iterating immediately to
                          perfect your game by every metric, from cost of
                          acquisition to retention to session times. You’ll also
                          get hot-off-the-press insights from our Market
                          Intelligence team.
                        </p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 xl:w-1/4 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <video
                        loop={true}
                        autoPlay="autoplay"
                        playsInline={true}
                        muted
                        className={`w-full`}
                      >
                        <source
                          src={"/videos/rocket.mov"}
                          type="video/quicktime"
                        />
                        <source src={"/videos/rocket.webm"} type="video/webm" />
                        Sorry. Your browser does not support the video tag.
                      </video>

                      <h3 className="font-black tracking-tight text-xl lg:text-2xl xl:text-2xl leading-[0.95] mb-5 lg:mb-8 uppercase">
                        Launch a hit
                      </h3>

                      <div className="content content--small w-full lg:w-11/12 pb-2 lg:pb-0 leading-[1.2]">
                        <p>
                          Once everything is running smoothly, we’ll push it out
                          into the world using the right channels at the right
                          time to maximize impact and land at the top of the
                          charts, where the real money is.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 lg:px-0 lg:w-1/2 xl:w-1/4">
                    <a
                      href="https://lab-v2.homagames.com/login"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="roll-btn inline-block w-full"
                    >
                      <span className="roll-btn__front">Submit your game</span>
                      <span className="roll-btn__back">Submit your game</span>
                    </a>
                  </div>
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

              <div className="grid grid-cols-12 py-20 pb-20 lg:py-[10vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
                <div className="col-span-12 lg:col-span-2 relative z-10">
                  <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">
                    Our Team
                  </span>
                </div>

                <div className="col-span-12 lg:col-span-7 z-10 relative">
                  <h2 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase w-9/12 lg:w-full">
                    People you'll meet along the way.
                  </h2>
                  <div className="content max-w-[720px] mb-8 xl:mb-12 w-full lg:w-9/12 leading-[1.25]">
                    <p>{gamesLanding.peopleYoullMeetText}</p>
                  </div>

                  <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8 max-w-[650px] bg-white relative z-10">
                    {gamesLanding.peopleYoullMeet.map((e, i) => {
                      return (
                        <div
                          className={`w-full border-black/50 p-5 pb-8 lg:p-6 xl:p-8 2xl:p-10 ${
                            i + 1 == gamesLanding.peopleYoullMeet.length
                              ? ""
                              : "border-b"
                          }`}
                          key={i}
                        >
                          <h3 className="font-bold text-xl lg:text-2xl xl:text-3xl leading-[0.95] mb-4 lg:mb-6 uppercase">
                            {e.heading}
                          </h3>

                          <div className="content content--small w-11/12 lg:w-11/12 leading-[1.25]">
                            <p>{e.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href="https://lab-v2.homagames.com/login"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="roll-btn block lg:inline-block"
                  >
                    <span className="roll-btn__front">Submit your game</span>
                    <span className="roll-btn__back">Submit your game</span>
                  </a>
                </div>

                <div className="col-span-12 lg:col-span-3 relative hidden xl:block self-center">
                  <video
                    loop={true}
                    autoPlay="autoplay"
                    playsInline={true}
                    muted
                    className={`w-full scale-[1.4] xl:scale-[1.5] translate-x-[-25%] xl:translate-x-[-30%] xl:translate-y-[20%]`}
                  >
                    <source src={"/videos/chess.mp4"} type="video/mp4" />
                    <source src={"/videos/chess.webm"} type="video/webm" />
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
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 p-6 md:p-10 xl:p-16">
                      <h2 className="font-black text-[clamp(38px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-[10vw] uppercase">
                        Build a brand, then make a game out of it.
                      </h2>

                      <div className="w-full lg:w-11/12 content mb-8 lg:mb-12 leading-[1.25]">
                        <p>{gamesLanding.buildABrandCtaText}</p>
                      </div>

                      <ScramblePillButton
                        href="/community"
                        label="Learn More"
                        internal
                      />
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2 lg:border-l border-black/50 bg-gray-200 overflow-hidden relative">
                      <div className="scale-[1.125] w-full h-full aspect-square">
                        <ScrollParallax
                          enableOnTouchDevice={false}
                          isAbsolutelyPositioned
                          lerpEase={1}
                          strength={-0.05}
                        >
                          <LocalImage
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
              <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4 border-black/50 border-l border-r bg-white bg-gradient-to-b from-pink/20 to-pink p-6 md:p-10 xl:p-16 text-center aspect-square flex flex-wrap">
                <span className="block font-black uppercase text-lg md:text-3xl xl:text-4xl mb-auto w-full leading-[1.25] lg:leading-[1.25] xl:leading-[1.25] pb-12 lg:pb-0">
                  One hit is good, Multiple is the goal.
                </span>

                <div className="w-full lg:w-8/12 mx-auto max-w-md mb-20 md:mb-[15vw] xl:mb-[12.5vw] text-base md:text-xl xl:text-2xl my-auto leading-[1.22]">
                  <p>
                    There’s no secret to success, just a winning formula. So why
                    stop at one?
                  </p>
                </div>

                <div className="mt-auto w-full">
                  <ScramblePillButton
                    href="/homa-lab"
                    label="Learn More"
                    internal
                  />
                </div>
              </div>
            </FooterCta>

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
