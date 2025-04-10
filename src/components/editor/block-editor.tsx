"use client";

import { EmbedBlockEditor } from "@/components/editor/embed-block-editor";
import { LinkBlockEditor } from "@/components/editor/link-block-editor";
import { TextBlockEditor } from "@/components/editor/text-block-editor";
import { Button } from "@/components/ui/button";
import { BlockType } from "@/generated/prisma";
import { ActualBlock } from "@/types";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { ArrowDown, ArrowUp, GripVertical, Trash2 } from "lucide-react";

interface BlockEditorProps {
  blocks: ActualBlock[];
  onChange: (blocks: ActualBlock[]) => void;
  onAddBlock: (type: BlockType) => void;
}

function BlockEditor({ blocks, onChange, onAddBlock }: BlockEditorProps) {
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = [...blocks];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedBlocks = items.map((block, index) => ({
      ...block,
      order: index,
    }));

    onChange(updatedBlocks);
  };

  const moveBlockUp = (index: number) => {
    if (index === 0) return;

    const items = [...blocks];
    const temp = items[index - 1];
    items[index - 1] = items[index];
    items[index] = temp;

    const updatedBlocks = items.map((block, idx) => ({
      ...block,
      order: idx,
    }));

    onChange(updatedBlocks);
  };

  const moveBlockDown = (index: number) => {
    if (index === blocks.length - 1) return;

    const items = [...blocks];
    const temp = items[index + 1];
    items[index + 1] = items[index];
    items[index] = temp;

    const updatedBlocks = items.map((block, idx) => ({
      ...block,
      order: idx,
    }));

    onChange(updatedBlocks);
  };

  const removeBlock = (index: number) => {
    const items = [...blocks];
    items.splice(index, 1);

    const updatedBlocks = items.map((block, idx) => ({
      ...block,
      order: idx,
    }));

    onChange(updatedBlocks);
  };

  const updateBlockContent = (index: number, content: any) => {
    const items = [...blocks];
    items[index] = {
      ...items[index],
      content,
    };

    onChange(items);
  };

  return (
    <div className="space-y-6">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="blocks">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-6"
            >
              {blocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="relative group"
                    >
                      <div className="absolute -left-10 top-1/2 -translate-y-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div
                          {...provided.dragHandleProps}
                          className="cursor-grab p-1"
                        >
                          <GripVertical className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="absolute -right-14 top-1/2 -translate-y-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => moveBlockUp(index)}
                          disabled={index === 0}
                        >
                          <ArrowUp className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => moveBlockDown(index)}
                          disabled={index === blocks.length - 1}
                        >
                          <ArrowDown className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => removeBlock(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {block.type === "LINK" && (
                        <LinkBlockEditor
                          content={block.content}
                          onChange={(content) =>
                            updateBlockContent(index, content)
                          }
                        />
                      )}
                      {block.type === "TEXT" && (
                        <TextBlockEditor
                          content={block.content}
                          onChange={(content) =>
                            updateBlockContent(index, content)
                          }
                        />
                      )}
                      {block.type === "EMBED" && (
                        <EmbedBlockEditor
                          content={block.content}
                          onChange={(content) =>
                            updateBlockContent(index, content)
                          }
                        />
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export { BlockEditor };
