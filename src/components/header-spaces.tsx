"use client";

import { Space } from "@/generated/prisma";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface HeaderNavigationProps {
  spaces: Space[];
}

export function HeaderNavigation({ spaces }: HeaderNavigationProps) {
  const pathname = usePathname();

  const params = useParams();
  const id = params.id as string;

  const otherSpaces = spaces.filter(
    (space) => !space.isHome && space.isInHeader,
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <div className="flex items-center">
          <nav className="flex items-center ml-6 space-x-1">
            <Link
              href={`/u/${id}`}
              className={cn(
                "px-3 py-1.5 text-sm rounded-md transition-colors",
                pathname === `/u/${id}`
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-muted",
              )}
            >
              Home
            </Link>

            {otherSpaces.length > 0 && (
              <div className="relative group">
                <button
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-md transition-colors flex items-center gap-1",
                    pathname.includes(`/u/${id}/`) &&
                      !pathname.endsWith(`/u/${id}`)
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-muted",
                  )}
                >
                  Spaces
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-popover rounded-md shadow-md border overflow-hidden">
                    {otherSpaces.map((space) => (
                      <Link
                        key={space.id}
                        href={`/u/${id}/${space.slug}`}
                        className={cn(
                          "block px-4 py-2 text-sm hover:bg-muted transition-colors",
                          pathname === `/u/${id}/${space.slug}` &&
                            "bg-primary/10 text-primary font-medium",
                        )}
                      >
                        {space.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
