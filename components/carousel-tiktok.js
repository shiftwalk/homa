import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import PhoneIcon from "@/icons/phone.svg"
import PhoneOutline from "@/icons/phone-outline.svg"
import Image from 'next/image'
import { isMobile } from 'react-device-detect'

export const CarouselTikTok = ({ heading, items }) => {
  const [emblaTikTokRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 5, align: isMobile ? 0 : 0.065, inViewThreshold: 1 }, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla embla--games relative">
      <div className="w-[100vw] lg:w-[93vw] ml-auto flex flex-wrap mb-6 px-6 lg:px-0">
        <div className="flex-1">
          { heading && (
            <h2 className="font-black text-[clamp(36px,_4vw,_64px)] leading-[0.9] tracking-tight uppercase">{heading}</h2>
          )}
        </div>
      </div>

      <button className="absolute hidden lg:block lg:top-[8vw] xl:top-[7vw] 2xl:top-[5vw] left-0 bottom-0 w-[6%] h-full bg-transparent z-[100]" onClick={scrollPrev}></button>
      
      <button className="absolute hidden lg:block lg:top-[8vw] xl:top-[7vw] 2xl:top-[5vw] right-0 left-auto bottom-0 w-[44%] h-full bg-transparent z-[100]" onClick={scrollNext}></button>

      <div className="embla__viewport w-full border border-r-0 border-black/50 ml-auto bg-opacity-70 overflow-hidden" ref={emblaTikTokRef}>
        <div className="embla__container">
          {items.map((e, i) => {
            let d = new Date(e.postDate);
            let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

            return (
              <div className="embla__slide">
                <div className="embla__slide-inner flex flex-wrap">
                  <div className="flex flex-wrap w-full mb-auto">
                    <span className="block uppercase font-medium tracking-widest text-sm leading-none lg:text-base lg:leading-none flex-1">@Homagames</span>
                    <span className="block uppercase font-medium tracking-widest text-sm leading-none lg:text-base lg:leading-none flex-1 text-right">{da} {mo} {ye}</span>
                  </div>

                  <div className="w-full flex justify-center embla__slide-inner-blur my-auto lg:py-0">
                    <div className="w-[55%] lg:w-[40%] relative">
                      <PhoneIcon className="w-full relative z-0 opacity-[0.85]" />

                      <div className="absolute inset-0 z-1 scale-y-[0.961] scale-x-[0.96] translate-x-[1.2%] border-1 border-black">

                        <svg className="w-full scale-y-[0.97] scale-x-[0.97] translate-y-[-1.5%] translate-x-[-1.5%] absolute inset-0 z-30" viewBox="0 0 355 623" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="352.72" height="620.72" rx="48" stroke="#0F0F19" stroke-width="2"/>
                        </svg>

                        {e.video ? (
                        <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0 phone-mask`}>
                          <source src={e.video} type="video/mp4" />

                          Sorry. Your browser does not support the video tag.
                        </video>
                        ) : (
                          <Image
                            src="/images/game-example.webp"
                            layout="responsive"
                            width={496}
                            height={882}
                            quality={75}
                            className="w-full object-cover object-center h-full absolute inset-0 phone-mask"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {e.url && (
                    <div className="flex flex-wrap w-full mt-auto">
                      <a href={e.url} target="_blank" rel="noopener noreferrer" className="block uppercase font-medium tracking-widest text-sm leading-none xl:text-base xl:leading-none flex-1">View on TikTok</a>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex lg:hidden lg:justify-end w-full lg:w-auto lg:ml-auto pr-6 lg:pr-10 mb-5 lg:mb-0 px-6 lg:pl-0 mt-8  lg:mt-0">
        <button className="embla__prev w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 border-r-0 transition-colors ease-in-out duration-300 hover:border-black/100 focus:border-black/100" onClick={scrollPrev}>
          <ArrowRightIcon className="w-full rotate-180" />
        </button>
        <button className="embla__next w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 transition-colors ease-in-out duration-300 hover:border-black focus:border-black" onClick={scrollNext}>
          <ArrowRightIcon className="w-full" />
        </button>
      </div>
    </div>
  )
}