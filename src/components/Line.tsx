"use client";

import { cn } from "@/lib/utils";
import { type MotionProps, motion } from "framer-motion";

type Props = {
  className?: string;
};

const setClass = (className = "") =>
  cn("w-[3px] bg-gradient-to-b from-indigo-400 dark:from-green-500", className);

const Line = ({ className }: Props) => <div className={setClass(className)} />;

Line.motion = (props: MotionProps & { className?: string }) => (
  <motion.div
    {...props}
    className={setClass(props.className)}
  />
);

type BreakPointProps = { children: React.ReactNode };

Line.breakPoint = ({ children }: BreakPointProps) => (
  <div className="inline-grid scale-125 py-4 text-indigo-800 dark:text-green-400 ">
    <span className="col-span-full row-span-full p-2">{children}</span>
    <span className="-z-10 col-span-full row-span-full aspect-square rounded-full bg-purple-300/60 blur-sm dark:bg-cyan-900/60" />
  </div>
);

Line.containerClass = "line-container" as const;

export default Line;
