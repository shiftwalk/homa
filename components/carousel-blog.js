import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Link from 'next/link'
import ArrowRightIcon from '@/icons/arrow-right.svg'

export const CarouselBlog = ({items}) => {
  const [emblaNewsRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 3.5, align: 'start', inViewThreshold: 1 }, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla embla--team embla--blog border-t border-black/50 pt-[8vw] mb-[8vw]">
      <div className="w-[91.05vw] ml-auto flex flex-wrap mb-6">
        <div className="flex-1">
          <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] uppercase">News Feed</h2>
        </div>

        <div className="flex lg:justify-end w-full lg:w-auto lg:ml-auto pr-6 lg:pr-10 mb-5 lg:mb-0">
          <button class="embla__prev w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50 border-r-0" onClick={scrollPrev}>
            <ArrowRightIcon className="w-full rotate-180" />
          </button>
          <button class="embla__next w-12 lg:w-16 h-12 lg:h-16 flex items-center p-3 lg:p-4 justify-center border border-black/50" onClick={scrollNext}>
            <ArrowRightIcon className="w-full" />
          </button>
        </div>
      </div>

      <div class="embla__viewport w-[91.05vw] ml-auto bg-opacity-70 overflow-hidden" ref={emblaNewsRef}>
        <div className="embla__container">
          {items.map((e, i) => {
            return (
              <Link href={`/blog/${e.slug.current}`}>
                <a className="embla__slide" key={i}>
                  <div className="w-full bg-gray-100 aspect-square border-b border-black/50 relative overflow-hidden">
                    <img className="block w-full h-full absolute inset-0 aspect-square scale-[1.03] embla__slide-inner-blur" src="https://place.dog/500/500" alt="PLACEHOLDER" />
                  </div>
                  <div className="embla__slide-inner">
                    <div className="embla__slide-inner-blur">
                      <h2 className="font-bold text-lg lg:text-xl xl:text-2xl uppercase w-full mb-12 md:mb-20 lg:mb-28 xl:mb-32">{e.title}</h2>

                      <div className="flex items-end">
                        {e.category && (
                          <span className="inline-block border border-black/50 font-medium uppercase leading-none p-3 rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">{e.category.title}</span>
                        )}

                        <span className="block text-sm lg:text-base text-black/50 leading-none ml-auto">June 8 2022</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}