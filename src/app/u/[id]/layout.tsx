"use client";

import { Loader } from "@/components/ui/loader";
import { useSpaceStore } from "@/lib/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = params.id as string;
  const { setSpaces } = useSpaceStore();

  useEffect(() => {
    (async function fetchData() {
      const { getAllPublicSpacesWithBlock } = await import("@/lib/server");
      const res = await getAllPublicSpacesWithBlock(id);
      if (res.length > 0) {
        setSpaces(res);
      }

      setLoading(false);
    })();
  }, [id, setSpaces]);

  if (loading) {
    return <Loader />;
  }

  return <div className="w-full">{children}</div>;
}
