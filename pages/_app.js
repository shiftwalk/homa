import "@/styles/main.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SEO from "@/helpers/seo.config";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <DefaultSeo {...SEO} />
      <WebGL />

      {pageProps.preview && (
        <div
          className={
            "fixed bottom-0 left-0 w-auto px-3 py-2 bg-red-600 text-white justify-center flex z-[200] uppercase font-mono text-sm m-3"
          }
        >
          Preview Mode -{" "}
          <a
            className={"px-1 underline"}
            href={`/api/exit-preview?currentRoute=${router.route}`}
          >
            Click To Exit
          </a>
        </div>
      )}

      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
