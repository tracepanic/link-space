"use client";

import { BlockRenderer } from "@/components/blocks/block-renderer";
import { HeaderNavigation } from "@/components/header-spaces";
import SocialShare from "@/components/social-share";
import StructuredData from "@/components/structured-data";
import { TinyFooter } from "@/components/tiny-footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDistanceToNow } from "@/lib/client";
import { incrementSpaceView } from "@/lib/server";
import { SpaceWithBlocks } from "@/types";
import Link from "next/link";
import { useEffect } from "react";

interface ClientViewProps {
  userId: string;
  homeSpace: SpaceWithBlocks | null;
  allSpaces: SpaceWithBlocks[];
  showBranding: boolean;
}

export default function ClientView({
  userId,
  homeSpace,
  allSpaces,
  showBranding,
}: ClientViewProps) {
  // Track view on component mount
  useEffect(() => {
    if (homeSpace) {
      incrementSpaceView(homeSpace.id);
    }
  }, [homeSpace]);

  if (!homeSpace) {
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

  const otherSpaces = allSpaces.filter((s) => !s.isHome);
  const profileUrl = `https://spaces.tracepanic.com/u/${userId}`;

  return (
    <div>
      <StructuredData space={homeSpace} userId={userId} />
      <HeaderNavigation spaces={allSpaces} />
      
      {/* Top-right share button */}
      <div className="max-w-3xl px-4 mx-auto pt-4">
        <div className="flex justify-end">
          <SocialShare
            url={profileUrl}
            title={homeSpace.title}
            variant="dropdown"
          />
        </div>
      </div>

      <div className="max-w-3xl py-10 px-4 mx-auto min-h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{homeSpace.title}</h1>
          <p className="text-muted-foreground mt-1">{homeSpace.description}</p>
        </div>

        {homeSpace.block.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 border rounded-lg border-dashed">
            <h2 className="text-xl font-medium">This space is empty</h2>
            <p className="text-muted-foreground mt-1">
              No content has been added yet
            </p>
          </div>
        ) : (
          <BlockRenderer blocks={homeSpace.block} />
        )}

        {otherSpaces.length > 0 && (
          <div className="mt-52">
            <h2 className="text-2xl font-bold mb-6">All Spaces</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherSpaces.map((space) => (
                <Card key={space.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg truncate">
                        {space.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {space.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-muted-foreground mt-auto">
                    <p>
                      {`Updated ${formatDistanceToNow(new Date(space.updatedAt))}`}
                    </p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link href={`/u/${userId}/${space.slug}`} className="flex-1">
                      <Button
                        variant="secondary"
                        className="w-full"
                        size="sm"
                      >
                        View
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Bottom horizontal share buttons */}
        <div className="mt-24 mb-12">
          <h2 className="text-xl font-semibold mb-4">Share this space</h2>
          <SocialShare
            url={profileUrl}
            title={homeSpace.title}
            variant="horizontal"
          />
        </div>
      </div>

      <TinyFooter showBranding={showBranding} />
    </div>
  );
}
