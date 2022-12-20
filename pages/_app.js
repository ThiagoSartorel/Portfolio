import '@/css/tailwind.css'
import '@/css/prism.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import Analytics from '@/components/analytics'
import GoogleAnalytics from '@bradgarropy/next-google-analytics'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      <GoogleAnalytics measurementId="G-ZY6T0H9EME" />
    </ThemeProvider>
  )
}
