export default function GridOverlayDense({ offset }) {
  return (
    <div className={`absolute top-0 lef-0 w-full z-10 grid grid-cols-5 grid-rows-16 ${offset ? 'translate-x-[-1px] translate-y-[1px]' : ''}`}>
      {Array.from(Array(16), (e, i) => {
        return (
          <>
            <div className="aspect-square col-span-1 row-span-1 border-r border-b border-black/50"></div>
            <div className="aspect-square col-span-1 row-span-1 border-r border-b border-black/50"></div>
            <div className="aspect-square col-span-1 row-span-1 border-r border-b border-black/50"></div>
            <div className="aspect-square col-span-1 row-span-1 border-r border-b border-black/50"></div>
            <div className="aspect-square col-span-1 row-span-1 border-b border-black/50"></div>
          </>
        )
      })}  
    </div>
  )
}