import Img from "next/image"
import sanity from "@/services/sanity"
import { useNextSanityImage } from "next-sanity-image"
import { useState } from "react"

export default function SanityImage({ image, layout, widthOverride, heightOverride, focalPoint, className, priority, noCaption }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  // Pass in custom URL builder props
  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width((widthOverride ? widthOverride : options.width) || Math.min(( widthOverride ? widthOverride : options.originalImageDimensions.width), 800))
      .quality(90)
      .fit('clip')
  };
  
  // Generate actual URL
	const imageProps = useNextSanityImage(sanity.config, image.asset, { imageBuilder: myCustomImageBuilder });

  // Generate attributes for Img component
  const attributes = {};
  if (focalPoint?.x && focalPoint?.y) {
    const { x, y } = focalPoint;
    attributes.objectPosition = `${x * 100}% ${y * 100}%`;
  }

  if (image.alt) { attributes.alt = image.alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (layout) { attributes.layout = layout } else { attributes.layout = 'responsive' }
  if (priority) { attributes.priority = true } else { attributes.priority = false }

	return image.overrideVideo ? (
    <div className={`image ${className} w-full h-full overflow-hidden relative ${layout == 'fill' && 'cover-image' }`}>
      {(image.caption && !noCaption) && (
        <span className={`text-base md:text-lg xl:text-xl leading-tight xl:leading-tight md:leading-tight ${layout == 'fill' && 'mt-2 -mb-1 py-2 bg-white absolute bottom-0 left-0 w-full z-[10]'}`}>{image.caption}{image.captionSubHeading && (<span className="block text-gray">{image.captionSubHeading}</span>)}</span>
      )}
    </div>
	) : (
    <figure className={`image ${className} ${layout == 'fill' && 'cover-image' } ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out will-change`}>
		  <Img {...imageProps} {...attributes} onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }} />
      
      {(image.caption && !noCaption) && (
        <figcaption className={`text-base md:text-lg xl:text-xl leading-tight xl:leading-tight md:leading-tight ${layout == 'fill' && 'mt-2 -mb-1 py-2 bg-white absolute bottom-0 left-0 w-full z-[10]'}`}>{image.caption}{image.captionSubHeading && (<span className="block text-gray">{image.captionSubHeading}</span>)}</figcaption>
      )}
    </figure>
  )
}