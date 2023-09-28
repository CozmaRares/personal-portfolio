import { detailFont } from "@/lib/fonts";
import type { ProjectType } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

type Props = {
  keyPrefix: string;
  tags: ProjectType["tags"];
  className?: string;
};

const TagList = ({ keyPrefix, tags, className }: Props) => (
  <ul
    className={cn(
      detailFont.className,
      "flex flex-row flex-wrap items-center gap-2 text-sm md:gap-4",
      className,
    )}
  >
    {tags.map(tag => (
      <li key={`${keyPrefix}-${tag}`}>
        {typeof tag == "string" ? (
          tag
        ) : (
          <a
            href={tag.link}
            target="_blank"
            className="flex flex-row items-center hover:underline"
          >
            {tag.text}
            <ExternalLink className="scale-75" />
          </a>
        )}
      </li>
    ))}
  </ul>
);

export default TagList;
