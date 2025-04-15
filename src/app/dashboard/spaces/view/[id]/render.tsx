"use client";

import { BlockRenderer } from "@/components/blocks/block-renderer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";
import { getPrivateUserSpace, pinSpace, unpinSpace } from "@/lib/server";
import { usePinStore } from "@/lib/store";
import { SpaceWithBlocks } from "@/types";
import { Eye, Lock, Pin, PinOff, Share2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Render({
  id,
  userId,
}: {
  id: string;
  userId: string | undefined;
}) {
  const [loading, setLoading] = useState(true);
  const [space, setSpace] = useState<SpaceWithBlocks | null>(null);
  const [isUpdatingPin, setIsUpdatingPin] = useState(false);

  const { checkPinExists, removePinById, addPin } = usePinStore();

  useEffect(() => {
    (async function getSpace() {
      const res = await getPrivateUserSpace(id);

      setSpace(res);
      setLoading(false);
    })();
  }, [id]);

  const handleUpdatePin = async (id: string, title: string) => {
    setIsUpdatingPin(true);

    if (checkPinExists(id)) {
      const toastId = toast.loading("Unpinning space...");
      const res = await unpinSpace(id);

      toast.dismiss(toastId);

      if (res && res.success) {
        removePinById(id);
        toast.success("Space unpinned successfully");
      } else {
        toast.error("Failed to unpin space");
      }

      setIsUpdatingPin(false);
    } else {
      const toastId = toast.loading("Pinning space...");
      const res = await pinSpace(id);

      toast.dismiss(toastId);

      if (res && res.success) {
        addPin({ id, title });
        toast.success("Space pinned successfully");
      } else {
        toast.error("Failed to pin space");
      }

      setIsUpdatingPin(false);
    }
  };

  const handleCopySpace = (slug: string) => {
    let url: string;

    if (space?.isHome) {
      url = `${window.location.origin}/u/${userId}`;
    } else {
      url = `${window.location.origin}/u/${userId}/${slug}`;
    }

    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard");
  };

  if (loading) {
    return <Loader />;
  }

  if (!space) {
    return (
      <Card>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive mb-4">
            Space Not Found
          </h2>
          <p className="text-muted-foreground mb-6">
            The space you are looking for does not exist or has been removed.
          </p>
          <Link href="/dashboard/spaces">
            <Button variant="outline" className="mt-4">
              Go Back to Spaces
            </Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">{space.title}</h1>
            {space.visibility === "PRIVATE" && (
              <Lock className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
          <p className="text-muted-foreground mt-1">{space.description}</p>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button
            size="icon"
            variant="outline"
            disabled={isUpdatingPin}
            onClick={() => handleUpdatePin(space.id, space.title)}
          >
            {checkPinExists(space.id) ? <PinOff /> : <Pin />}
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="icon" variant="outline">
                <Share2 />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Share this space?</AlertDialogTitle>
                <AlertDialogDescription>
                  You can share this space with others by copying the link
                  below. You can only share public spaces.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleCopySpace(space.slug)}>
                  Copy Link
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Link href={`/dashboard/spaces/edit/${space.id}`}>
            <Button variant="outline">Edit Space</Button>
          </Link>
        </div>
      </div>

      {space.block.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 border rounded-lg border-dashed">
          <Eye className="h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-medium">This space is empty</h2>
          <p className="text-muted-foreground mt-1">
            No content has been added yet
          </p>
        </div>
      ) : (
        <BlockRenderer blocks={space.block} />
      )}
    </div>
  );
}
