import FancyLink from "@/components/fancyLink"
import DiscordIcon from "@/icons/discord.svg"
import TwitterIcon from "@/icons/twitter.svg"
import TikTokIcon from "@/icons/tiktok.svg"
import LinkedInIcon from "@/icons/linkedin.svg"
import FacebookIcon from "@/icons/facebook.svg"
import InstagramIcon from "@/icons/instagram.svg"
import HomaLogoIcon from "@/icons/homa-logo.svg"
import AppleAppStoreIcon from "@/icons/apple-app-store.svg"
import GoogleAppStoreIcon from "@/icons/google-app-store.svg"

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-[0] px-6 xl:px-10 pt-8 md:pt-[20vw] pb-10 md:pb-10">
      <div className="grid grid-cols-5 md:grid-cols-12">
        <div className="col-span-5 md:col-span-4 2xl:col-span-5 block md:flex md:flex-wrap mb-12 md:mb-0">
          <div className="w-full hidden md:block">
            <HomaLogoIcon className="w-full mb-8" />
          </div>

          <div className="w-full mt-auto">
            <div className="flex space-x-6 md:space-x-0 md:block">
              <div className="w-[47.5%] md:w-[165px] mb-6">
                <a href="https://apps.apple.com/us/developer/homa-games/id1508492426" target="_blank" rel="noopener noreferrer" className="block w-full hover:opacity-75 focus:opacity-75">
                  <AppleAppStoreIcon className="w-full" />
                </a>
              </div>

              <div className="w-[52.5%] md:w-[165px] mb-6">
                <a href="https://play.google.com/store/apps/dev?id=4656343638685426415&hl=en&gl=US" target="_blank" rel="noopener noreferrer" className="block w-full hover:opacity-75 focus:opacity-75">
                  <GoogleAppStoreIcon className="w-full" />
                </a>
              </div>
            </div>

            <div className="w-full 2xl:space-x-8 hidden md:flex md:flex-wrap">
              <a href="mailto:bonjour@homagames.com" className="w-full 2xl:w-auto mb-1 2xl:mb-0 text-white/40 block hover:opacity-75 focus:opacity-75">bonjour@homagames.com</a>
              <a href="tel:+33142861324" className="w-full 2xl:w-auto mb-1 2xl:mb-0 text-white/40 block hover:opacity-75 focus:opacity-75">+33 1 42 86 13 24</a>
              <span className="w-full 2xl:w-auto mb-1 2xl:mb-0 text-white/40 block 2xl:mr-6">Privacy</span>
              <span className="w-full 2xl:w-auto mb-1 2xl:mb-0 text-white/40 block">Terms</span>
            </div>
          </div>
        </div>

        <div className="col-span-5 md:col-span-7 lg:col-span-6 xl:col-span-6 2xl:col-span-5 3xl:col-span-4 md:col-start-6 lg:col-start-7 xl:col-start-7 2xl:col-start-8 3xl:col-start-9">
          <div className="flex flex-wrap">
            <nav className="w-full md:w-1/2 text-sm md:text-base mb-16 md:mb-0">
              <ul className="w-full flex flex-wrap md:block md:flex-none">
                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/homa-lab"
                    a11yText="Navigate to the homa lab page"
                    label="Homa Lab"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/homa-lab/ideas"
                    a11yText="Navigate to the homa lab page"
                    label="Ideas"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/homa-lab/market-watchers"
                    a11yText="Navigate to the homa lab page"
                    label="Market Watcher"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/homa-lab/homa-sdk"
                    a11yText="Navigate to the homa lab page"
                    label="Homa SDK"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/homa-lab/dev-tools"
                    a11yText="Navigate to the homa lab page"
                    label="Dev Tools"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/homa-lab/data-analytics"
                    a11yText="Navigate to the homa lab page"
                    label="Data Analytics"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/homa-lab/submissions-and-creatives"
                    a11yText="Navigate to the homa lab page"
                    label="Submissions & Creatives"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>

                <li className="w-1/2 md:w-full block mb-4 md:mb-16 xl:mb-24">
                  <a
                    href="https://academy.homagames.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  >
                    Homa Academy
                  </a>
                </li>

                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/games"
                    a11yText="Navigate to the games page"
                    label="Games"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/homa-lab"
                    a11yText="Navigate to the homa lab page"
                    label="Homa Lab"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/community"
                    a11yText="Navigate to the community page"
                    label="Community"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/about"
                    a11yText="Navigate to the about page"
                    label="About"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="w-1/2 md:w-full block mb-4 md:mb-6 xl:mb-8">
                  <FancyLink
                    destination="/careers"
                    a11yText="Navigate to the careers page"
                    label="Careers"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
                <li className="w-1/2 md:w-full block">
                  <FancyLink
                    destination="/blog"
                    a11yText="Navigate to the blog page"
                    label="Blog"
                    className="uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none hover:opacity-75 focus:opacity-75"
                  />
                </li>
              </ul>
            </nav>

            <div className="w-full md:w-1/2 lg:w-auto text-sm md:text-base mb-16 md:mb-0 ml-auto">
              <span className="block uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none mb-4 md:mb-6 xl:mb-8">For Developers &amp; Studios</span>
              
              <ul className="w-full mb-10 md:mb-16 xl:mb-24 flex flex-wrap md:block md:flex-none">
                <li className="block mb-4 md:mb-6 xl:mb-8">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-14 h-14 md:w-12 md:h-12 2xl:w-12 2xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4 flex items-center justify-center">
                      <DiscordIcon className="w-[56.5%] text-[#E6C3E6]" />
                    </span>
                    <span className="hidden md:block break-all">/homagames</span>
                  </a>
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-8">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-14 h-14 md:w-12 md:h-12 2xl:w-12 2xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4 flex items-center justify-center">
                      <LinkedInIcon className="w-[45%] text-[#E6C3E6]" />
                    </span>
                    <span className="hidden md:block break-all">/homa-games</span>
                  </a>
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-8">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-14 h-14 md:w-12 md:h-12 2xl:w-12 2xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4 flex items-center justify-center">
                      <FacebookIcon className="w-[50%] text-[#E6C3E6]" />
                    </span>
                    <span className="hidden md:block break-all">/homagames</span>
                  </a>
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-8">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-14 h-14 md:w-12 md:h-12 2xl:w-12 2xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4 flex items-center justify-center">
                      <InstagramIcon className="w-[50%] text-[#E6C3E6]" />
                    </span>
                    <span className="hidden md:block break-all">@homagames</span>
                  </a>
                </li>
              </ul>


              <span className="block uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none mb-4 md:mb-6 xl:mb-8">For Our Web3 Community</span>
              
              <ul className="w-full mb-10 md:mb-16 xl:mb-24 flex flex-wrap md:block md:flex-none">
                <li className="block mb-4 md:mb-6 xl:mb-8">
                  <a
                    href="https://discord.gg/homagang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-14 h-14 md:w-12 md:h-12 2xl:w-12 2xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4 flex items-center justify-center">
                      <DiscordIcon className="w-[56.5%] text-[#E6C3E6]" />
                    </span>
                    <span className="hidden md:block break-all">/homagang</span>
                  </a>
                </li>

                <li className="block mb-4 md:mb-6 xl:mb-8">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-14 h-14 md:w-12 md:h-12 2xl:w-12 2xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4 flex items-center justify-center">
                      <TwitterIcon className="w-[53%] text-[#E6C3E6]" />
                    </span>
                    <span className="hidden md:block break-all">@homagames</span>
                  </a>
                </li>
              </ul>

              <span className="block uppercase text-sm xl:text-base font-medium tracking-widest leading-none xl:leading-none mb-4 md:mb-6 xl:mb-8">For The Fans</span>
              
              <ul className="w-full flex flex-wrap md:block md:flex-none">
                <li className="block mb-4 md:mb-6 xl:mb-8">
                  <a
                    href="https://discord.gg/homagames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium tracking-widest leading-none text-[#E6C3E6]/50 hover:opacity-75 focus:opacity-75 flex flex-wrap items-center"
                  >
                    <span className="w-14 h-14 md:w-12 md:h-12 2xl:w-12 2xl:h-12 rounded-xl bg-[#E6C3E6]/10 mr-4 flex items-center justify-center">
                      <TikTokIcon className="w-[42%] text-[#E6C3E6]" />
                    </span>
                    <span className="hidden md:block break-all">@homagames</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>


      {/* Mobile Logo */}
      <div className="grid grid-cols-5 md:grid-cols-12">
        <div className="col-span-5 block md:hidden mt-32 md:mt-0">
          <HomaLogoIcon className="w-full mb-12" />

          <div className="w-full 2xl:space-x-8">
            <a href="mailto:bonjour@homagames.com" className="w-full 2xl:w-auto text-white/40 block mb-2 hover:opacity-75 focus:opacity-75">bonjour@homagames.com</a>
            <a href="tel:+33142861324" className="w-full 2xl:w-auto text-white/40 block mb-2 hover:opacity-75 focus:opacity-75">+33 1 42 86 13 24</a>
            <span className="w-full 2xl:w-auto text-white/40 block mb-2 2xl:mr-6">Privacy</span>
            <span className="w-full 2xl:w-auto text-white/40 block">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}