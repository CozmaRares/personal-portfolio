import useTypeWriter from "@/hooks/useTypeWriter";
import { cn } from "@/lib/utils";

type Props = {
  typeWriter: Parameters<typeof useTypeWriter>;
  className?: string;
  blinkerClassName?: string;
};

const TypeWriter = ({
  typeWriter: typeWrProps,
  className,
  blinkerClassName,
}: Props) => {
  const { text, typeWriter } = useTypeWriter(...typeWrProps);

  return (
    <span className={cn("inline-block", className)}>
      <span>{text}</span>
      <span
        aria-hidden
        className={cn(
          "inline-block animate-blink font-thin",
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
