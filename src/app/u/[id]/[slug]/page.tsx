import {
  getAllPublicSpacesWithBlock,
  getUserBrandingSetting,
} from "@/lib/server";
import { Metadata } from "next";
import ClientView from "./client-view";

interface PageProps {
  params: Promise<{ id: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id, slug } = await params;

  try {
    const spaces = await getAllPublicSpacesWithBlock(id);
    const space = spaces.find((s) => s.slug === slug);

    if (!space) {
      return {
        title: "Space Not Found | LinkSpace",
        description: "This space does not exist or is private.",
      };
    }

    const title = `${space.title} | LinkSpace`;
    const description = space.description || "View this LinkSpace";
    const ogImageUrl = `/api/og?title=${encodeURIComponent(space.title)}&description=${encodeURIComponent(description)}`;
    const spaceUrl = `https://spaces.tracepanic.com/u/${id}/${slug}`;

    return {
      title,
      description: description.slice(0, 160),
      openGraph: {
        title: space.title,
        description,
        url: spaceUrl,
        images: [{ url: ogImageUrl }],
      },
      twitter: {
        card: "summary_large_image",
        title: space.title,
        description,
        images: [ogImageUrl],
      },
    };
  } catch (error) {
    console.error("Metadata generation error:", error);
    return {
      title: "Space Not Found | LinkSpace",
      description: "This space does not exist or is private.",
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { id, slug } = await params;

  const spaces = await getAllPublicSpacesWithBlock(id);
  const space = spaces.find((s) => s.slug === slug) || null;
  const showBranding = await getUserBrandingSetting(id);

  return (
    <ClientView
      userId={id}
      space={space}
      allSpaces={spaces}
      showBranding={showBranding}
    />
  );
}
