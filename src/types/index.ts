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
