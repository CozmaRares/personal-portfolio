import { links } from "@/lib/data";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <header className="fixed left-1/2 w-full -translate-x-1/2 bg-white bg-opacity-70 px-2 py-4 capitalize backdrop-blur neon-amber dark:bg-gray-950 dark:neon-sky sm:top-5 sm:w-[30rem] sm:rounded-full">
        <nav>
          <ul className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
            {links.map(link => (
              <li key={link}>
                <Link href={`#${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className=""></main>
    </>
  );
};

export default Home;
