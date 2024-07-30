"use client";

import useSectionInView from "@/hooks/useSectionInView";
import { headingFont } from "@/lib/fonts";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { socials } from "@/lib/data";

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
      <ul className="flex flex-row items-center justify-center gap-3 text-xl sm:text-2xl [&>li:hover]:text-indigo-700 dark:[&>li:hover]:text-green-500">
        {socials.map(({ link, icon: Icon }) => (
          <li key={`socials-link-${link}`}>
            <a href={link}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Contact;
