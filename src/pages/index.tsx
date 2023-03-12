import { Footer } from "@/modules/Footer";
import { Header } from "@/modules/Header";
import { Hero } from "@/modules/Hero";
import { Order } from "@/modules/Order.tsx";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Soft corp test</title>
        <meta name="description" content="Soft corp test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Header />
        <Hero />
        <Order />
        <Footer />
      </main>
    </>
  );
}
