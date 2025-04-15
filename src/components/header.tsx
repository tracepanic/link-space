"use client";

import { HeaderBanner } from "@/components/header-banner";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link2, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <HeaderBanner />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Link2 className="h-6 w-6 text-purple-500" />
              <span className="hidden font-bold sm:inline-block">
                LinkSpace
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-4 ml-6">
              <Link
                href="/dashboard"
                className="text-sm font-medium transition-colors hover:text-purple-600"
              >
                Dashboard
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-1 md:space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-2xl">LinkSpace</SheetTitle>
                </SheetHeader>

                <div className="grid gap-3 ml-10 py-4">
                  <Link
                    href="/dashboard"
                    className="flex items-center font-medium"
                  >
                    Dashboard
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
