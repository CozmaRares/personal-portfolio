"use client";

import { cn } from "@/lib/utils";
import { type MotionProps, motion } from "framer-motion";

type Props = {
  className?: string;
};

const setClass = (className = "") =>
  cn(
    "w-[3px] bg-gradient-to-b from-indigo-400 via-indigo-400 via-20% dark:from-green-500 dark:via-green-500",
    className,
  );

const Line = ({ className }: Props) => <div className={setClass(className)} />;

Line.motion = (props: MotionProps & { className?: string }) => (
  <motion.div
    {...props}
    className={setClass(props.className)}
  />
);

type BreakPointProps = { children: React.ReactNode };

Line.breakPoint = ({ children }: BreakPointProps) => (
  <div className="inline-grid py-4">
    <span className="col-span-full row-span-full p-1">{children}</span>
    <span className="-z-10 col-span-full row-span-full aspect-square rounded-full bg-purple-300/70 blur-sm dark:bg-cyan-900/70" />
  </div>
);

Line.containerClass = "line-container";

export default Line;
