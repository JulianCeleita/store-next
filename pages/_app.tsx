import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";
import CartProvider from "../components/Cart";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Store Next</title>
        <meta
          content="width=device-width,
        initial-scale=1"
          name="viewport"
        />
        <link rel="icon" href="/store.ico" />
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

{
  /* <Layout>
  <Component {...pageProps} />
</Layout> */
}
