import Link from "next/link";

export default function ProductScrollerItem({ href, i, title, introText, products, onMouseOver }) {

  return (
    <Link href={`${href}`} key={i}>
      <a
        className={`w-full ${i + 1 != products.length && 'border-b border-black/50'} px-6 xl:px-10 py-6 xl:py-10 flex flex-wrap hover:bg-pink focus:bg-pink lg:pb-[20vw] xl:pb-[20vw]`}
        onMouseOver={onMouseOver}
      >
        <div className="w-auto mr-12">
          <span className="uppercase text-sm tracking-widest mt-1 block font-medium">0{i + 1}</span>
        </div>
        <div className="w-3/4">
          <h3 className="font-black text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[0.95] tracking-tight mb-12 lg:mb-24 uppercase max-w-[500px] xl:max-w-none">{title}</h3>

          <div className="content w-11/12 lg:w-11/12 max-w-[650px]">
            <p>{introText}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}