"use client";

import { Card } from "@/components/ui/card";
import { LinkBlockContent } from "@/types";
import {
  Code,
  ExternalLink,
  FileText,
  Globe,
  ImageIcon,
  Music,
  Package,
  Video,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function LinkBlock({ content }: { content: LinkBlockContent }) {
  const [linkType, setLinkType] = useState<string>("WEBSITE");

  const { title, url, description } = content;

  const domain = url ? new URL(url).hostname.replace("www.", "") : "";

  useEffect(() => {
    if (!url) return;

    try {
      const urlObj = new URL(url);
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
      setLinkType("WEBSITE");
    }
  }, [url]);

  const getLinkIcon = () => {
    switch (linkType) {
      case "DOCUMENT":
        return <FileText className="h-4 w-4" />;
      case "IMAGE":
        return <ImageIcon className="h-4 w-4" />;
      case "VIDEO":
        return <Video className="h-4 w-4" />;
      case "AUDIO":
        return <Music className="h-4 w-4" />;
      case "ARCHIVE":
        return <Package className="h-4 w-4" />;
      case "CODE":
        return <Code className="h-4 w-4" />;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline text-foreground group"
    >
      <Card className="overflow-hidden p-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
              {getLinkIcon()}
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="font-medium text-lg mb-1 line-clamp-2">{title}</h3>
            {description && (
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {description}
              </p>
            )}
            <div className="flex items-center text-xs group-hover:text-primary transition duration-300 text-muted-foreground mt-2">
              <span className="truncate max-w-[200px]">{domain}</span>
              <ExternalLink className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export { LinkBlock };
