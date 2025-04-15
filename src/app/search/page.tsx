"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/loader";
import { formatDistanceToNow } from "@/lib/client";
import { searchSpaces } from "@/lib/server";
import { SearchResult } from "@/types";
import { Loader2, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    (async function search() {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);

      const res = await searchSpaces(query);
      setResults(res);
      setLoading(false);
    })();
  }, [query]);

  const handleSearch = () => {
    if (searchQuery) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold mb-6">Search</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search public spaces..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </div>
        </form>

        {query ? (
          <div>
            <div className="flex items-center justify-between my-6">
              <h2 className="text-xl font-semibold">
                {loading
                  ? "Searching..."
                  : `${results.length} results for "${query}"`}
              </h2>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-5">
                <Loader />
                <p className="text-muted-foreground mt-2">
                  Searching for "{query}"...
                </p>
              </div>
            ) : results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((space) => (
                  <Card
                    key={space.id}
                    className="overflow-hidden transition-all hover:shadow-md"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{space.title}</CardTitle>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {space.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <div className="flex justify-between items-center">
                        <p className="truncate">/{space.slug}</p>
                        <p>
                          Updated at{" "}
                          {formatDistanceToNow(new Date(space.updatedAt))}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Link
                        href={`/u/${space.userId}/${space.slug}`}
                        className="w-full"
                      >
                        <Button
                          variant="secondary"
                          className="w-full"
                          size="sm"
                        >
                          View Space
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 border rounded-lg border-dashed">
                <SearchIcon className="h-12 w-12 text-muted-foreground mb-4" />
                <h2 className="text-xl font-medium">No results found</h2>
                <p className="text-muted-foreground mt-1">
                  We couldn't find any matches for "{query}". Try adjusting your
                  search or filters.
                </p>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}
