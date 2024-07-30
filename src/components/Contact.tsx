"use client";

import useSectionInView from "@/hooks/useSectionInView";
import { headingFont } from "@/lib/fonts";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Facebook, GithubAlt, LinkedIn } from "./FAIcons";

const Contact = () => {
  const { ref } = useSectionInView("contact", 0.6);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="max-w-[40rem] space-y-4 pb-32 text-center sm:pb-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`${headingFont.className} text-heading`}>Contact me</h2>
      <p>
        <span>Contact me directly at </span>
        <a
          className="inline-flex flex-row items-center gap-0.5 text-lg hover:underline sm:text-xl"
          href="mailto:cozmarares11@gmail.com"
        >
          cozmarares11@gmail.com
          <Mail />
        </a>
      </p>
      <p>or through one of my socials</p>
      <ul className="flex flex-row items-center justify-center gap-3 [&>li:hover]:text-indigo-700 dark:[&>li:hover]:text-green-500 text-xl sm:text-2xl">
        <li>
          <a href="https://www.linkedin.com/in/cozmarares/">
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href="https://github.com/CozmaRares/">
            <GithubAlt />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/raresoi.cozma/">
            <Facebook />
          </a>
        </li>
      </ul>
    </motion.section>
  );
};

export default Contact;
