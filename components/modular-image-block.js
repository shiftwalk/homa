import SanityImage from "./sanity-image";

export default function ModularImageBlock({ image }) {
  let width = '(min-width: 768px) 90vw, 100vw'

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex-1 xl:pr-16 2xl:pr-24 order-2 xl:order-1 flex flex-wrap">
        {image.caption &&(
          <span className="block w-full text-base opacity-60">{image.caption}</span>
        )}

        {image.source &&(
          <span className="block w-full text-base opacity-60 mt-3 xl:mt-auto">{image.source}</span>
        )}
      </div>
      <div className="content w-full xl:w-[75%] 2xl:w-[70%] order-1 xl:order-1 pb-3 xl:pb-0">
        <SanityImage
          image={image}
          focalPoint={image.hotspot}
          layout="responsive"
          sizes={width}
          noCaption
          className="w-full"
        />
      </div>
      <div className="flex-1 hidden xl:block order-3"></div>
    </div>
  )
}