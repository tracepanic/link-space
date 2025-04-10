import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TextBlockContent } from "@/types";
import ReactMarkdown from "react-markdown";

interface TextBlockEditorProps {
  content: any;
  onChange: (content: TextBlockContent) => void;
}

function TextBlockEditor({ content, onChange }: TextBlockEditorProps) {
  const { text } = content;

  const handleChange = (value: string) => {
    onChange({
      ...content,
      text: value,
    });
  };

  return (
    <Card className="border-2 border-dashed py-0">
      <CardHeader className="p-4 bg-muted/50 flex flex-row items-center justify-between">
        <div className="font-semibold">Text Note</div>
        <div className="text-xs text-muted-foreground">Markdown supported</div>
      </CardHeader>
      <CardContent className="p-4 space-y-4 -mt-5">
        <div className="grid gap-2">
          <Label htmlFor="text">Content</Label>
          <Textarea
            id="text"
            value={text}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Add your text or markdown content..."
            rows={6}
          />
        </div>

        {text.trim() && (
          <div className="rounded border p-4">
            <Label className="text-xs text-muted-foreground mb-2 block">
              Preview
            </Label>
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export { TextBlockEditor };
