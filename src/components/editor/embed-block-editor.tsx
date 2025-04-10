"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateEmbedCode, getYoutubeVideoId } from "@/lib/client";
import { EmbedBlockContent } from "@/types";
import { useEffect, useState } from "react";

interface EmbedBlockEditorProps {
  content: any;
  onChange: (content: EmbedBlockContent) => void;
}

function EmbedBlockEditor({ content, onChange }: EmbedBlockEditorProps) {
  const [sourceUrl, setSourceUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const { embedUrl, embedType, caption } = content;

  useEffect(() => {
    if (embedUrl && !sourceUrl) {
      setSourceUrl(embedUrl);
    }
  }, [embedUrl, sourceUrl]);

  const processUrl = (url: string) => {
    setSourceUrl(url);
    setIsProcessing(true);

    if (!url) {
      onChange({
        ...content,
        embedUrl: "",
        embedType: "OTHER",
      });
      setIsProcessing(false);
      return;
    }

    let newEmbedType = "OTHER";

    if (getYoutubeVideoId(url)) {
      newEmbedType = "YOUTUBE";
    }

    const newEmbedUrl = generateEmbedCode(url) || url;

    onChange({
      ...content,
      embedUrl: newEmbedUrl,
      embedType: newEmbedType,
    });

    setIsProcessing(false);
  };

  const handleChange = (field: keyof EmbedBlockContent, value: string) => {
    onChange({
      ...content,
      [field]: value,
    });
  };

  return (
    <Card className="border-2 border-dashed py-0">
      <CardHeader className="p-4 bg-muted/50 flex flex-row items-center gap-2">
        <div className="font-semibold">Embed</div>
        {embedType && (
          <Badge className="text-xs py-0 pt-0.5">{embedType}</Badge>
        )}
      </CardHeader>
      <CardContent className="p-4 space-y-4 -mt-5">
        <div className="grid gap-2">
          <Label htmlFor="sourceUrl">Source URL</Label>
          <Input
            id="sourceUrl"
            value={sourceUrl}
            onChange={(e) => processUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
          />
          <p className="text-xs text-muted-foreground">
            Supports just YouTube embeds for now
          </p>
        </div>

        {isProcessing ? (
          <div className="rounded-lg border overflow-hidden aspect-video flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : embedUrl ? (
          <div className="rounded-lg border overflow-hidden aspect-video">
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              title={caption || "Embedded content preview"}
            />
          </div>
        ) : null}

        <div className="grid gap-2">
          <Label htmlFor="caption">Caption (optional)</Label>
          <Textarea
            id="caption"
            value={caption || ""}
            onChange={(e) => handleChange("caption", e.target.value)}
            placeholder="Add a caption to describe this embed..."
            rows={2}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export { EmbedBlockEditor };
