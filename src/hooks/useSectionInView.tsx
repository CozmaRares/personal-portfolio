import { useActiveSectionContext } from "@/context/active-section";
import { SectionName } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function useSectionInView(
  sectionName: SectionName,
  threshold: number,
) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, enableObserver } = useActiveSectionContext();

  useEffect(() => {
    if (inView && enableObserver()) setActiveSection(sectionName, false);
  }, [inView, setActiveSection, enableObserver, sectionName]);

  return { ref, inView };
}
