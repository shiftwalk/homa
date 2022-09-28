import "@/styles/main.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SEO from "@/helpers/seo.config";

import WebGL from "@/components/webgl";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <DefaultSeo {...SEO} />
      <WebGL />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
