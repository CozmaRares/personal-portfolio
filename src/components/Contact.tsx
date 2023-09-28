"use client";

import sendEmail from "@/actions/sendEmail";
import useSectionInView from "@/hooks/useSectionInView";
import { headingFont } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useToast } from "@/components/shadcn/ui/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const { ref } = useSectionInView("contact", 0.6);
  const { toast } = useToast();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="max-w-[40rem] pb-32 text-center sm:pb-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`${headingFont.className} text-heading`}>Contact me</h2>
      <p className="pt-4 opacity-70">
        Contact me directly at{" "}
        <a href="mailto:cozmarares11@gmail.com">cozmarares11@gmail.com</a> or
        through this form.
      </p>
      <form
        className="flex flex-col gap-8 pt-12"
        action={async formData => {
          const result = await sendEmail(formData);

          console.log(result);

          if (!result.error)
            return toast({ description: "Email sent successfully!" });

          switch (result.error) {
            case "resend":
              toast({ description: result.message });
              break;
            case "zod":
              if (result.email)
                toast({
                  title: "Email",
                  description: result.email,
                  variant: "destructive",
                });
              if (result.message)
                toast({
                  title: "Message",
                  description: result.message,
                  variant: "destructive",
                });
              break;
            default:
              toast({
                description: "Something went wrong. Please try again",
                variant: "destructive",
              });
              break;
          }
        }}
      >
        <label
          htmlFor="email"
          className="sr-only"
        >
          Enter your email
        </label>
        <input
          required
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          className="border-card h-12 rounded-lg bg-white p-4 placeholder-gray-600 dark:bg-gray-800 dark:placeholder-gray-400"
        />
        <textarea
          required
          id="message"
          name="message"
          placeholder="Your message"
          className="border-card h-52 rounded-lg bg-white p-4 placeholder-gray-600 dark:bg-gray-800 dark:placeholder-gray-400"
        />
        <button
          type="submit"
          className="group flex flex-row items-center justify-center gap-2 rounded-full bg-gray-950 px-7 py-3
          text-white outline-none neon-indigo
          hover:scale-110 focus:scale-110 active:scale-105
          motion-safe:transition-transform
          dark:bg-slate-300 dark:text-black dark:neon-green sm:w-fit"
        >
          Submit
          <Send
            className="opacity-70 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:scale-[0.70]
            motion-safe:transition-transform"
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
