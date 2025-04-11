"use client";

import { BlockRenderer } from "@/components/blocks/block-renderer";
import { HeaderNavigation } from "@/components/header-spaces";
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
import { useSpaceStore } from "@/lib/store";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const { getHomeSpace, getAllSpaces } = useSpaceStore();

  const params = useParams();
  const id = params.id as string;

  const space = getHomeSpace();
  const spaces = getAllSpaces();

  if (!space) {
    return (
      <Card className="max-w-3xl px-4 mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive mb-4">
            Space Not Found
          </h2>
          <p className="text-muted-foreground mb-6">
            The space you are looking for does not exist, has been removed or is
            private.
          </p>
          <Link href="/">
            <Button variant="outline" className="mt-4">
              Go To Home Page
            </Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <HeaderNavigation spaces={spaces} />
      <div className="max-w-3xl py-10 px-4 mx-auto">
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

        {spaces.filter((s) => !s.isHome).length > 0 && (
          <div className="mt-52">
            <h2 className="text-2xl font-bold mb-6">All Spaces</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {spaces
                .filter((s) => !s.isHome)
                .map((space) => (
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
                      <Link href={`/u/${id}/${space.slug}`} className="flex-1">
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
      </div>
    </div>
  );
}
