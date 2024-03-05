import Hero from "../components/Hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/Projects";
import Contact from "../components/contact";

import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Julias Portfolio</title>
        <meta name="description" content="Julias Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
