// Tools
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { fade } from "@/helpers/transitions";

// Components
import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FooterCta from "@/components/footer-cta";
import MousePosition from "@/components/mouse-position";
import DayInfo from "@/components/day-info";
import Image from "next/image";
import Link from "next/link";
import SocialScroller from "@/components/social-scroller";
import { useRef } from "react";
import PixelatedImage from "@/components/pixelated-image";
import { CarouselBlog } from "@/components/carousel-blog";

// Sanity
import SanityPageService from "@/services/sanityPageService";
import TestWebgl from "@/components/webgl";

const query = `{
  "blog": *[_type == "blog"][0...5]{
    title,
    slug {
      current
    },
    category-> {
      title,
      slug {
        current
      }
    },
    publishDate
  }
}`;

const pageService = new SanityPageService(query);

export default function Home(initialData) {
  const characterBinder = useRef(null);

  // Sanity Data
  const {
    data: { blog },
  } = pageService.getPreviewHook(initialData)();

  return (
    <Layout>
      <NextSeo title="Home" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.main initial="initial" animate="enter" exit="exit" className="">
          <m.div
            variants={fade}
            className="w-full h-full min-h-screen lg:min-h-[125vh] bg-pink/30 pt-24 lg:pt-40 xl:pt-52 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden"
          >
            <div className="w-full h-full absolute inset-0 z-0 object-cover object-top scale-y-[1.07] -scale-x-100">
              <ScrollParallax
                isAbsolutelyPositioned
                lerpEase={1}
                strength={-0.036}
              >
                <Image
                  src="/images/home.jpg"
                  alt="Character Test"
                  layout="fill"
                  className="w-full h-full absolute inset-0 z-0 object-cover object-top"
                />
              </ScrollParallax>
            </div>

            <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
              <DayInfo className="mb-1" />
              <MousePosition />
            </div>

            <div className="max-w-screen-3xl mx-auto" ref={characterBinder}>
              <h1 className="font-black text-[clamp(80px,_10.2vw,_210px)] leading-[0.95] mb-4 uppercase relative z-10 w-11/12 lg:w-full">
                Game The System
              </h1>

              <div className="w-10/12 lg:w-[50%] xl:w-[45%] 2xl:w-[35%] max-w-[720px] pt-[75%] lg:pt-[10%] relative pb-8 lg:pb-0">
                <div className="relative z-10">
                  <p className="text-lg md:text-xl xl:text-2xl mb-6 lg:mb-10">
                    We're believers in data and builders of tools that help game
                    creators{" "}
                    <span className="inline border border-black rounded-sm p-1 px-2 uppercase tracking-wider text-sm md:text-base xl:text-lg font-medium">
                      make
                    </span>{" "}
                    and{" "}
                    <span className="inline border border-black rounded-sm p-1 px-2 uppercase tracking-wider text-sm md:text-base xl:text-lg font-medium">
                      publish
                    </span>{" "}
                    hit games with franchise potential built right in.
                  </p>

                  <div className="flex space-x-2">
                    <Link href="/">
                      <a className="bg-black text-white px-3 py-6 uppercase tracking-wide w-1/2 text-center">
                        Make a Game
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="bg-black text-white px-3 py-6 uppercase tracking-wide w-1/2 text-center">
                        Build A Career
                      </a>
                    </Link>
                  </div>
                </div>
                <MouseParallax
                  isAbsolutelyPositioned
                  lerpEase={0.15}
                  strength={0.025}
                >
                  <ScrollParallax isAbsolutelyPositioned lerpEase={0.15}>
                    <div className="absolute top-[-15vw] lg:top-auto lg:bottom-[-80%] right-[-10vw] lg:right-[-55%] xl:right-[-70%] w-[55vw] lg:w-[28vw] 2xl:w-[30vw] max-w-[500px] z-0">
                      {/* <Image
                        src="/images/character-test.webp"
                        alt="Character Test"
                        layout="responsive"
                        width={930}
                        height={1236}
                      /> */}

                      <PixelatedImage
                        image={"/images/character-test.webp"}
                        width={"930"}
                        height={1236}
                      />
                    </div>
                  </ScrollParallax>
                </MouseParallax>
              </div>
            </div>
          </m.div>

          <m.div variants={fade}>
            <div className="bg-gradient-to-b from-pink/20 to-pink relative overflow-hidden">
              <ScrollParallax
                isAbsolutelyPositioned
                lerpEase={0.15}
                strength={0.025}
                zIndex={0}
              >
                <div className="absolute bottom-0 right-[3%] z-0 w-[57%] lg:w-[30%] max-w-[320px] lg:max-w-[400px] xl:max-w-[480px]">
                  {/* <Image
                    src="/images/horse.webp"
                    alt="Bee"
                    layout="responsive"
                    width={864}
                    height={865}
                    className="w-full"
                  /> */}
                  <PixelatedImage
                    image={"/images/horse.webp"}
                    width={865}
                    height={865}
                  />
                </div>
              </ScrollParallax>

              <div className="w-full border-b border-black/50">
                <div className="grid grid-cols-12 max-w-screen-3xl mx-auto">
                  <div className="col-span-10 col-start-2 md:col-span-10 md:col-start-2 md:border-l md:border-r border-black/50 py-[10vw] md:px-10">
                    <div className="grid grid-cols-10 items-center">
                      <div className="col-span-9 md:col-span-5 mb-12 md:mb-0">
                        <p className="text-2xl uppercase font-bold">
                          HI,
                          <br />
                          WE'RE HOMA, a gaming technology lab that gives game
                          creators the data-driven tools and human expertise
                          needed to turn their creative ideas into commercial
                          hits.
                        </p>
                      </div>
                      <div className="col-span-5 col-start-4 md:col-span-4 md:col-start-7">
                        <div className="w-full bg-black opacity-20 h-[50vw] 2xl:h-[720px] rounded-xl"></div>
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
                        <span className="text-lg lg:text-lg xl:text-2xl uppercase font-bold block mb-4">
                          We've joined forces with
                        </span>
                        <span className="font-black text-[clamp(50px,_5vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase max-w-[500px]">
                          1,000+ Studios Developers
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <p className="text-2xl uppercase font-bold">[Icon]</p>
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="text-lg lg:text-lg xl:text-2xl uppercase font-bold block mb-4">
                          Combining our creative expertise into
                        </span>
                        <span className="font-black text-[clamp(50px,_5vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase max-w-[500px]">
                          80+ Mobile Games
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 pb-[10vw]">
                      <div className="col-span-12 lg:col-span-3 mb-5 lg:mb-0">
                        <p className="text-2xl uppercase font-bold">[Icon]</p>
                      </div>
                      <div className="col-span-12 lg:col-span-7">
                        <span className="text-lg lg:text-lg xl:text-2xl uppercase font-bold block mb-4">
                          Resulting in chart topping hits and
                        </span>
                        <span className="font-black text-[clamp(50px,_5vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase max-w-[500px]">
                          1,000,000,000+ Downloads
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 py-[15vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
              <div className="order-2 md:order-1 col-span-12 lg:col-span-2 relative z-10">
                <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">
                  Make A Game
                </span>
              </div>

              <div className="order-3 md:order-2 col-span-12 md:col-span-6 z-10">
                <h1 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase">
                  We’re changing games by bringing data into play
                </h1>
                <div className="content max-w-3xl mb-8 xl:mb-12 w-10/12">
                  <p>
                    Creativity can’t be forced, but with Homa Lab it can be
                    tweaked, iterated and rigorously tested. From idea to
                    monetization, Homa Lab’s real-time flow of data and insight
                    lets you build games that outperform by every conceivable
                    metric.
                  </p>
                </div>

                <Link href="#">
                  <a className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">
                    Enter the homa lab
                  </a>
                </Link>
              </div>

              <div className="order-1 md:order-3 col-span-12 md:col-span-6 lg:col-span-4 relative z-0 h-[300px] md:h-full">
                <MouseParallax
                  isAbsolutelyPositioned
                  lerpEase={0.15}
                  strength={-0.015}
                  zIndex={0}
                >
                  <ScrollParallax
                    isAbsolutelyPositioned
                    lerpEase={0.15}
                    strength={-0.14}
                    zIndex={0}
                  >
                    <div className="absolute top-[-20%] right-0 z-0 w-full max-w-[120px] lg:max-w-[160px]">
                      {/* <Image
                        src="/images/bee.webp"
                        alt="Bee"
                        layout="responsive"
                        width={398}
                        height={548}
                        className="w-full"
                      /> */}
                      <PixelatedImage
                        image={"/images/bee.webp"}
                        width={398}
                        height={548}
                      />
                    </div>
                  </ScrollParallax>
                </MouseParallax>

                <MouseParallax
                  isAbsolutelyPositioned
                  lerpEase={0.15}
                  strength={-0.025}
                  zIndex={0}
                >
                  <ScrollParallax
                    isAbsolutelyPositioned
                    lerpEase={0.15}
                    strength={-0.23}
                    zIndex={0}
                  >
                    <div className="absolute bottom-0 left-8 z-0 w-full max-w-[80px] lg:max-w-[95px] -scale-x-100 rotate-[15deg]">
                      {/* <Image
                        src="/images/bee.webp"
                        alt="Bee"
                        layout="responsive"
                        width={398}
                        height={548}
                        className="w-full"
                      /> */}
                      <PixelatedImage
                        image={"/images/bee.webp"}
                        width={398}
                        height={548}
                      />
                    </div>
                  </ScrollParallax>
                </MouseParallax>

                <MouseParallax
                  isAbsolutelyPositioned
                  lerpEase={0.15}
                  strength={0.025}
                  zIndex={0}
                >
                  <ScrollParallax
                    isAbsolutelyPositioned
                    lerpEase={0.15}
                    strength={0.1}
                    zIndex={0}
                  >
                    <div className="absolute top-[40%] left-[33%] z-0 w-full max-w-[90px] lg:max-w-[110px] rotate-[-14deg]">
                      {/* <Image
                        src="/images/bee.webp"
                        alt="Bee"
                        layout="responsive"
                        width={398}
                        height={548}
                        className="w-full"
                      /> */}
                      <PixelatedImage
                        image={"/images/bee.webp"}
                        width={398}
                        height={548}
                      />
                    </div>
                  </ScrollParallax>
                </MouseParallax>
              </div>
            </div>

            <div className="w-full flex flex-wrap border-t border-black/50">
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
                    <div
                      className={`w-full ${
                        i + 1 != 9 && "border-b border-black/50"
                      } px-6 xl:px-10 py-6 xl:py-10 flex flex-wrap`}
                    >
                      <div className="w-auto mr-12">
                        <span className="uppercase text-sm tracking-widest mt-1 block font-medium">
                          0{i + 1}
                        </span>
                      </div>
                      <div className="w-3/4">
                        <h3 className="font-black text-3xl lg:text-4xl xl:text-5xl leading-[0.95] mb-12 lg:mb-24 uppercase max-w-[500px] xl:max-w-none">
                          Ideas
                        </h3>

                        <div className="content w-11/12 lg:w-11/12 max-w-[650px]">
                          <p>
                            Whether through Tiktok, Discord or in-person events
                            like Homa Jams, we believe in creating a community
                            that unities game makers and game players (if
                            there's a distinction) with all sorts of creative
                            people around the world.
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden border-t border-black/50">
              <MouseParallax
                isAbsolutelyPositioned
                lerpEase={0.15}
                strength={-0.015}
                zIndex={10}
              >
                <ScrollParallax
                  isAbsolutelyPositioned
                  lerpEase={0.15}
                  strength={-0.14}
                  zIndex={10}
                >
                  <div className="absolute bottom-[15vw] right-[10vw] w-[60%] lg:w-1/3 max-w-[300px] lg:max-w-[550px] z-10">
                    {/* <Image
                      src="/images/ninja.webp"
                      alt="Ninja"
                      layout="responsive"
                      width={1056}
                      height={800}
                      className="w-full"
                    /> */}
                    <PixelatedImage
                      image={"/images/ninja.webp"}
                      width={1056}
                      height={800}
                    />
                  </div>
                </ScrollParallax>
              </MouseParallax>

              <div className="relative z-0 flex overflow-x-hidden">
                <div className="mt-56 lg:mt-[25vw] mb-[16vw] animate-marquee whitespace-nowrap">
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">
                    Play To Win
                  </span>
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">
                    Play To Win
                  </span>
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">
                    Play To Win
                  </span>
                </div>

                <div className="mt-56 lg:mt-[25vw] mb-[16vw] absolute top-0 animate-marquee2 whitespace-nowrap">
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">
                    Play To Win
                  </span>
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">
                    Play To Win
                  </span>
                  <span className="mx-[10vw] lg:mx-[6vw] text-[clamp(150px,_20.2vw,_410px)] font-black uppercase leading-none">
                    Play To Win
                  </span>
                </div>
              </div>
            </div>

            <div
              id="test"
              className="grid grid-cols-12 pb-12 lg:pb-[15vw] px-6 xl:px-10 max-w-screen-3xl mx-auto"
            >
              <div className="order-2 md:order-1 col-span-12 lg:col-span-2 relative z-10">
                <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">
                  Homa Academy
                </span>
              </div>

              <div className="order-3 md:order-2 col-span-12 md:col-span-6 z-10">
                <h1 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase max-w-[500px]">
                  Level up your game
                </h1>
                <div className="content max-w-3xl mb-8 xl:mb-12 w-10/12">
                  <p>
                    The Homa Academy provides developers and studios everywhere
                    the insights needed to create games with hit potential coded
                    right in.
                  </p>

                  <p>
                    Stop by to learn the ins and outs of game design, including
                    in-depth game play analysis, methods for ideation &amp;
                    player experience optimization, as well as hands-on game
                    builing tutorials, hangouts and more.
                  </p>
                </div>

                <Link href="#">
                  <a className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">
                    Learn More
                  </a>
                </Link>
              </div>

              <TestWebgl />

              {/* <div className="order-1 md:order-3 col-span-12 md:col-span-6 lg:col-span-4 relative z-0 md:h-full mb-8 lg:mb-0">
                Henry to replace with WebGl
              </div> */}
            </div>

            <div className="">
              <div className="relative z-0 flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  <img
                    className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square"
                    src="https://place.dog/500/500"
                    alt="PLACEHOLDER"
                  />
                  <img
                    className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square"
                    src="https://place.dog/600/600"
                    alt="PLACEHOLDER"
                  />
                  <img
                    className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square"
                    src="https://place.dog/700/700"
                    alt="PLACEHOLDER"
                  />
                  <img
                    className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square"
                    src="https://place.dog/800/800"
                    alt="PLACEHOLDER"
                  />
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                  <img
                    className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square"
                    src="https://place.dog/500/500"
                    alt="PLACEHOLDER"
                  />
                  <img
                    className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square"
                    src="https://place.dog/600/600"
                    alt="PLACEHOLDER"
                  />
                  <img
                    className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square"
                    src="https://place.dog/700/700"
                    alt="PLACEHOLDER"
                  />
                  <img
                    className="inline-block w-[60%] md:w-[40%] xl:w-[30%] aspect-square"
                    src="https://place.dog/800/800"
                    alt="PLACEHOLDER"
                  />
                </div>
              </div>
            </div>

            <div className="bg-lime text-black">
              <div className="grid grid-cols-12 py-12 lg:py-[15vw] px-6 xl:px-10 max-w-screen-3xl mx-auto">
                <div className="col-span-12 lg:col-span-2 relative z-10">
                  <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">
                    Build A Career
                  </span>
                </div>

                <div className="col-span-12 lg:col-span-8 z-10">
                  <h1 className="font-black text-[clamp(50px,_4.45vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase">
                    We’re changing the game by rewriting the rules
                  </h1>
                  <div className="content max-w-3xl mb-8 xl:mb-12 w-10/12">
                    <p>
                      Creating tools to superpower others’ creativity requires a
                      lot of creativity on our end too. If you’re creative and
                      up for taking over an industry, we want our logo on your
                      Linkedin.
                    </p>
                  </div>

                  <div className="w-full flex flex-wrap border border-black/50 mb-6 lg:mb-8">
                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-12 lg:mb-32 uppercase">
                        WFH, WFParis, WFAnywhere
                      </h3>

                      <div className="content content--small w-11/12">
                        <p>
                          We’re a distributed team with a flagship HQ in Paris.
                          Work from here, or anywhere.
                        </p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/50 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-12 lg:mb-32 uppercase w-11/12">
                        Work In English
                      </h3>

                      <div className="content content--small w-11/12">
                        <p>
                          We’re over 25 nationalities strong and we work in
                          English all day long.
                        </p>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/3 p-5 lg:p-6 xl:p-8 2xl:p-10">
                      <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-[0.95] mb-12 lg:mb-32 uppercase">
                        Work your way up
                      </h3>

                      <div className="content content--small w-11/12">
                        <p>
                          Twice-yearly reviews: twice-yearly chances to prove
                          you deserve more.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="#">
                    <a className="inline-block border border-black/50 font-medium uppercase leading-none py-6 px-10 rounded-sm bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white">
                      Apply for a job at Homa
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <SocialScroller />
            <CarouselBlog items={blog} />
            <FooterCta />
            <Footer />
          </m.div>
        </m.main>
      </LazyMotion>
    </Layout>
  );
}

// Sanity CMS Props
export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context);

  return cms;
}
