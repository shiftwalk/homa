import DiscordIcon from "@/icons/discord.svg";
import TwitterIcon from "@/icons/twitter.svg";
import TikTokIcon from "@/icons/tiktok.svg";
import LinkedInIcon from "@/icons/linkedin.svg";
import FacebookIcon from "@/icons/facebook.svg";
import InstagramIcon from "@/icons/instagram.svg";
import TextScrambler from "./text-scrambler";
import Link from "next/link";
import ScramblePillButton from "./scramble-pill-button";

export default function SocialScroller({ contact }) {
  return (
    <div className="w-full flex flex-wrap border-t border-black">
      <div className="w-full lg:w-1/2 px-6 xl:px-10 pt-20 pb-10 lg:py-28 xl:py-32 bg-black text-white lg:bg-white lg:text-black">
        <div className="lg:sticky lg:top-28 xl:top-32 lg:pb-32 xl:pb-48 max-w-screen-md ml-auto">
          <span className="uppercase text-sm tracking-widest mb-5 lg:mb-8 block font-medium">
            <TextScrambler text="The Community" seed={5} step={1} singleLine />
          </span>

          <h3 className="font-black text-[clamp(50px,_5vw,_86px)] leading-[0.95] mb-8 lg:mb-16 uppercase max-w-[500px] xl:max-w-none">
            Making Games to build a universe
          </h3>

          <div className="content w-11/12 lg:w-10/12 mb-5 lg:mb-8">
            <p>
              We’re not just building tools to help developers build better
              games. We're creating a universe where players can take ownership
              of their favorite character and step into a web of games,
              adventure and prizes.
            </p>
          </div>

          <ScramblePillButton href="/community" label="Learn More" internal />
        </div>
      </div>

      {/* Players & Fans */}
      <div className="w-full lg:w-1/2 px-6 xl:px-10 py-12 lg:pt-[145px] xl:pt-[145px] lg:pb-24 xl:pb-24 bg-black text-white">
        <span className="uppercase text-sm tracking-widest mb-5 lg:mb-12 xl:mb-16 block font-medium">
          <TextScrambler
            text="For Players And Fans"
            seed={5}
            step={1}
            singleLine
          />
        </span>

        <div className="max-w-screen-md mr-auto">
          <ul className="w-full grid gap-6 xl:gap-10 grid-cols-12 mb-24 lg:mb-16 xl:mb-24">
            <li className="block col-span-6 lg:col-span-6">
              <a
                href={contact.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="block group w-full"
              >
                <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 group-hover:bg-[#5865F2] group-focus:bg-[#5865F2] mr-4 flex items-center justify-center">
                  <DiscordIcon className="w-[56.5%] text-[#E6C3E6] group-hover:text-white group-focus:text-white" />
                </span>

                <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                  <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">
                    Join
                  </span>

                  <span className="inline-block ml-auto text-xs tracking-widest font-medium">
                    /homagang
                  </span>
                </span>
              </a>
            </li>
            <li className="block col-span-6 lg:col-span-6">
              <a
                href={contact.tikTok}
                target="_blank"
                rel="noopener noreferrer"
                className="block group w-full"
              >
                <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 group-hover:bg-white group-focus:bg-white mr-4 flex items-center justify-center">
                  <TikTokIcon className="w-[50%] text-[#E6C3E6] group-hover:text-black group-focus:text-black" />
                </span>

                <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                  <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">
                    Follow
                  </span>

                  <span className="inline-block ml-auto text-xs tracking-widest font-medium">
                    @homagames
                  </span>
                </span>
              </a>
            </li>
          </ul>

          {/* Game Makers */}
          <span className="uppercase text-sm tracking-widest mb-5 lg:mb-24 xl:mb-16 block font-medium">
            <TextScrambler
              text="For Game Makers"
              seed={5}
              step={1}
              singleLine
            />
          </span>

          <ul className="w-full grid gap-6 xl:gap-10 grid-cols-12 mb-12 lg:mb-16 xl:mb-24">
            <li className="block col-span-6 lg:col-span-6">
              <a
                href={contact.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="block group w-full"
              >
                <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 group-hover:bg-[#5865F2] group-focus:bg-[#5865F2] mr-4 flex items-center justify-center">
                  <DiscordIcon className="w-[56.5%] text-[#E6C3E6] group-hover:text-white group-focus:text-white" />
                </span>

                <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                  <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">
                    Join
                  </span>

                  <span className="inline-block ml-auto text-xs tracking-widest font-medium">
                    /homagang
                  </span>
                </span>
              </a>
            </li>
            <li className="block col-span-6 lg:col-span-6">
              <a
                href={contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="block group w-full"
              >
                <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 group-hover:bg-[#0077b5] group-focus:bg-[#0077b5] mr-4 flex items-center justify-center">
                  <LinkedInIcon className="w-[50%] text-[#E6C3E6] group-hover:text-white group-focus:text-white" />
                </span>

                <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                  <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">
                    Follow
                  </span>

                  <span className="inline-block ml-auto text-xs tracking-widest font-medium">
                    /homa-games
                  </span>
                </span>
              </a>
            </li>
            <li className="block col-span-6 lg:col-span-6">
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block group w-full"
              >
                <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 group-hover:bg-[#4267B2] group-focus:bg-[#4267B2] mr-4 flex items-center justify-center">
                  <FacebookIcon className="w-[50%] text-[#E6C3E6] group-hover:text-white group-focus:text-white" />
                </span>

                <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                  <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">
                    Follow
                  </span>

                  <span className="inline-block ml-auto text-xs tracking-widest font-medium">
                    /homagames
                  </span>
                </span>
              </a>
            </li>
            <li className="block col-span-6 lg:col-span-6">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block group w-full group"
              >
                <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 mr-4 flex items-center justify-center relative overflow-hidden bg-opacity-50">
                  <div className="absolute inset-0 w-full h-full group-hover:bg-gradient-to-tr from-[#FCAF45] via-[#FD1D1D] to-[#405DE6] opacity-100"></div>
                  <div className="absolute inset-0 w-full h-full group-hover:bg-gradient-to-tl from-[#C13584] via-[#FD1D1D] to-[#405DE6] opacity-50"></div>

                  <div className="relative z-10 w-[50%]">
                    <InstagramIcon className="w-full text-[#E6C3E6] group-hover:text-white group-focus:text-white" />
                  </div>
                </span>

                <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                  <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">
                    Follow
                  </span>

                  <span className="inline-block ml-auto text-xs tracking-widest font-medium">
                    @homagames
                  </span>
                </span>
              </a>
            </li>
          </ul>

          {/* Web3 Community */}
          <span className="uppercase text-sm tracking-widest mb-5 lg:mb-24 xl:mb-16 block font-medium">
            <TextScrambler
              text="For Our Web3 Community"
              seed={5}
              step={1}
              singleLine
            />
          </span>

          <ul className="w-full grid gap-6 xl:gap-10 grid-cols-12">
            <li className="block col-span-6 lg:col-span-6">
              <a
                href={contact.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="block group w-full"
              >
                <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 group-hover:bg-[#5865F2] group-focus:bg-[#5865F2] mr-4 flex items-center justify-center">
                  <DiscordIcon className="w-[56.5%] text-[#E6C3E6] group-hover:text-white group-focus:text-white" />
                </span>

                <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                  <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">
                    Join
                  </span>

                  <span className="inline-block ml-auto text-xs tracking-widest font-medium">
                    /homagang
                  </span>
                </span>
              </a>
            </li>
            <li className="block col-span-6 lg:col-span-6">
              <a
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="block group w-full"
              >
                <span className="w-full aspect-square rounded-[15%] bg-[#E6C3E6]/10 group-hover:bg-[#1DA1F2] group-focus:bg-[#1DA1F2] mr-4 flex items-center justify-center">
                  <TwitterIcon className="w-[50%] text-[#E6C3E6] group-hover:text-white group-focus:text-white" />
                </span>

                <span className="w-full hidden lg:flex items-center pt-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                  <span className="inline-block border border-white text-xs uppercase tracking-widest px-2 py-1 font-medium rounded-sm">
                    Follow
                  </span>

                  <span className="inline-block ml-auto text-xs tracking-widest font-medium">
                    @homagames
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
