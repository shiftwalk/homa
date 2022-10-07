import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import SanityImage from './sanity-image'
import Link from 'next/link'
import { isMobile } from 'react-device-detect';

export const CarouselCards = ({ heading, items }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: isMobile ? 100 : 5, align: isMobile ? 0 : 0.065, inViewThreshold: 1 }, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla embla--card relative">
      <div className="w-[100vw] lg:w-[93vw] ml-auto flex flex-wrap mb-2 lg:mb-6">
        <div className="flex-1">
          { heading && (
            <h2 className="font-black text-[clamp(40px,_4vw,_64px)] leading-[0.9] uppercase">{heading}</h2>
          )}
        </div>

        <div className="hidden lg:flex lg:justify-end w-full lg:w-auto lg:ml-auto pr-6 lg:pr-10 mb-5 lg:mb-0">
          <button className="embla__prev w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 border-r-0 transition-colors ease-in-out duration-300 hover:border-black/100 focus:border-black/100" onClick={scrollPrev}>
            <ArrowRightIcon className="w-full rotate-180" />
          </button>
          <button className="embla__next w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 transition-colors ease-in-out duration-300 hover:border-black focus:border-black" onClick={scrollNext}>
            <ArrowRightIcon className="w-full" />
          </button>
        </div>
      </div>

      <button className="absolute hidden lg:block lg:top-[8vw] xl:top-[7vw] 2xl:top-[5vw] left-0 bottom-0 w-[6%] h-full bg-transparent z-[100]" onClick={scrollPrev}></button>
      
      <button className="absolute hidden lg:block lg:top-[8vw] xl:top-[7vw] 2xl:top-[5vw] right-0 left-auto bottom-0 w-[44%] h-full bg-transparent z-[100]" onClick={scrollNext}></button>

      <div className="embla__viewport w-full border-b-0 border-t-0 border-l-0 lg:border-t lg:border-b border border-r-0 border-black/50 ml-auto bg-opacity-70 overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {items.map((e, i) => {
            return (
              <Link href={`/games/${e.slug.current}`}>
                <a className="embla__slide" key={i}>
                  <div className="embla__slide-inner flex flex-wrap relative overflow-hidden">
                    <div className="hidden lg:block absolute top-0 left-0 right-0 z-10 w-full p-6 lg:p-10">
                      <span className="block uppercase font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-none lg:leading-none xl:leading-none 2xl:leading-none embla__slide-title">
                        {e.title}
                      </span>
                    </div>

                    <div className="w-full embla__slide-inner-blur relative overflow-hidden border border-black lg:border-0">
                      <div className="absolute inset-0 w-full h-full lg:scale-[1.1] z-0">
                        <SanityImage image={e.heroImage} layout="fill" className="w-full absolute inset-0 object-cover object-center h-full" />
                      </div>
                    </div>

                    <div className="hidden lg:block absolute bottom-0 left-0 z-10 w-full p-6 lg:p-10">
                      <div className="w-1/2">
                        <span className="block uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-b-0 border-black/50 px-3 py-5">{e.partnerName}</span>
                      </div>
                      <div className="w-1/2">
                        <span className="block uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-black/50 px-3 py-5">{e.projectName}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="block lg:hidden z-10 w-full py-6 lg:p-10">
                    <span className="block uppercase font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-none lg:leading-none xl:leading-none 2xl:leading-none">
                      {e.title}
                    </span>
                  </div>

                  <div className="block lg:hidden w-full p-0 lg:p-10">
                    <div className="w-10/12">
                      <span className="block uppercase font-medium tracking-wider text-sm leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-b-0 border-black/50 px-3 py-5">{e.partnerName}</span>
                    </div>
                    <div className="w-10/12">
                      <span className="block uppercase font-medium tracking-wider text-sm leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-black/50 px-3 py-5">{e.projectName}</span>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>

        <div className="flex lg:hidden lg:justify-end w-full relative z-[100] mt-8 lg:mt-0">
          <button className="embla__prev w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 border-r-0 transition-colors ease-in-out duration-300 hover:border-black/100 focus:border-black/100" onClick={scrollPrev}>
            <ArrowRightIcon className="w-full rotate-180" />
          </button>
          <button className="embla__next w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 transition-colors ease-in-out duration-300 hover:border-black focus:border-black" onClick={scrollNext}>
            <ArrowRightIcon className="w-full" />
          </button>
        </div>
      </div>
    </div>
  )
}