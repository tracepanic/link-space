import { Block, BlockType, Space, Visibility } from "@/generated/prisma";

export type SidebarUser = {
  name: string;
  username: string;
  imageUrl: string;
};

export type LinkBlockContent = {
  title: string;
  url: string;
  description?: string;
};

export type TextBlockContent = {
  text: string;
};

export type EmbedBlockContent = {
  embedUrl: string;
  embedType: "YOUTUBE" | "OTHER";
  caption?: string;
};

export type ActualBlock = {
  id: string;
  type: BlockType;
  order: number;
  content: LinkBlockContent | TextBlockContent | EmbedBlockContent;
};

export type SpaceWithBlocks = Space & {
  block: Block[];
};

export type PinnedSpace = {
  space: {
    id: string;
    title: string;
  };
};

export type CreateSpaceWithBlocks = {
  title: string;
  slug: string;
  description?: string;
  visibility: Visibility;
  isHome?: boolean;
  isInHeader?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: { id: string; type: BlockType; order: number; content: any }[];
};

export type ChangeType = "FEATURE" | "IMPROVEMENT" | "BUGFIX" | "BREAKING";

export type ChangelogEntry = {
  id: number;
  date: string;
  version: string;
  title: string;
  description: string;
  type: ChangeType;
  isLatest?: boolean;
  details?: string[];
};

export type SearchResult = {
  userId: string;
  id: string;
  title: string;
  slug: string;
  description: string | null;
  visibility: Visibility;
  isHome: boolean | null;
  isInHeader: boolean | null;
  createdAt: Date;
  updatedAt: Date;
};
