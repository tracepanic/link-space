"use client";

import { BlockRenderer } from "@/components/blocks/block-renderer";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { getPrivateUserSpace } from "@/lib/server";
import { SpaceWithBlocks } from "@/types";
import { Eye, Lock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function Render({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [space, setSpace] = useState<SpaceWithBlocks | null>(null);

  useEffect(() => {
    (async function getSpace() {
      const res = await getPrivateUserSpace(id);
      if (!res) {
        return notFound;
      }

      setSpace(res);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!space) {
    return notFound;
  }

  return (
    <>
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
        <Link href={`/dashboard/spaces/edit/${space.id}`}>
          <Button variant="outline" className="mt-4 md:mt-0">
            Edit Space
          </Button>
        </Link>
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
    </>
  );
}
