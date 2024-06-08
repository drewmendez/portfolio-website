import Hero from "@/components/Hero";
import Header from "../components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  );
}
