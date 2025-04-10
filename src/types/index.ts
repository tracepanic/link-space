import { Block, BlockType } from "@/generated/prisma";

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
