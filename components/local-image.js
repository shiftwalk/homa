import Img from "next/image"
import { useState } from "react"

export default function LocalImage({ src, layout, width, height, className, priority, caption, noCaption, alt }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  let attributes = []
  if (alt) { attributes.alt = alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (layout) { attributes.layout = layout } else { attributes.layout = 'responsive' }
  if (width) { attributes.width = width } else { attributes.width = null }
  if (height) { attributes.height = height } else { attributes.height = null }
  if (priority) { attributes.priority = true } else { attributes.priority = false }

	return (
    <figure className={`image ${className} ${layout == 'fill' && 'cover-image' } ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out will-change`}>
		  <Img src={src} {...attributes} onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }} />
      
      {(caption && !noCaption) && (
        <figcaption className={`text-base md:text-lg xl:text-xl leading-tight xl:leading-tight md:leading-tight ${layout == 'fill' && 'mt-2 -mb-1 py-2 bg-white absolute bottom-0 left-0 w-full z-[10]'}`}>{caption}</figcaption>
      )}
    </figure>
  )
}