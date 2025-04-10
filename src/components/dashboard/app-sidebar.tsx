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
} from "@/components/ui/sidebar";
import { SidebarUser } from "@/types";
import {
  File,
  FilePlus,
  Frame,
  LifeBuoy,
  Link2,
  Map,
  PieChart,
  Send,
} from "lucide-react";
import Link from "next/link";

const mainNavs = [
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
];

const data = {
  navMain: [
    {
      title: "New Space",
      url: "#",
      icon: FilePlus,
    },
    {
      title: "Your Spaces",
      url: "#",
      icon: File,
      isActive: true,
      items: [
        {
          title: "Public",
          url: "#",
        },
        {
          title: "Private",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ user }: { user: SidebarUser }) {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
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
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
