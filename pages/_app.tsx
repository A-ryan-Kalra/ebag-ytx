import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>e-bag-ytx</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Ebag" />
        <link
          rel="mask-icon"
          href="/icons/android-chrome-192x192.png"
          color="#7be1da"
        />
        <meta
          name="description"
          content="Ebag provides e-commerce services, offering a range of products."
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/android-chrome-192x192.png"
        />
        <link rel="apple-touch-icon" href="/icons/android-chrome-192x192.png" />
        <meta name="theme-color" content="#7BE1C8" />
        <link rel="shortcut icon" href="/icons/android-chrome-192x192.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ebag-ytx.vercel.app" />
        <meta name="twitter:title" content="Ebag - Go Ebag" />
        <meta
          name="twitter:description"
          content="Ebag - Ebag provides e-commerce services, offering a range of products."
        />
        <meta
          name="twitter:image"
          content="https://ebag-ytx.vercel.app/icons/android-chrome-192x192.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ebag - Go Ebag" />
        <meta
          property="og:description"
          content="Ebag - Ebag provides e-commerce services, offering a range of products."
        />
        <meta property="og:site_name" content="Ebag" />
        <meta property="og:url" content="https://ebag-ytx.vercel.app" />
        <meta
          property="og:image"
          content="https://ebag-ytx.vercel.app/icons/android-chrome-192x192.png"
        />
      </Head>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
