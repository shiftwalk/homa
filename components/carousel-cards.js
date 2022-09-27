import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import PhoneIcon from "@/icons/phone.svg"
import PhoneOutline from "@/icons/phone-outline.svg"
import Image from 'next/image'
import SanityImage from './sanity-image'
import TextScrambler from './text-scrambler'
import Link from 'next/link'

export const CarouselCards = ({ heading, items }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 3.5, align: 0.065, inViewThreshold: 1 }, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla embla--card">
      <div className="w-[91.05vw] lg:w-[93vw] ml-auto flex flex-wrap mb-6">
        <div className="flex-1">
          { heading && (
            <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] uppercase">{heading}</h2>
          )}
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

      <div class="embla__viewport w-full border border-r-0 border-black/50 ml-auto bg-opacity-70 overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {items.map((e, i) => {
            return (
              <Link href={`/games/${e.slug.current}`}>
                <a className="embla__slide">
                  <div className="embla__slide-inner flex flex-wrap relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 z-10 w-full p-6 lg:p-10">
                      <span className="block uppercase font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 embla__slide-title">
                        <TextScrambler noInViewWatch text={e.title} seed={40} step={1} />
                      </span>
                    </div>

                    <div className="w-full embla__slide-inner-blur relative overflow-hidden">
                      <div className="absolute inset-0 w-full h-full scale-[1.1] z-0">
                        <SanityImage image={e.heroImage} layout="fill" className="w-full absolute inset-0 object-cover object-center h-full" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 z-10 w-full p-6 lg:p-10">
                      <div className="w-1/2">
                        <span className="block uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-b-0 border-black/50 px-3 py-5">{e.partnerName}</span>
                      </div>
                      <div className="w-1/2">
                        <span className="block uppercase font-medium tracking-wider text-base leading-none lg:leading-none xl:leading-none 2xl:leading-non w-11/12 bg-white border border-black/50 px-3 py-5">{e.projectName}</span>
                      </div>
                    </div>

                    {/* <div className="flex flex-wrap w-full mt-auto">
                      <a href={e.appStoreLink} target="_blank" rel="noopener noreferrer" className="block uppercase font-medium tracking-widest text-sm leading-none xl:text-base xl:leading-none flex-1">Download Game</a>
                    </div> */}
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