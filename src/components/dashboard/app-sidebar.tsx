"use client";

import { NavMain } from "@/components/dashboard/nav-main";
import { NavProjects } from "@/components/dashboard/nav-projects";
import { NavSecondary } from "@/components/dashboard/nav-secondary";
import { NavUser } from "@/components/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarUser } from "@/types";
import { File, FilePlus, LifeBuoy, Link2, Send, Settings } from "lucide-react";
import Link from "next/link";

const mainNavs = [
  // {
  //   title: "Dashboard",
  //   url: "/dashboard",
  //   icon: House,
  // },
  {
    title: "New Space",
    url: "/dashboard/new",
    icon: FilePlus,
  },
  {
    title: "Your Spaces",
    url: "/dashboard/spaces",
    icon: File,
    isActive: true,
    items: [
      {
        title: "Public",
        url: "/dashboard/spaces/public",
      },
      {
        title: "Private",
        url: "/dashboard/spaces/private",
      },
    ],
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

const secondaryNavs = [
  {
    title: "Support",
    url: "https://forms.gle/FPQueA9G2jEJqcMh7",
    icon: LifeBuoy,
  },
  {
    title: "Feedback",
    url: "https://forms.gle/oLatLpWetnfJ5zMDA",
    icon: Send,
  },
];

export function AppSidebar({ user }: { user: SidebarUser }) {
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" onClick={() => setOpenMobile(false)}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Link2 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Link Space</span>
                  <span className="truncate text-xs">User Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainNavs} />
        <NavProjects />
        <NavSecondary items={secondaryNavs} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
