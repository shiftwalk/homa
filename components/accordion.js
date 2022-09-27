import AccordionItem from "./accordion-item";

export default function AccordionList({ items }) {
  return (
    <div className="border border-black/50 border-b-0">
      <div className="p-6 lg:p-10 border-b border-black/50">
        <h2 className="font-black text-[clamp(46px,_4.45vw,_86px)] leading-[0.9] uppercase">Gang Q&amp;A</h2>
      </div>
      
      {items.map((e, i) => {
        return (
          <AccordionItem heading={e.question} content={e.answer} isOpen={i == 0} key={i} />
        )
      })}
    </div>
  )
}