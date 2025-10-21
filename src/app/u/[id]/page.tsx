import {
  getAllPublicSpacesWithBlock,
  getUserBrandingSetting,
} from "@/lib/server";
import { Metadata } from "next";
import ClientView from "./client-view";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const spaces = await getAllPublicSpacesWithBlock(id);
    const homeSpace = spaces.find((space) => space.isHome === true);

    if (!homeSpace) {
      return {
        title: "Profile Not Found | LinkSpace",
        description: "This profile does not exist or is private.",
      };
    }

    const title = `${homeSpace.title} | LinkSpace`;
    const description =
      homeSpace.description || "View my LinkSpace profile";
    const ogImageUrl = `/api/og?title=${encodeURIComponent(homeSpace.title)}&description=${encodeURIComponent(description)}`;
    const profileUrl = `https://spaces.tracepanic.com/u/${id}`;

    return {
      title,
      description: description.slice(0, 160),
      openGraph: {
        title: homeSpace.title,
        description,
        url: profileUrl,
        images: [{ url: ogImageUrl }],
      },
      twitter: {
        card: "summary_large_image",
        title: homeSpace.title,
        description,
        images: [ogImageUrl],
      },
    };
  } catch (error) {
    console.error("Metadata generation error:", error);
    return {
      title: "Profile Not Found | LinkSpace",
      description: "This profile does not exist or is private.",
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const spaces = await getAllPublicSpacesWithBlock(id);
  const homeSpace = spaces.find((space) => space.isHome === true) || null;
  const showBranding = await getUserBrandingSetting(id);

  return (
    <ClientView
      userId={id}
      homeSpace={homeSpace}
      allSpaces={spaces}
      showBranding={showBranding}
    />
  );
}
