// Tools
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

// Transitions
import { fade } from '@/helpers/transitions'

// Components
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import MousePosition from '@/components/mouse-position'
import DayInfo from '@/components/day-info'
import TextScrambler from '@/components/text-scrambler'


// Sanity
import SanityPageService from '@/services/sanityPageService'
import SanityBlockContent from '@sanity/block-content-to-react'

const query = `{
  "privacy": *[_type == "privacy"][0] {
    title,
    text,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "contact": *[_type == "contact"][0]{
    email,
    phone,
    twitter,
    instagram,
    linkedIn,
    facebook,
    tikTok,
    discord
  }
}`

const pageService = new SanityPageService(query)

export default function Privacy(initialData) {
  // Sanity Data
  const { data: { privacy, contact } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo
        title={privacy.seo?.metaTitle ? privacy.seo?.metaTitle : 'Privacy'}
        description={privacy.seo?.metaDesc ? privacy.seo?.metaDesc : null}
        openGraph={{
          title: privacy.seo?.metaTitle ? privacy.seo?.metaTitle : privacy.title,
          description: privacy.seo?.metaDesc ? privacy.seo?.metaDesc : null,
          images: privacy.seo?.shareGraphic?.asset[
            {
              url: privacy.seo?.shareGraphic?.asset.url ? privacy.seo?.shareGraphic?.asset.url : null,
              width: privacy.seo?.shareGraphic?.asset.metadata.dimensions.width ? privacy.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: privacy.seo?.shareGraphic?.asset.metadata.dimensions.height ? privacy.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ]
        }}
      />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.div variants={fade}>
            <div className="w-full bg-pink pt-32 pb-16 lg:pt-40 l:pb-32 xl:pt-52 xl:pb-40 border-b border-black/50 px-6 xl:px-10 mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 mt-24 lg:mt-28 xl:mt-32 px-6 xl:px-10 text-[11px] uppercase tracking-widest font-medium leading-none text-right hidden lg:block">
                <DayInfo className="mb-1" />
                <MousePosition />
              </div>

              <div className="max-w-screen-3xl mx-auto">
                <h1 className="font-black text-[clamp(50px,_9vw,190px)] leading-[0.95] tracking-tight mb-4 uppercase relative z-10 w-11/12 lg:w-full"><TextScrambler text="Privacy Policy" seed={15} step={2} /></h1>
              </div>
            </div>

            <Container>
              <div className="pt-[10vw] pb-[10vw] max-w-[800px] mx-auto">
                <div className="w-full content">
                  <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={privacy.text} />
                </div>
              </div>
            </Container>

            <Footer contact={contact} />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

// Sanity CMS Props
export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}