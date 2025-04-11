import { Header } from "@/components/header";
import { HowItWorks } from "@/components/home-how-it-works";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getUserId } from "@/lib/server";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Grid,
  Home,
  Layout,
  Link2,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const id = await getUserId();

  return (
    <div className="w-full">
      <Header id={id} />

      <div className="flex flex-col min-h-screen">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.05]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="mb-4" variant="outline">
                🚀 Newly Updated
              </Badge>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl">
                  Your Digital World,{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Beautifully Organized
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create personalized spaces for your links, notes, and content.
                  Share your carefully curated collections with your audience or
                  keep them private.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href={`/u/cm9cpxy3w0004wv0uvlhfsd2f`}>
                  <Button size="lg" className="h-12 px-8">
                    View Demo Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="h-12 px-8">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-6 mt-16">
            <div className="bg-gradient-to-b from-purple-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border shadow-lg overflow-hidden">
              <div className="p-3 md:p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="aspect-[16/9] w-full rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                  <Image
                    src="/hero.png"
                    width={1200}
                    height={800}
                    alt="LinkSpace Dashboard Preview"
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                    <div className="p-4 md:p-6 text-white">
                      <p className="font-medium">
                        Your personalized profile and spaces, all in one place
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="secondary" className="mb-2">
                Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Capabilities
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                LinkSpace has lots of features to help you organize and share
                your digital life more effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <div className="bg-white dark:bg-gray-900 rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Personal Profiles
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Everyone gets their own personal profile page with a
                  customizable homepage to showcase their best content.
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/u/cm9cpxy3w0004wv0uvlhfsd2f`}
                    className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    View demo profile <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Home Space</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Create a welcoming homepage for visitors with custom content
                  that represents who you are and what you do.
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/u/cm9cpxy3w0004wv0uvlhfsd2f`}
                    className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    See home space <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Layout className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Customizable Header
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Choose which spaces appear in your navigation header, keeping
                  the most important content easily accessible.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/u/cm9cpxy3w0004wv0uvlhfsd2f"
                    className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Try it out <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Grid className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Space Gallery</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Showcase all your spaces with beautiful cards that give
                  visitors an overview of your content collections.
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/u/cm9cpxy3w0004wv0uvlhfsd2f`}
                    className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    View gallery <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Link2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Rich Content Blocks
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Add links, notes, and embedded content from YouTube, Twitter,
                  and more with our flexible block system.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/dashboard/new"
                    className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Start creating <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Public & Private Spaces
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Choose which spaces to share with the world and which to keep
                  private for your eyes only.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/dashboard/spaces"
                    className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Manage spaces <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />

        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="mb-2">Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                People Love LinkSpace
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                See what our users are saying about how LinkSpace has
                transformed the way they organize and share their digital
                content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-purple-50 dark:bg-gray-900 rounded-xl p-6 relative">
                <div className="absolute top-0 left-6 transform -translate-y-1/2 text-purple-500 dark:text-purple-400 text-5xl leading-none">
                  &quot;
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  LinkSpace has completely transformed how I share resources
                  with my audience. The ability to create both a welcoming
                  homepage and specialized topic spaces is exactly what I
                  needed.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-200 dark:bg-gray-700"></div>
                  <div className="ml-3">
                    <p className="font-semibold">Alex Johnson</p>
                    <p className="text-sm text-gray-500">Content Creator</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-gray-900 rounded-xl p-6 relative">
                <div className="absolute top-0 left-6 transform -translate-y-1/2 text-purple-500 dark:text-purple-400 text-5xl leading-none">
                  &quot;
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  I use LinkSpace to manage research for different projects. The
                  ability to choose which spaces appear in my header navigation
                  saves me so much time when switching between projects.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-200 dark:bg-gray-700"></div>
                  <div className="ml-3">
                    <p className="font-semibold">Maria Garcia</p>
                    <p className="text-sm text-gray-500">Researcher</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-gray-900 rounded-xl p-6 relative">
                <div className="absolute top-0 left-6 transform -translate-y-1/2 text-purple-500 dark:text-purple-400 text-5xl leading-none">
                  &quot;
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  As a web developer, I&apos;ve created spaces for different
                  tech stacks, tools, and resources. The space gallery on my
                  profile makes it easy for colleagues to find what they need.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-200 dark:bg-gray-700"></div>
                  <div className="ml-3">
                    <p className="font-semibold">David Chen</p>
                    <p className="text-sm text-gray-500">Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mt-4 text-lg md:text-xl text-white/90 max-w-md">
                  Create your personalized profile and start building your
                  digital spaces today. It&apos;s free and easy to get started.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/dashboard/new">
                    <Button size="lg" className="h-12 px-8">
                      Create Your First Space
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/u/cm9cpxy3w0004wv0uvlhfsd2f`}>
                    <Button size="lg" variant="secondary" className="h-12 px-8">
                      View Demo Profile
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -left-8 -top-8 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
                <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <Image
                    src="/other.png"
                    width={500}
                    height={300}
                    alt="LinkSpace in action"
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-72 mb-24">
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
      </div>
    </div>
  );
}
