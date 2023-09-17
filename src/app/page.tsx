import About from "@/components/About";
import Intro from "@/components/Intro";
import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Home = () => (
  <>
    <div
      className="absolute right-0 top-16 -z-10 h-80 w-[25rem] rounded-full bg-purple-200 blur-[100px]
      dark:bg-emerald-800
      sm:right-8 sm:h-[30rem] sm:w-[45rem]
      xl:right-48"
    />
    <div
      className="absolute -top-32 right-0 -z-10 h-80 w-[30rem] rounded-full bg-pink-200 blur-[100px]
      dark:bg-cyan-800
      sm:[right:initial]
      md:left-8 md:h-[25rem] md:w-[40rem]
      lg:left-12
      xl:left-60"
    />
    <main className="mb-20 overflow-x-hidden px-4 pt-24 sm:pt-0">
      <Intro />
      <About />
      <FeaturedProjects />
      <Projects />
      <div className="space-bottom"/>
      <Skills/>
    </main>
  </>
);
export default Home;
