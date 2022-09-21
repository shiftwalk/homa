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
import FooterCta from '@/components/footer-cta'

// Sanity
import SanityPageService from '@/services/sanityPageService'

const query = `{
  "product": *[_type == "products" && slug.current == $slug][0] {
    title,
    slug {
      current
    }
  },
}`

const pageService = new SanityPageService(query)

export default function HomaLabChild(initialData) {
  // Sanity Data
  const { data: { product } } = pageService.getPreviewHook(initialData)()
  
  return (
    <Layout>
      <NextSeo title={product.title} />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="pt-20 lg:pt-24 xl:pt-28"
        >
          <m.div variants={fade}>
            <Container className="pb-[10vw]">
              <m.div>
                <h1 className="display-text">{product.title}</h1>
                <div className="content max-w-3xl mb-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </m.div>
            </Container>

            <FooterCta />
            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('products')
  return {
    paths: paths,
    fallback: false,
  };
}