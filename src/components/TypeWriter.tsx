import useTypeWriter, {
  type TypeWriterParameters,
} from "@/hooks/useTypeWriter";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type Props = {
  actions: TypeWriterParameters["actions"];
  settings?: TypeWriterParameters["settings"];
  initialText?: TypeWriterParameters["initialText"];
  className?: string;
  blinkerClassName?: string;
  disabled?: boolean;
};

const TypeWriter = ({
  actions,
  settings,
  initialText,
  className,
  blinkerClassName,
  disabled,
}: Props) => {
  const { text, typeWriter } = useTypeWriter({
    actions,
    settings,
    initialText,
  });

  useEffect(() => {
    if (!disabled) typeWriter?.start();
    else typeWriter?.stop();
  }, [disabled, typeWriter, settings?.loop]);

  return (
    <span className={cn("inline-block", className)}>
      <span>{text}</span>
      <span
        aria-hidden
        className={cn(
          "inline-block animate-blink font-thin",
          { hidden: typeWriter?.isStopped() },
          blinkerClassName,
        )}
      >
        |
      </span>
    </span>
  );
};

export default TypeWriter;
