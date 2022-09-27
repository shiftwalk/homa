export default function GridOverlay() {
  return (
    <div className="w-full h-full absolute inset-0 z-10 grid grid-cols-3 grid-rows-3">
      <div className="col-span-1 row-span-1 border-r border-b border-black/50"></div>
      <div className="col-span-1 row-span-1 border-r border-b border-black/50"></div>
      <div className="col-span-1 row-span-1 border-b border-black/50"></div>
      <div className="col-span-1 row-span-1 border-r border-b border-black/50"></div>
      <div className="col-span-1 row-span-1 border-r border-b border-black/50"></div>
      <div className="col-span-1 row-span-1 border-b border-black/50"></div>
      <div className="col-span-1 row-span-1 border-r border-black/50"></div>
      <div className="col-span-1 row-span-1 border-r border-black/50"></div>
      <div className="col-span-1 row-span-1 border-black/50"></div>
    </div>
  )
}