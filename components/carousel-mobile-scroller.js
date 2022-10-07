import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import SanityImage from './sanity-image'
import GridOverlayDense from './grid-overlay-dense'
import Link from 'next/link'

export const CarouselMobileScroller = ({items}) => {
  const [emblaTeamRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 100, align: 'start', inViewThreshold: 1 }, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla embla--mobile-scroller border-t border-black/50 pt-8">
      <div className="embla__viewport w-full ml-auto bg-opacity-70 overflow-hidden" ref={emblaTeamRef}>
        <div className="embla__container">
          {items?.map((e, i) => {
            return (
              <Link href={`/homa-lab/${e.slug.current}`}>
                <a className="embla__slide" key={i}>

                  <div className="flex w-full items-center justify-center relative overflow-hidden border-black/50 border aspect-square border-b-0 mb-4">
                    <GridOverlayDense />
                    <div className="w-full h-full p-6 xl:p-10 flex items-center justify-center relative z-10">
                      <div className="w-[85%] relative">
                        <SanityImage
                          image={e.productVisual}
                          layout="responsive"
                          width={e.productVisual.asset.metadata.width}
                          height={e.productVisual.asset.metadata.height}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="embla__slide-inner">
                    <div className="embla__slide-inner-blur">
                      <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">0{i + 1}</span>
                      <span className="block uppercase font-black tracking-tight text-4xl leading-none mb-3">{e.title}</span>

                      <div className="content mb-0 pb-0">
                        <p>{e.introText}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>

        <div className="flex lg:hidden lg:justify-end w-full relative z-[100] mt-10 lg:mt-0 mb-8">
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