"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TextBlockContent } from "@/types";
import ReactMarkdown from "react-markdown";

function TextBlock({ content }: { content: TextBlockContent }) {
  const { text } = content;

  return (
    <Card className="p-0">
      <CardContent className="prose prose-sm dark:prose-invert max-w-none p-4">
        <ReactMarkdown>{text}</ReactMarkdown>
      </CardContent>
    </Card>
  );
}

export { TextBlock };
