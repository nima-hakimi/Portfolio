import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Nima Hakimi">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
