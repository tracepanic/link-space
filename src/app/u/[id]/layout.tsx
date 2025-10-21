"use client";

import { Loader } from "@/components/ui/loader";
import { useSpaceStore } from "@/lib/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}
