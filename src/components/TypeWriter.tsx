import useTypeWriter from "@/hooks/useTypeWriter";
import { cn } from "@/lib/utils";

//TODO: stop typewriter when out of screen
const TypeWriter: React.FC<{
  typeWriter: Parameters<typeof useTypeWriter>;
  className?: string;
  blinkerClassName?: string;
}> = ({ typeWriter: typeWrProps, className, blinkerClassName }) => {
  const { text, typeWriter } = useTypeWriter(...typeWrProps);

  return (
    <span className={cn("inline-block", className)}>
      <span>{text}</span>
      <span
        aria-hidden
        className={cn(
          "animate-blink inline-block",
          { hidden: !typeWriter?.isRunning() },
          blinkerClassName,
        )}
      >
        |
      </span>
    </span>
  );
};

export default TypeWriter;