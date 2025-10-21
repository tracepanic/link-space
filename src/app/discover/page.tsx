import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "@/lib/client";
import { getDiscoverSpaces } from "@/lib/server";
import { formatViewCount, shuffleArray } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Discover Spaces | LinkSpace",
  description: "Explore public profiles from the LinkSpace community",
};

export default async function DiscoverPage() {
  const spaces = await getDiscoverSpaces(24);
  const shuffledSpaces = shuffleArray(spaces);

  if (shuffledSpaces.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-md text-center">
          <CardHeader>
            <CardTitle>No Public Spaces Yet</CardTitle>
            <CardDescription>
              Be the first to create a public space!
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Link href="/dashboard">
              <Button>Go to Dashboard</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Discover Spaces</h1>
          <p className="text-muted-foreground text-lg">
            Explore public profiles from the LinkSpace community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shuffledSpaces.map((space) => (
            <Card key={space.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="truncate">{space.title}</CardTitle>
                <CardDescription className="line-clamp-2 min-h-[2.5rem]">
                  {space.description || "No description"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Badge>{formatViewCount(space.viewCount)}</Badge>
                  </div>
                  <div>
                    Updated {formatDistanceToNow(new Date(space.updatedAt))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/u/${space.userId}`} className="w-full">
                  <Button className="w-full" variant="secondary">
                    View Profile
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
