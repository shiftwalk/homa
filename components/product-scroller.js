import { useState } from "react";
import SanityImage from "./sanity-image";
import GridOverlayDense from "./grid-overlay-dense";
import ProductScrollerItem from "./product-scroller-item";
import { InView } from 'react-intersection-observer';

export default function ProductScroller({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full flex flex-wrap border-t border-black/50">
      <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-black/50">
        <div className="lg:sticky lg:top-0 xl:top-0 lg:pb-0">
          <div className="flex w-full lg:h-screen items-center justify-center relative overflow-hidden">
            <GridOverlayDense />
            <div className="w-full h-full p-6 xl:p-10 flex items-center justify-center relative z-10">
              {/* <div className="w-[300px] h-[300px] bg-pink lg:-mt-32 xl:-mt-40"></div> */}
              <div className="w-[70%] relative">
                {products.map((e, i) => {
                  return (
                    <div className={`${(currentIndex == i) ? 'opacity-100' : 'opacity-0' } w-full transition-opacity ease-in-out duration-300 ${i == 0 ? 'relative' : 'absolute inset-0' }`}>
                      <SanityImage
                        key={i}
                        image={e.productVisual}
                        layout="responsive"
                        width={e.productVisual.asset.metadata.width}
                        height={e.productVisual.asset.metadata.height}
                        className="w-full"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 pb-12 lg:pb-16 xl:pb-24">
        <div className={`w-full px-6 xl:px-10 py-6 xl:py-10 flex flex-wrap border-b border-black/50`}>
          <div className="w-auto mr-12">
            <span className="uppercase text-sm tracking-widest mt-1 block font-medium">00</span>
          </div>
          <div className="w-3/4">
            <h3 className="font-black text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[0.95] tracking-tight mb-24 lg:mb-[31vw] uppercase max-w-[500px] xl:max-w-none">Game The System</h3>
          </div>
        </div>
        {products.map((e, i) => {
          return (
            <InView threshold={1} as="div" onChange={(inView, entry) => inView && setCurrentIndex(i)}>
              <ProductScrollerItem
                products={products}
                i={i}
                href={`/homa-lab/${e.slug.current}`}
                key={i}
                title={e.title}
                introText={e.introText}
                onMouseOver={() => setCurrentIndex(i)}
              />
            </InView>
          )
        })}
      </div>
    </div>
  )
}