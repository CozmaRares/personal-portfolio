import { detailFont } from "@/lib/fonts";
import type { ProjectType } from "@/lib/data";
import { HiExternalLink } from "react-icons/hi";
import { cn } from "@/lib/utils";

type Props = {
  keyPrefix: string;
  tags: ProjectType["tags"];
  className?: string;
};

const TagList = ({ keyPrefix, tags, className }: Props) => (
  <ul
    className={cn(
      detailFont.className,
      "flex flex-row flex-wrap gap-2 text-sm capitalize md:gap-4",
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
            className="inline-flex flex-row gap-1 hover:underline"
          >
            {tag.text}

            <HiExternalLink />
          </a>
        )}
      </li>
    ))}
  </ul>
);

export default TagList;
