"use client";

import { EmbedBlock } from "@/components/blocks/embed-block";
import { LinkBlock } from "@/components/blocks/link-block";
import { TextBlock } from "@/components/blocks/text-block";
import { Block } from "@/generated/prisma";
import { EmbedBlockContent, LinkBlockContent, TextBlockContent } from "@/types";

function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block) => (
        <div key={block.id}>
          {block.type === "LINK" && (
            <LinkBlock content={block.content as LinkBlockContent} />
          )}
          {block.type === "TEXT" && (
            <TextBlock content={block.content as TextBlockContent} />
          )}
          {block.type === "EMBED" && (
            <EmbedBlock content={block.content as EmbedBlockContent} />
          )}
        </div>
      ))}
    </div>
  );
}

export { BlockRenderer };
