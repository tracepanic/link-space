"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader } from "@/components/ui/loader";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { getPinnedSpaces } from "@/lib/server";
import { usePinStore } from "@/lib/store";
import { Edit, Eye, MoreHorizontal, Pin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function NavProjects() {
  const [loading, setLoading] = useState(true);

  const { pins, setAllPins } = usePinStore();
  const { isMobile } = useSidebar();
  const { setOpenMobile } = useSidebar();

  useEffect(() => {
    (async function getSpaces() {
      const res = await getPinnedSpaces();
      const simplifiedPins = res.map((item) => ({
        id: item.space.id,
        title: item.space.title,
      }));
      setAllPins(simplifiedPins);
      setLoading(false);
    })();
  }, []);

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Pinned Spaces</SidebarGroupLabel>
      {loading ? (
        <Loader size={20} className="mt-2" />
      ) : (
        <SidebarMenu>
          {pins.map((pin) => (
            <SidebarMenuItem key={pin.id}>
              <SidebarMenuButton asChild>
                <Link
                  href={`/dashboard/spaces/view/${pin.id}`}
                  onClick={() => setOpenMobile(false)}
                >
                  <Pin />
                  <span>{pin.title}</span>
                </Link>
              </SidebarMenuButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48"
                  side={isMobile ? "bottom" : "right"}
                  align={isMobile ? "end" : "start"}
                >
                  <DropdownMenuItem>
                    <Link
                      className="flex items-center gap-3"
                      href={`/dashboard/spaces/view/${pin.id}`}
                      onClick={() => setOpenMobile(false)}
                    >
                      <Eye className="text-muted-foreground" />
                      <span>View Space</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      className="flex items-center gap-3"
                      href={`/dashboard/spaces/edit/${pin.id}`}
                      onClick={() => setOpenMobile(false)}
                    >
                      <Edit className="text-muted-foreground" />
                      <span>Edit Space</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      )}
    </SidebarGroup>
  );
}
