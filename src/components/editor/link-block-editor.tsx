import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LinkBlockContent } from "@/types";

interface LinkBlockEditorProps {
  content: any;
  onChange: (content: LinkBlockContent) => void;
}

function LinkBlockEditor({ content, onChange }: LinkBlockEditorProps) {
  const { title, url, description } = content;

  const handleChange = (field: keyof LinkBlockContent, value: string) => {
    onChange({
      ...content,
      [field]: value,
    });
  };

  return (
    <Card className="border-2 border-dashed py-0">
      <CardHeader className="p-4 bg-muted/50 flex flex-row items-center gap-2">
        <div className="font-semibold">Link</div>
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
