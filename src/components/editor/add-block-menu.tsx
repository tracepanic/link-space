"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BlockType } from "@/generated/prisma";
import { FileText, LinkIcon, PlayCircle, Plus } from "lucide-react";

interface AddBlockMenuProps {
  onAddBlock: (type: BlockType) => void;
}

export function AddBlockMenu({ onAddBlock }: AddBlockMenuProps) {
  return (
    <div className="flex justify-center my-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Block
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onAddBlock("LINK")}>
            <LinkIcon className="mr-2 h-4 w-4" />
            <span>Link</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onAddBlock("TEXT")}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Text Note</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onAddBlock("EMBED")}>
            <PlayCircle className="mr-2 h-4 w-4" />
            <span>Embed</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
