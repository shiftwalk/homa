import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Link from 'next/link'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import SanityImage from './sanity-image'

export const CarouselBlog = ({items}) => {
  const [emblaNewsRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 5, align: 'start', inViewThreshold: 1 }, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla embla--team embla--blog border-t border-black/50 pt-20 lg:pt-[8vw] mb-[8vw]">
      <div className="ml-auto flex flex-wrap mb-0 lg:mb-6 pl-6 lg:pl-20 lg:pr-[1.7vw] xl:pr-[4vw] 2xl:pr-[3.6vw]">
        <div className="flex-1">
          <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] uppercase">News Feed</h2>
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

      <div className="embla__viewport ml-auto bg-opacity-70 overflow-hidden pl-6 lg:pl-20 mb-6 lg:mb-0" ref={emblaNewsRef}>
        <div className="embla__container">
          {items.map((e, i) => {
            let d = new Date(e.publishDate);
            let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

            return (
              <Link href={`/blog/${e.slug.current}`}>
                <a className="embla__slide group" key={i}>
                  <div className="w-full bg-gray-100 aspect-square border-b border-black/50 relative overflow-hidden group-hover:bg-pink group-focus:bg-pink">
                    <SanityImage
                      image={e.heroImage}
                      layout="fill"
                      className="block w-full h-full absolute inset-0 aspect-square scale-[1.03] embla__slide-inner-blur"
                    />
                </div>
                  <div className="embla__slide-inner group-hover:bg-pink group-focus:bg-pink">
                    <div className="embla__slide-inner-blur">
                      <h2 className="font-bold text-lg lg:text-xl xl:text-2xl leading-[1.2] uppercase w-full mb-12 md:mb-20 lg:mb-28 xl:mb-32">{e.title}</h2>

                      <div className="flex items-end">
                        {e.category && (
                          <span className="inline-block border border-black/50 font-medium text-sm lg:text-base uppercase leading-none p-1 lg:p-3 rounded-sm">{e.category.title}</span>
                        )}

                        <span className="block uppercase text-sm tracking-widest font-medium ml-auto">{da} {mo} {ye}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="flex lg:hidden lg:justify-end w-full lg:w-auto lg:ml-auto px-6 lg:pr-10 mb-5 lg:mb-0">
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