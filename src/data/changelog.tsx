import { ChangelogEntry } from "@/types";

export const CHANGELOG: ChangelogEntry[] = [
  {
    id: 1,
    date: "2025-04-15",
    version: "1.1.0",
    isLatest: true,
    title: "Search when? Seach now!",
    description: "Global search for spaces now available!",
    type: "FEATURE",
    details: [
      "You can now search all public spaces",
      "Add a latest release update banner",
      "Added a changelog page",
      "Bug fixes from the past release",
    ],
  },
  {
    id: 2,
    date: "2025-04-11",
    version: "1.0.0",
    title: "Initial Release",
    description: "First public release of LinkSpace",
    type: "FEATURE",
    details: [
      "Create and manage spaces for organizing links and content",
      "Add links with rich previews",
      "Create text notes with markdown support",
      "Embed content from YouTube",
      "Public and private visibility options",
      "Responsive design for all devices",
    ],
  },
];
