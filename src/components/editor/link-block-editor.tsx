"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LinkBlockContent } from "@/types";
import { useEffect, useState } from "react";

interface LinkBlockEditorProps {
  content: any;
  onChange: (content: LinkBlockContent) => void;
}

function LinkBlockEditor({ content, onChange }: LinkBlockEditorProps) {
  const [linkType, setLinkType] = useState<string>("WEBSITE");
  const [isValidUrl, setIsValidUrl] = useState<boolean>(true);

  const { title, url, description } = content;

  const handleChange = (field: keyof LinkBlockContent, value: string) => {
    onChange({
      ...content,
      [field]: value,
    });
  };

  useEffect(() => {
    if (!url) {
      setLinkType("WEBSITE");
      setIsValidUrl(true);
      return;
    }

    try {
      const urlObj = new URL(url);
      setIsValidUrl(true);

      const path = urlObj.pathname.toLowerCase();

      if (/\.(pdf|doc|docx|txt|rtf)$/i.test(path)) {
        setLinkType("DOCUMENT");
      } else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(path)) {
        setLinkType("IMAGE");
      } else if (/\.(mp4|webm|mov|avi)$/i.test(path)) {
        setLinkType("VIDEO");
      } else if (/\.(mp3|wav|ogg|flac)$/i.test(path)) {
        setLinkType("AUDIO");
      } else if (/\.(zip|rar|tar|gz)$/i.test(path)) {
        setLinkType("ARCHIVE");
      } else if (/\.(js|ts|py|java|html|css|php|rb|go)$/i.test(path)) {
        setLinkType("CODE");
      } else if (
        /github\.com|gitlab\.com|bitbucket\.org/.test(urlObj.hostname)
      ) {
        setLinkType("CODE");
      } else if (
        /youtube\.com|vimeo\.com|dailymotion\.com/.test(urlObj.hostname)
      ) {
        setLinkType("VIDEO");
      } else if (
        /spotify\.com|soundcloud\.com|apple\.com\/music/.test(urlObj.hostname)
      ) {
        setLinkType("AUDIO");
      } else {
        setLinkType("WEBSITE");
      }
    } catch {
      setIsValidUrl(false);
    }
  }, [url, title]);

  return (
    <Card className="border-2 border-dashed py-0">
      <CardHeader className="p-4 bg-muted/50 flex flex-row items-center gap-2">
        <div className="font-semibold">Link</div>
        {isValidUrl && url && (
          <Badge className="text-xs py-0 pt-0.5">{linkType}</Badge>
        )}
      </CardHeader>
      <CardContent className="p-4 space-y-4 -mt-5">
        <div className="grid gap-2">
          <Label htmlFor="url">URL</Label>
          <Input
            id="url"
            value={url}
            onChange={(e) => handleChange("url", e.target.value)}
            placeholder="https://nextjs.org/docs"
          />
          {!isValidUrl && url && (
            <p className="text-xs text-destructive">Please enter a valid URL</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => handleChange("title", e.target.value)}
            placeholder="Next.js Documentation"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description (optional)</Label>
          <Textarea
            id="description"
            value={description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Briefly describe this link..."
            rows={2}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export { LinkBlockEditor };
