import Head from "next/head";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-primary-light flex flex-col justify-center py-6 sm:py-12">
      <Head>
        <title>Nima Hakimi</title>
        <meta
          name="description"
          content="A simple Next.js app with TypeScript and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative px-4 py-8 sm:py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-8 bg-white shadow-lg sm:rounded-3xl sm:p-10">
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-4">
            Welcome to My Next.js App!
          </h1>
          <p className="text-sm sm:text-base text-center">
            This is a simple Next.js application with TypeScript and Tailwind
            CSS. Start building your project by adding components and pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
