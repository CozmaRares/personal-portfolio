import TypeWriter, { Action } from "@/lib/TypeWriter";
import { useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

export type TypeWriterParameters = {
  actions: Action[];
  settings?: {
    loop?: boolean;
    delay?: number;
    typingSpeed?: number;
    deletingSpeed?: number;
  };
  initialText?: string;
};

export default function useTypeWriter({
  actions,
  settings = {},
  initialText,
}: TypeWriterParameters) {
  const [string, setString] = useState(initialText);
  const [instance, setInstance] = useState<TypeWriter>();

  useDeepCompareEffect(() => {
    const typeWriter = new TypeWriter(
      actions,
      text => setString(text),
      settings,
    );
    setInstance(typeWriter);

    return () => typeWriter.stop();
  }, [settings, actions]);

  return { text: string, typeWriter: instance };
}
