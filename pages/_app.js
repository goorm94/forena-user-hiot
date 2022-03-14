//import '../styles/index.css'
import { Globals } from '@react-spring/shared'

import '@/css/tailwind.css'
import '@/css/embla.css'
import { ThemeProvider } from 'next-themes'
import LayoutWrapper from "@/components/LayoutWrapper";
import Head from "next/head";
import {CMS_NAME} from "@/lib/constants";
import Meta from "@/components/meta";

export default function MyApp({ Component, pageProps }) {
    console.warn = function () {}

    Globals.assign({
        frameLoop: 'always',
    })
  return (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Head>
              <title>[FORENA] {CMS_NAME}</title>
              <Meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          <LayoutWrapper>
          <Component {...pageProps} />
          </LayoutWrapper>

      </ThemeProvider>

  )
}
