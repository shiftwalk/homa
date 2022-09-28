import Link from "next/link"
import Div100vh from "react-div-100vh"
import MobileMenuItem from "@/components/mobile-menu-item"
import ArrowRightIcon from "@/icons/arrow-right.svg"

export default function MobileMenu({ menuClose, setMobileChildMenuOpen, mobileChildMenuOpen}) {
  return (
    <Div100vh className="w-full flex bg-white bg-opacity-50 backdrop-blur-xl lg:hidden">
      <div className="w-full h-full overflow-scroll p-6 pb-16">
        <nav className="ml-auto w-full">
          <ul className="w-full">
            <li className="block mb-3">
              <MobileMenuItem href="/" label="Home" onClick={menuClose} />
            </li>

            <li className="block mb-3">
              <MobileMenuItem href="/games" label="Games" onClick={menuClose} />
            </li>
            
            <li className="block mb-3 nav-has-child">
              <button onClick={() => setMobileChildMenuOpen(!mobileChildMenuOpen)} className="block w-full text-left border-black border px-6 py-5 uppercase text-base leading-none relative">
                Homa Lab
                
                <div className="absolute top-0 right-0 bottom-0 w-[60px] border-l border-black flex items-center justify-center">
                  <ArrowRightIcon className="w-[20px] rotate-90" />
                </div>
              </button>

              { mobileChildMenuOpen && (
                <ul className="border-t-0 border-black border">
                  <li className="block">
                    <Link href="/homa-lab">
                      <a className="block px-6 py-5 uppercase text-base leading-none relative" onClick={menuClose}>
                        Overview
                      </a>
                    </Link>
                  </li>
                  <li className="block">
                    <Link href="/homa-lab/ideas">
                      <a className="block px-6 py-5 uppercase text-base leading-none relative" onClick={menuClose}>
                        Ideas
                      </a>
                    </Link>
                  </li>
                  <li className="block">
                    <Link href="/homa-lab/market-watchers">
                      <a className="block px-6 py-5 uppercase text-base leading-none relative" onClick={menuClose}>
                        Market Watchers
                      </a>
                    </Link>
                  </li>
                  <li className="block">
                    <Link href="/homa-lab/homa-sdk">
                      <a className="block px-6 py-5 uppercase text-base leading-none relative" onClick={menuClose}>
                        Homa SDK
                      </a>
                    </Link>
                  </li>
                  <li className="block">
                    <Link href="/homa-lab/dev-tools">
                      <a className="block px-6 py-5 uppercase text-base leading-none relative" onClick={menuClose}>
                        Dev Tools
                      </a>
                    </Link>
                  </li>
                  <li className="block">
                    <Link href="/homa-lab/data-analytics">
                      <a className="block px-6 py-5 uppercase text-base leading-none relative" onClick={menuClose}>
                        Data Analytics
                      </a>
                    </Link>
                  </li>
                  <li className="block">
                    <Link href="/homa-lab/submissions-and-creatives">
                      <a className="block px-6 py-5 uppercase text-base leading-none relative" onClick={menuClose}>
                        Submissions And Creatives
                      </a>
                    </Link>
                  </li>
                  <li className="block">
                    <a href="https://academy.homagames.com/" target="_blank" rel="noopener noreferrer" className="block px-6 py-5 uppercase text-base leading-none relative" onClick={menuClose}>
                      Homa Academy
                    </a>
                  </li>
                </ul>
              )}
            </li>
            
            <li className="block mb-3">
              <MobileMenuItem href="/community" label="Community" onClick={menuClose} />
            </li>

            <li className="block mb-3">
              <MobileMenuItem href="/about" label="About" onClick={menuClose} />
            </li>

            <li className="block mb-3">
              <MobileMenuItem href="/careers" label="Careers" onClick={menuClose} />
            </li>

            <li className="block mb-3">
              <MobileMenuItem href="/blog" label="Blog" onClick={menuClose} />
            </li>

            <li className="block mb-3">
              <MobileMenuItem href="/homa-lab" label="Enter The Homa Lab" onClick={menuClose} dark />
            </li>
          </ul>
        </nav>
      </div>
    </Div100vh>    
  )
}