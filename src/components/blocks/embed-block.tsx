import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { EmbedBlockContent } from "@/types";

function EmbedBlock({ content }: { content: EmbedBlockContent }) {
  const { embedUrl, embedType, caption } = content;

  return (
    <Card className="overflow-hidden p-0">
      {embedType === "YOUTUBE" ? (
        <div className="aspect-video w-full p-0">
          <iframe
            src={embedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            title={caption || "Embedded content"}
          />
        </div>
      ) : (
        <iframe
          src={embedUrl}
          className="w-full h-full border-0"
          allowFullScreen
          title={caption || "Embedded content"}
        />
      )}

      {caption && (
        <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">
          {caption}
        </CardFooter>
      )}
    </Card>
  );
}

export { EmbedBlock };
