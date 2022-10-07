import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import PhoneIcon from "@/icons/phone.svg"
import PhoneOutline from "@/icons/phone-outline.svg"
import Image from 'next/image'
import { isMobile } from 'react-device-detect'
import TextScrambler from './text-scrambler'

export const CarouselGameVideos = ({ heading, items, reversed }) => {
  const [emblaGameVideosRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 100, align: 0, inViewThreshold: 1 }, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  let games = items.reverse()

  if (reversed) {
    games = items
  }

  return (
    <div className="embla embla--games-videos relative">
      <div className="embla__viewport overflow-hidden" ref={emblaGameVideosRef}>
        <div className="embla__container">
          {games.map((e, i) => {
            return (
              <div className="embla__slide pb-20 lg:pb-0 relative">
                <div className="embla__slide-inner">
                  <div className="absolute w-[85%] lg:w-[62%] xl:w-[55%] 2xl:w-[45%] left-0 lg:left-auto right-auto lg:right-[-3%] bottom-0 md:bottom-[5%] lg:bottom-auto top-auto lg:top-[22%] z-10">
                    <div className="w-full">
                      <span className="block uppercase font-medium tracking-wider text-sm xl:text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-b-0 border-black/50 px-3 py-5">
                        <span className="block embla__slide-text"><TextScrambler text={e.title} seed={5} step={1} singleLine /></span></span>
                    </div>
                    <div className="w-full">
                      <span className="block uppercase font-medium tracking-wider text-sm xl:text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-black/50 border-b-0 lg:border-b px-3 py-5"><span className="block embla__slide-text"><TextScrambler text={e.partnerName} seed={5} step={1} singleLine /></span></span>
                    </div>

                    <div className="w-full block lg:hidden">
                      <span className="block uppercase font-medium tracking-wider text-sm xl:text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-black/50 px-3 py-5"><span className="block embla__slide-text"><TextScrambler text={e.installs} seed={5} step={1} singleLine /></span></span>
                    </div>

                    <div className="flex w-full mt-8 order-1 lg:order-2">
                      <button className="embla__prev w-12 lg:w-12 xl:w-14 h-12 lg:h-12 xl:h-14 flex items-center p-3 lg:p-3 xl:p-4 justify-center border border-black/50 border-r-0 transition-colors ease-in-out duration-300 hover:border-black/100 focus:border-black/100 bg-white" onClick={scrollPrev}>
                        <ArrowRightIcon className="w-full rotate-180" />
                      </button>
                      <button className="embla__next w-12 lg:w-12 xl:w-14 h-12 lg:h-12 xl:h-14 flex items-center p-3 lg:p-3 xl:p-4 justify-center border border-black/50 transition-colors ease-in-out duration-300 hover:border-black focus:border-black bg-white" onClick={scrollNext}>
                        <ArrowRightIcon className="w-full" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="w-full scale-[0.8] lg:scale-[0.65]">
                    <PhoneIcon className="w-full relative z-0 opacity-90" />

                    <div className="absolute inset-0 z-1 scale-y-[0.961] scale-x-[0.96] translate-x-[1.2%] border-1 border-black">

                      <svg className="w-full scale-y-[0.97] scale-x-[0.97] translate-y-[-1.5%] translate-x-[-1.5%] absolute inset-0 z-30" viewBox="0 0 355 623" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="352.72" height="620.72" rx="48" stroke="#0F0F19" stroke-width="2"/>
                      </svg>

                      <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0 phone-mask embla__slide-inner-blur`}>
                        <source src={e.gameplayVideo} type="video/mp4" />

                        Sorry. Your browser does not support the video tag.
                      </video>

                      {/* <Image
                        src="/images/game-example.webp"
                        layout="responsive"
                        width={496}
                        height={882}
                        quality={75}
                        className="w-full"
                      /> */}
                    </div>
                  </div>

                  <div className="hidden lg:block absolute bottom-[22%] left-[3px] lg:w-[80%] xl:w-[70%] 2xl:w-[55%]">
                    <div className="w-full">
                      <span className="block uppercase font-medium tracking-wider text-sm xl:text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-black/50 px-3 py-5 text-left"><span className="block embla__slide-text"><TextScrambler text={e.installs} seed={5} step={1} singleLine /></span></span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}