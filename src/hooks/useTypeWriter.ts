import TypeWriter, { Action } from "@/lib/TypeWriter";
import { useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

export default function useTypeWriter(
  actions: Action[],
  settings: {
    loop?: boolean;
    delay?: number;
    typingSpeed?: number;
    deletingSpeed?: number;
  } = {},
) {
  const [string, setString] = useState("");
  const [instance, setInstance] = useState<TypeWriter>();

  useDeepCompareEffect(() => {
    const typeWriter = new TypeWriter(
      actions,
      text => setString(text),
      settings,
    );
    setInstance(typeWriter);
    typeWriter.start();

    return () => {
      typeWriter.stop();
    };
  }, [settings, actions]);

  return { text: string, typeWriter: instance };
}
