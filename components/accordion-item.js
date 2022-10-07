import { m, AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import ArrowRightIcon from '@/icons/arrow-right.svg'

export default function AccordionItem({ heading, content, isOpen }) {
  const [open, setOpen] = useState(isOpen ? isOpen : false);

  function updateOpenProjects() {
    setOpen(open ? false : true)
  }

  return (
    <div className={`border-b border-black/50 ${ open && 'bg-pink'}`}>
      <button onClick={() => updateOpenProjects()} className="w-full text-left p-6 lg:p-10 flex flex-wrap">
        <span className="block font-bold text-xl lg:text-2xl xl:text-3xl uppercase w-10/12 tracking-wide">
          {heading}
        </span>

        { open ? (
        <span className="w-10 lg:w-12 xl:w-16 h-10 lg:h-12 xl:h-16 border border-black/50 p-3 xl:p-4 flex items-center justify-center leading-[0] text-2xl hover:bg-black hover:text-white ml-auto">
          <svg className="w-full" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.102 20.9 20.9 1.1M20.898 20.9 1.1 1.1" stroke="currentColor" strokeMiterlimit="10"/></svg>
        </span>
        ) : (
          <span className="w-10 lg:w-12 xl:w-16 h-10 lg:h-12 xl:h-16 border border-black/50 p-3 xl:p-4 flex items-center justify-center leading-[0] text-2xl hover:bg-black hover:text-white ml-auto">
            <ArrowRightIcon className="w-full rotate-90" />
          </span>
        )}
      </button>
      
      <div className={`w-full relative overflow-hidden transition-all ease-in-out duration-[450ms] ${open  ? 'max-h-full' : 'max-h-0' }`}>
        {/* <AnimatePresence> */}
          {open && (
            // <m.div
            //   initial={{ opacity: 0, transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] } }}
            //   animate={{ opacity: 1, transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] } }}
            //   exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] } }}
            // >
              <div className="content w-[75%] lg:w-1/2 max-w-[720px] p-6 lg:p-10">
                <p>{content}</p>
              </div>
            // </m.div>
          )}
        {/* </AnimatePresence> */}
      </div>
    </div>
  )
}