import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HelpWidget from "../components/HelpWidget";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
      <HelpWidget/>
      </main>
    </>
  );
};

export default Home;
