"use client";

import { BlockRenderer } from "@/components/blocks/block-renderer";
import { HeaderNavigation } from "@/components/header-spaces";
import SocialShare from "@/components/social-share";
import StructuredData from "@/components/structured-data";
import { TinyFooter } from "@/components/tiny-footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { incrementSpaceView } from "@/lib/server";
import { SpaceWithBlocks } from "@/types";
import Link from "next/link";
import { useEffect } from "react";

interface ClientViewProps {
  userId: string;
  slug: string;
  space: SpaceWithBlocks | null;
  allSpaces: SpaceWithBlocks[];
  showBranding: boolean;
}

export default function ClientView({
  userId,
  slug,
  space,
  allSpaces,
  showBranding,
}: ClientViewProps) {
  // Track view on component mount
  useEffect(() => {
    if (space) {
      incrementSpaceView(space.id);
    }
  }, [space]);

  if (!space) {
    return (
      <div className="px-4">
        <Card className="max-w-3xl px-4 mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-destructive mb-4">
              Space Not Found
            </h2>
            <p className="text-muted-foreground mb-6">
              The space you are looking for does not exist, has been removed or
              is private.
            </p>
            <Link href="/">
              <Button variant="outline" className="mt-4">
                Go To Home Page
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const spaceUrl = `https://spaces.tracepanic.com/u/${userId}/${slug}`;

  return (
    <div>
      <StructuredData space={space} userId={userId} />
      <HeaderNavigation spaces={allSpaces} />
      
      {/* Top-right share button */}
      <div className="max-w-3xl px-4 mx-auto pt-4">
        <div className="flex justify-end">
          <SocialShare
            url={spaceUrl}
            title={space.title}
            description={space.description || undefined}
            variant="dropdown"
          />
        </div>
      </div>

      <div className="max-w-3xl py-10 px-4 mx-auto min-h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{space.title}</h1>
          <p className="text-muted-foreground mt-1">{space.description}</p>
        </div>

        {space.block.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 border rounded-lg border-dashed">
            <h2 className="text-xl font-medium">This space is empty</h2>
            <p className="text-muted-foreground mt-1">
              No content has been added yet
            </p>
          </div>
        ) : (
          <BlockRenderer blocks={space.block} />
        )}

        {/* Bottom horizontal share buttons */}
        <div className="mt-24 mb-12">
          <h2 className="text-xl font-semibold mb-4">Share this space</h2>
          <SocialShare
            url={spaceUrl}
            title={space.title}
            description={space.description || undefined}
            variant="horizontal"
          />
        </div>
      </div>

      <TinyFooter showBranding={showBranding} />
    </div>
  );
}
