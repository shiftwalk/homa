import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import SanityImage from './sanity-image'
import TwitterIcon from "@/icons/twitter.svg"
import LinkedInIcon from "@/icons/linkedin.svg"

export const CarouselTeam = ({items}) => {
  const [emblaTeamRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 3.5, align: 'start', inViewThreshold: 1 }, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla embla--team">
      <div className="w-[91.05vw] ml-auto flex flex-wrap mb-6">
        <div className="flex-1">
        <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] uppercase">Our Partners &amp; Investors</h2>
        </div>

        <div className="flex lg:justify-end w-full lg:w-auto lg:ml-auto pr-6 lg:pr-10 mb-5 lg:mb-0">
          <button class="embla__prev w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 border-r-0 transition-colors ease-in-out duration-300 hover:border-black/100 focus:border-black/100" onClick={scrollPrev}>
            <ArrowRightIcon className="w-full rotate-180" />
          </button>
          <button class="embla__next w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 transition-colors ease-in-out duration-300 hover:border-black focus:border-black" onClick={scrollNext}>
            <ArrowRightIcon className="w-full" />
          </button>
        </div>
      </div>

      <div class="embla__viewport w-[91.05vw] ml-auto bg-opacity-70 overflow-hidden" ref={emblaTeamRef}>
        <div className="embla__container">
          {items?.map((e, i) => {
            return (
              <div className="embla__slide" key={i}>
                <div className="w-full bg-gray-100 aspect-square border-b border-black/50 relative overflow-hidden">
                  <SanityImage image={e.image} layout="fill" className="block w-full h-full absolute inset-0 aspect-square scale-[1.03] embla__slide-inner-blur" />
                </div>
                <div className="embla__slide-inner">
                  <div className="embla__slide-inner-blur">
                    <span className="block uppercase font-bold tracking-widest text-xl leading-none lg:text-2xl lg:leading-none mb-3">{e.title}</span>
                    <span className="block text-base leading-[1.15] lg:text-lg lg:leading-[1.15]">{e.jobTitle}, {e.company}</span>

                    {(e.linkedIn || e.twitter) && (
                      <div className="mt-8 lg:mt-12 flex space-x-3">
                        {e.linkedIn && (
                          <a
                            href={e.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                          >
                            <span className="w-10 xl:w-14 h-10 xl:h-14 md:w-12 md:h-12 2xl:w-12 2xl:h-12 rounded-xl bg-black/10 flex items-center justify-center">
                              <LinkedInIcon className="w-[50%] text-black" />
                            </span>
                          </a>
                        )}
                        {e.twitter && (
                          <a
                            href={e.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                          >
                            <span className="w-10 xl:w-14 h-10 xl:h-14 md:w-12 md:h-12 2xl:w-12 2xl:h-12 rounded-xl bg-black/10 flex items-center justify-center">
                              <TwitterIcon className="w-[50%] text-black" />
                            </span>
                          </a>
                        )}
                      </div>
                    )}
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