import Hero from "@/components/Hero";
import Header from "../components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}
