import Link from "next/link";
import { Home, LayoutDashboard } from "lucide-react";

export function TinyFooter() {
  return (
    <footer className="w-full py-3 border-t mt-36">
      <div className="container mx-auto flex justify-center items-center gap-6 text-sm text-muted-foreground">
        <Link
          href="/"
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <Home className="h-3.5 w-3.5" />
          <span>LinkSpace</span>
        </Link>
        <div className="h-4 border-r border-border" />
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <LayoutDashboard className="h-3.5 w-3.5" />
          <span>Dashboard</span>
        </Link>
      </div>

      <div className="pt-8 container mx-auto border-t mt-3 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} LinkSpace. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link
            href="#"
            className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
