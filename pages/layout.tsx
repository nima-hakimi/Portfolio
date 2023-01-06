import React from "react";
import Head from "next/head";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer>Copyright 2021</footer>
    </>
  );
};

export default Layout;
