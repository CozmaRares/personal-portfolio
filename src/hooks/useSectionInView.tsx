import { useActiveSectionContext } from "@/context/active-section";
import { SectionName } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function useSectionInView(
  sectionName: SectionName,
  threshold = 0.75,
) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, enableObserver } = useActiveSectionContext();

  useEffect(() => {
    if (inView && enableObserver()) setActiveSection(sectionName);
  }, [inView, setActiveSection, enableObserver, sectionName]);

  return { ref, inView };
}
