import SanityImage from "./sanity-image";

export default function ModularQuoteBlock({ text, authorName, authorJobTitle }) {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex-1 xl:pr-16 2xl:pr-24 order-2 xl:order-1">
        {authorName &&(
          <span className="block w-full text-base uppercase tracking-wide font-bold">{authorName}</span>
        )}

        {authorJobTitle &&(
          <span className="block w-full text-base opacity-60">{authorJobTitle}</span>
        )}
      </div>
      <div className="w-full xl:w-[75%] 2xl:w-[70%] order-1 xl:order-1 pb-3 xl:pb-0 bg-gradient-to-b from-pink/20 to-pink">
        <h3 className="block text-[clamp(40px,_4.45vw,_86px)] leading-[0.9] uppercase font-black p-8 pb-16 md:p-12 md:pb-20 lg:p-16 lg:pb-24 xl:p-24 xl:pb-32">{text}</h3>
      </div>
      <div className="flex-1 hidden xl:block order-3"></div>
    </div>
  )
}