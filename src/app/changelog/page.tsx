"use client";

import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CHANGELOG } from "@/data/changelog";
import { ChangelogEntry, ChangeType } from "@/types";
import { Search, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEntries = CHANGELOG.filter((entry) => {
    if (activeTab !== "ALL" && entry.type !== activeTab) return false;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        entry.title.toLowerCase().includes(query) ||
        entry.description.toLowerCase().includes(query) ||
        entry.details?.some((detail) => detail.toLowerCase().includes(query))
      );
    }

    return true;
  });

  const groupedEntries: Record<string, ChangelogEntry[]> = {};
  filteredEntries.forEach((entry) => {
    const date = new Date(entry.date);
    const monthYear = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    if (!groupedEntries[monthYear]) {
      groupedEntries[monthYear] = [];
    }

    groupedEntries[monthYear].push(entry);
  });

  const getBadgeVariant = (type: ChangeType) => {
    switch (type) {
      case "FEATURE":
        return "default";
      case "IMPROVEMENT":
        return "secondary";
      case "BUGFIX":
        return "outline";
      case "BREAKING":
        return "destructive";
      default:
        return "default";
    }
  };

  const getBadgeLabel = (type: ChangeType) => {
    switch (type) {
      case "FEATURE":
        return "New Feature";
      case "IMPROVEMENT":
        return "Improvement";
      case "BUGFIX":
        return "Bug Fix";
      case "BREAKING":
        return "Breaking Change";
      default:
        return type;
    }
  };

  return (
    <div className="w-full">
      <Header />

      <div className="container px-4 mx-auto mt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Changelog</h1>
            <p className="text-muted-foreground mt-1">
              A complete history of updates and improvements to LinkSpace
            </p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" className="w-full md:w-auto">
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="mb-8 w-full">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="ALL" className="flex-1">
                  All
                </TabsTrigger>
                <TabsTrigger value="FEATURE" className="flex-1">
                  Features
                </TabsTrigger>
                <TabsTrigger value="IMPROVEMENT" className="flex-1">
                  Improvements
                </TabsTrigger>
                <TabsTrigger value="BUGFIX" className="flex-1">
                  Bug Fixes
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search changelog..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {Object.keys(groupedEntries).length > 0 ? (
          <div className="space-y-12">
            {Object.entries(groupedEntries).map(([monthYear, entries]) => (
              <div key={monthYear}>
                <h2 className="text-xl font-semibold mb-6 pb-2 border-b">
                  {monthYear}
                </h2>
                <div className="space-y-6">
                  {entries.map((entry) => (
                    <Card
                      key={entry.id}
                      className={entry.isLatest ? "border-primary/50" : ""}
                    >
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant={getBadgeVariant(entry.type)}>
                              {getBadgeLabel(entry.type)}
                            </Badge>
                            {entry.isLatest && (
                              <Badge variant="secondary">Latest</Badge>
                            )}
                            <span className="text-sm text-muted-foreground">
                              v{entry.version}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {new Date(entry.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{entry.title}</CardTitle>
                        <CardDescription>{entry.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {entry.details && (
                          <ul className="space-y-2 list-disc pl-5">
                            {entry.details.map((detail, index) => (
                              <li key={index} className="text-sm">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col px-4 items-center justify-center py-12 border rounded-lg border-dashed">
            <Tag className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-medium">No results found</h2>
            <p className="text-muted-foreground text-center mt-1">
              {searchQuery
                ? `We couldn't find any changelog entries matching "${searchQuery}"`
                : "No changelog entries available for the selected filter"}
            </p>
            {searchQuery && (
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
