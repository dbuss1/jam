import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Waveform from "../components/waveform";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <header>
      <h1>🌶️ 🐅</h1>
    </header>

    <section>
      <Waveform url="https://wave.sndcdn.com/GjqmL0Sprea3_m.json" />
    </section>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      header > h1 {
        text-align: center;
        font-size: 48px;
      }
    `}</style>
  </div>
);

export default Home;
