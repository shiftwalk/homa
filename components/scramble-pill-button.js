import Link from "next/link";
import TextScrambler from "./text-scrambler";
import ConditionalWrap from 'conditional-wrap';

export default function ScramblePillButton({ href, label, internal, className }) {
  return (
    <ConditionalWrap
      condition={!!internal}
      wrap={children => (
        <Link href={href}>
          {children}
        </Link>
      )}
    >
      <a
        {...{
          ...(!internal && { href: href, target: "_blank", rel: "noopener noreferrer" }),
        }}
        className={`pill-btn group ${className}`}
      >
        <div className="relative">
          <span className="block group-hover:opacity-0">{label}</span>
          <span className="absolute top-0 left-0 right-0 hidden  group-hover:block"><TextScrambler text={label} seed={5} step={1} singleLine /></span>
        </div>
      </a>
    </ConditionalWrap>
  )
}