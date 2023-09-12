import TypeWriter, { Action } from "@/lib/TypeWriter";
import { useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

export default function useTypeWriter(
  actions: Action[],
  settings: {
    loop?: boolean;
    typingSpeed?: number;
    deletingSpeed?: number;
  } = {},
) {
  const [string, setString] = useState("");
  const [typeWriterInstance, setTwInst] = useState<TypeWriter>();

  useDeepCompareEffect(() => {
    const typeWriter = new TypeWriter(
      actions,
      text => setString(text),
      settings,
    );
    setTwInst(typeWriter);
    typeWriter.start();

    return () => {
      typeWriter.stop();
    };
  }, [settings, actions]);

  return { text: string, typeWriter: typeWriterInstance };
}
