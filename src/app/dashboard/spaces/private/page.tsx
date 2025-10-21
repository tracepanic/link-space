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
import { Loader } from "@/components/ui/loader";
import { Space } from "@/generated/prisma";
import { formatDistanceToNow } from "@/lib/client";
import { deleteSpace, getAllPrivateSpaces } from "@/lib/server";
import { usePinStore } from "@/lib/store";
import { formatViewCount } from "@/lib/utils";
import { Edit, Eye, Globe, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [spaces, setSpaces] = useState<Space[] | []>([]);
  const [filteredSpaces, setFilteredSpaces] = useState<Space[] | []>([]);

  const { removePinById, checkPinExists } = usePinStore();

  useEffect(() => {
    (async function getSpaces() {
      const res = await getAllPrivateSpaces();
      setSpaces(res);
      setFilteredSpaces(res);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const results = spaces.filter(
      (space) =>
        space.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        space.description?.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredSpaces(results);
  }, [searchQuery, spaces]);

  const handleDeleteSpace = async (id: string) => {
    const toastId = toast.loading("Deleting space...");
    setIsDeleting(true);

    const res = await deleteSpace(id);

    toast.dismiss(toastId);
    setIsDeleting(false);

    if (res && res.success) {
      setSpaces((prevSpaces) => prevSpaces.filter((space) => space.id !== id));
      setFilteredSpaces((prevFilteredSpaces) =>
        prevFilteredSpaces.filter((space) => space.id !== id),
      );

      if (checkPinExists(id)) {
        removePinById(id);
      }
      toast.success("Space deleted successfully");
    } else {
      toast.error("Failed to delete space");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Private Spaces</h1>
          <p className="text-muted-foreground mt-1">
            Create, manage and share your link collections
          </p>
        </div>
        <Link href="/dashboard/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Space
          </Button>
        </Link>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search spaces..."
          className="pl-10 max-w-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
            <Link href="/dashboard/new">
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
                  <CardTitle className="text-lg line-clamp-1">
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
                <Link
                  href={`/dashboard/spaces/view/${space.id}`}
                  className="flex-1"
                >
                  <Button variant="secondary" className="w-full" size="sm">
                    View
                  </Button>
                </Link>
                <Link
                  href={`/dashboard/spaces/edit/${space.id}`}
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full" size="sm">
                    <Edit className="h-3.5 w-3.5 mr-1" />
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:text-destructive"
                  onClick={() => handleDeleteSpace(space.id)}
                  disabled={isDeleting}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
