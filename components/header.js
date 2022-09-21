import { useEffect, useState } from "react"

import FancyLink from "@/components/fancyLink"
import MobileMenu from "@/components/mobile-menu"

import HomaLogoMarkIcon from "@/icons/homa-logo-mark.svg"

import { useRouter } from "next/router"
import Link from "next/link"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"
import useScrollDirection from '@/helpers/scroll-direction';

export default function Header() {
  const scrollDirection = useScrollDirection();
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileChildMenuOpen, setMobileChildMenuOpen] = useState(false)
  let scrollElement = null;

  useEffect(() => {
    scrollElement = document.querySelector('body');
  });

  const menuToggle = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
      enableBodyScroll(scrollElement);  
    } else {
      setMobileMenuOpen(true)
      disableBodyScroll(scrollElement);
    }
  }

  const menuClose = () => {
    setMobileMenuOpen(false)
    setMobileChildMenuOpen(false)
    clearAllBodyScrollLocks()
  }

  return (
    <div className={`fixed top-0 left-0 right-0 w-full z-[1000] transition-translate ease-in-out duration-[350ms] ${scrollDirection == 'down' ? 'translate-y-[-100px]' : 'translate-y-[0]'}`}>
      <header className="pl-6 xl:pl-10 bg-white bg-opacity-0 backdrop-blur-xl border-b border-black/50">
        <div className="flex flex-wrap items-start">
          <Link href="/">
            <a className="w-[100px] lg:w-[110px] xl:w-[125px] 2xl:w-[160px] flex items-center h-[60px] lg:h-[70px] xl:h-[80px]">
              <HomaLogoMarkIcon className="w-full" />
            </a>
          </Link>

          {/* Main Navigation */}
          <nav className="ml-auto w-full text-sm md:text-base md:w-auto hidden lg:block">
            <ul className="flex w-full">
              {/* Games */}
              <li>
                <FancyLink
                  destination="/games"
                  a11yText="Navigate to the games page"
                  label="Games"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                  active={router.asPath == '/games'}
                />
              </li>
              
              {/* Homa Lab */}
              <li className="nav-has-child">
                <FancyLink
                  destination="/homa-lab"
                  a11yText="Navigate to the homa lab page"
                  label="Homa Lab"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                  active={router.asPath.includes('/homa-lab')}
                />

                {/* Homa Lab Subnav */}
                <ul className="nav-child mt-[71px] xl:mt-[81px] lg:w-[730px] xl:w-[930px] 2xl:w-[1010px] ml-auto">
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab"
                      a11yText="Navigate to the homa lab page"
                      label="Overview"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                      active={router.asPath == '/homa-lab'}
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab/ideas"
                      a11yText="Navigate to the homa lab page"
                      label="Ideas"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab/market-watchers"
                      a11yText="Navigate to the homa lab page"
                      label="Market Watchers"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab/homa-sdk"
                      a11yText="Navigate to the homa lab page"
                      label="Homa SDK"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab/dev-tools"
                      a11yText="Navigate to the homa lab page"
                      label="Dev Tools"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab/data-analytics"
                      a11yText="Navigate to the homa lab page"
                      label="Data Analytics"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                  <li className="block">
                    <FancyLink
                      destination="/homa-lab/homa-academy"
                      a11yText="Navigate to the homa lab page"
                      label="Homa Academy"
                      className="uppercase font-medium tracking-widest lg:text-sm lg:leading-none xl:text-base xl:leading-none inline-block py-4"
                    />
                  </li>
                </ul>
              </li>

              <li>
                <FancyLink
                  destination="/community"
                  a11yText="Navigate to the community page"
                  label="Community"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                  active={router.asPath == '/community'}
                />
              </li>

              <li>
                <FancyLink
                  destination="/about"
                  a11yText="Navigate to the about page"
                  label="About"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                  active={router.asPath == '/about'}
                />
              </li>

              <li>
                <FancyLink
                  destination="/careers"
                  a11yText="Navigate to the careers page"
                  label="Careers"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                  active={router.asPath == '/careers'}
                />
              </li>

              <li>
                <FancyLink
                  destination="/blog"
                  a11yText="Navigate to the blog page"
                  label="Blog"
                  className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] flex items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10"
                  active={router.asPath.includes('/blog')}
                />
              </li>

              <li>
                <Link href="/homa-lab">
                  <a
                    className="uppercase font-medium tracking-widest lg:h-[70px] xl:h-[80px] items-center justify-center lg:text-sm lg:leading-none xl:text-base xl:leading-none md:px-5 lg:px-7 xl:px-8 2xl:px-10 bg-black text-white flex"
                  >
                    <span className="hidden xl:inline">Enter The&nbsp;</span>Homa Lab
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="lg:hidden ml-auto w-1/2">
            <button
              onClick={menuToggle}
              className="uppercase font-medium tracking-widest h-[60px] items-center justify-center text-base w-full flex border-l border-black/50 lg:hidden"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </nav>
        </div>
      </header>

      {mobileMenuOpen && (
        <MobileMenu
          menuClose={menuClose}
          setMobileChildMenuOpen={setMobileChildMenuOpen}
          mobileChildMenuOpen={mobileChildMenuOpen}
        />
      )}
    </div>
  )
}