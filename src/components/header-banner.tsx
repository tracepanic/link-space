"use client";
import { useState, useEffect } from "react";
import { X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderBannerProps {
  className?: string;
}

export function HeaderBanner({ className }: HeaderBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [hasAnimation, setHasAnimation] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("notification_banner_dismissed");
    if (dismissed) {
      const dismissedTime = Number.parseInt(dismissed, 10);
      const now = Date.now();
      if (now - dismissedTime < 24 * 60 * 60 * 1000) {
        setIsVisible(false);
      }
    }

    const timer = setTimeout(() => {
      setHasAnimation(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setHasAnimation(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem(
        "notification_banner_dismissed",
        Date.now().toString(),
      );
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "bg-primary text-primary-foreground w-full transition-all duration-300 overflow-hidden",
        hasAnimation
          ? "max-h-16 sm:max-h-12 py-2 opacity-100"
          : "max-h-0 py-0 opacity-0",
        className,
      )}
    >
      <div className="container mx-auto flex items-center justify-between text-sm px-2 sm:px-4">
        <div className="flex items-center gap-1 sm:gap-2">
          <Bell className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm line-clamp-2 sm:line-clamp-1">
            <span className="font-medium">New:</span> Comments & Feedback now
            available!
          </span>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <Link
            href="/changelog"
            className="text-xs sm:text-sm underline underline-offset-2 sm:underline-offset-4 hover:text-primary-foreground/90 mr-1"
          >
            Details
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 sm:h-6 sm:w-6 rounded-full hover:bg-primary-foreground/20 flex-shrink-0"
            onClick={handleDismiss}
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Dismiss</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
