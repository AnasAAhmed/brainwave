import { Fragment } from "react";
import Head from "next/head";import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

function MyApp({ Component, pageProps }:{Component:any,pageProps:any}) {
  return (
    <Fragment>
      <Head>
        <title>Brainwave.io</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />

    </Fragment>
  );
}

export default MyApp;