import { type ClassValue, clsx } from "clsx";
import type { Metadata } from "next/types";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;

  if (error && typeof error === "object" && "message" in error)
    return String(error.message);

  if (typeof error === "string") return error;

  return "Something went wrong. Please try again.";
}

type ColorEnum = "light" | "dark" | "light dark" | "dark light";

export function createMetadata({
  title,
  description,
  url,
  author,
  image,
  themes,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  author: string;
  url: URL;
  image: string;
  themes: Array<{ theme: "light" | "dark"; color: string }>;
  keywords: string[];
  noIndex?: boolean;
}): Metadata {
  const themeColor = themes.map(({ theme, color }) => ({
    media: `(prefers-color-scheme: ${theme})`,
    color,
  }));
  const colorScheme = themes.map(({ theme }) => theme).join(" ") as ColorEnum;

  return {
    metadataBase: url,
    title,
    description,
    applicationName: title,
    authors: { name: author },
    keywords,
    themeColor,
    colorScheme,
    viewport: "width=device-width, initial-scale=1",
    creator: author,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: title,
      images: [{ url: image }],
    },
    appleWebApp: true,
    robots: { index: !noIndex, follow: !noIndex },
  };
}
