import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import ArrowRightIcon from '@/icons/arrow-right.svg'

export const CarouselPhone = ({ heading }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 3.5, align: 'start', inViewThreshold: 1 }, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="w-[91.05vw] ml-auto flex flex-wrap mb-6">
        <div className="flex-1">
          { heading && (
            <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] uppercase">{heading}</h2>
          )}
        </div>

        <div className="flex lg:justify-end w-full lg:w-auto lg:ml-auto pr-6 lg:pr-10 mb-5 lg:mb-0">
          <button className="embla__prev w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 border-r-0 transition-colors ease-in-out duration-300 hover:border-black/100 focus:border-black/100" onClick={scrollPrev}>
            <ArrowRightIcon className="w-full rotate-180" />
          </button>
          <button className="embla__next w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 transition-colors ease-in-out duration-300 hover:border-black focus:border-black" onClick={scrollNext}>
            <ArrowRightIcon className="w-full" />
          </button>
        </div>
      </div>

      <div className="embla__viewport w-[91.05vw] border border-r-0 border-black/50 ml-auto bg-opacity-70 overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {Array.from(Array(4), (e, i) => {
            return (
              <div className="embla__slide">
                <div className="embla__slide-inner flex flex-wrap">
                  <div className="flex flex-wrap w-full mb-auto">
                    <span className="block uppercase font-medium tracking-widest text-sm leading-none lg:text-base lg:leading-none flex-1">@Homagames</span>
                    <span className="block uppercase font-medium tracking-widest text-sm leading-none lg:text-base lg:leading-none flex-1 text-right">121,501 Views</span>
                  </div>

                  <div className="w-full flex justify-center embla__slide-inner-blur h-[50vw] lg:h-[32vw] my-auto">
                    <div className="w-[40%] h-full bg-black/50 rounded-lg"></div>
                  </div>

                  <div className="flex flex-wrap w-full mt-auto">
                    <span className="block uppercase font-medium tracking-widest text-sm leading-none xl:text-base xl:leading-none flex-1">TikTok</span>
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