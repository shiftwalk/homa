import BlockContent from '@sanity/block-content-to-react'

export default function ModularTextBlock({ text}) {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="content w-full lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
        <BlockContent serializers={{ container: ({ children }) => children }} blocks={text} />
      </div>
    </div>
  )
}