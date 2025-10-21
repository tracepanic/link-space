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
import { getTrendingSpaces } from "@/lib/server";
import { formatViewCount } from "@/lib/utils";
import { Eye } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Trending Spaces | LinkSpace",
  description: "Most viewed spaces this week",
};

export default async function TrendingPage() {
  const spaces = await getTrendingSpaces(20, 7);

  if (spaces.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="max-w-md text-center">
          <CardHeader>
            <CardTitle>No Trending Spaces Yet</CardTitle>
            <CardDescription>
              Check back soon to see what's trending!
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Link href="/discover">
              <Button>Discover Spaces</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Trending Spaces</h1>
          <p className="text-muted-foreground text-lg">
            Most viewed spaces this week
          </p>
        </div>

        <div className="space-y-4">
          {spaces.map((space, index) => (
            <Card key={space.id} className="overflow-hidden">
              <div className="flex items-stretch">
                {/* Rank badge */}
                <div className="bg-primary/10 flex items-center justify-center px-6 min-w-[80px]">
                  <span className="text-3xl font-bold text-primary">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <CardHeader className="pb-3">
                    <CardTitle className="truncate">{space.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {space.description || "No description"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Eye className="h-3.5 w-3.5" />
                        <span>{formatViewCount(space.viewCount)}</span>
                      </div>
                      <div>
                        Updated {formatDistanceToNow(new Date(space.updatedAt))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/u/${space.userId}`}>
                      <Button variant="secondary" size="sm">
                        View Profile
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
