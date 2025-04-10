"use client";

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
import { Space } from "@/generated/prisma";
import { formatDistanceToNow } from "@/lib/client";
import { getAllSpaces } from "@/lib/server";
import { Edit, Globe, Lock, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [spaces, setSpaces] = useState<Space[] | []>([]);
  const [filteredSpaces, setFilteredSpaces] = useState<Space[] | []>([]);

  useEffect(() => {
    (async function getSpaces() {
      const res = await getAllSpaces();
      setSpaces(res);
      setFilteredSpaces(res);
    })();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Spaces</h1>
          <p className="text-muted-foreground mt-1">
            Create, manage and share your link collections
          </p>
        </div>
        <Link href="/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Space
          </Button>
        </Link>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search spaces..." className="pl-10 max-w-sm" />
      </div>

      {filteredSpaces.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
          <div className="rounded-full bg-primary/10 p-3">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">No spaces found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {searchQuery
              ? "No spaces match your search query"
              : "Start by creating your first space"}
          </p>
          {!searchQuery && (
            <Link href="/new">
              <Button className="mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Create Space
              </Button>
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
          {filteredSpaces.map((space) => (
            <Card key={space.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg truncate max-w-[50%]">
                    {space.title}
                  </CardTitle>
                  <div className="flex items-center text-xs text-muted-foreground">
                    {space.visibility === "PUBLIC" ? (
                      <Globe className="h-3.5 w-3.5 mr-1" />
                    ) : (
                      <Lock className="h-3.5 w-3.5 mr-1" />
                    )}
                    {space.visibility}
                  </div>
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
                <Link href={`/space/${space.slug}`} className="flex-1">
                  <Button variant="secondary" className="w-full" size="sm">
                    View
                  </Button>
                </Link>
                <Link href={`/edit/${space.id}`} className="flex-1">
                  <Button variant="outline" className="w-full" size="sm">
                    <Edit className="h-3.5 w-3.5 mr-1" />
                    Edit
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
