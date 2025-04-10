"use client";

import { BlockRenderer } from "@/components/blocks/block-renderer";
import { AddBlockMenu } from "@/components/editor/add-block-menu";
import { BlockEditor } from "@/components/editor/block-editor";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BlockType } from "@/generated/prisma";
import { generateId, slugify } from "@/lib/client";
import { getPrivateUserSpace, updateSpaceWithBlocks } from "@/lib/server";
import { usePinStore } from "@/lib/store";
import { SpaceWithBlocks } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, FilePlus, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(255, "Title cannot exceed 255 characters"),
  slug: z
    .string()
    .min(2, "Slug must be at least 2 characters long")
    .max(100, "Slug cannot exceed 100 characters")
    .regex(
      /^[a-z0-9][a-z0-9-_]*[a-z0-9]$|^[a-z0-9]$/,
      "Slug must start and end with a letter or number, and can contain hyphens and underscores in between",
    ),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long")
    .max(500, "Description cannot exceed 500 characters")
    .optional(),
  visibility: z.enum(["PUBLIC", "PRIVATE"]),
  isHome: z.boolean(),
  isInHeader: z.boolean(),
});

export default function Render({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [space, setSpace] = useState<SpaceWithBlocks | null>(null);
  const [blocks, setBlocks] = useState<any[]>([]);

  const router = useRouter();
  const { checkPinExists, updatePinTitle } = usePinStore();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      visibility: "PRIVATE",
      isHome: false,
      isInHeader: false,
    },
  });

  useEffect(() => {
    (async function getSpace() {
      setLoading(true);
      const res = await getPrivateUserSpace(id);

      if (res) {
        setSpace(res);
        setBlocks(res.block ?? []);

        form.reset({
          title: res.title,
          slug: res.slug,
          description: res.description ?? "",
          visibility: res.visibility,
          isHome: res.isHome ?? false,
          isInHeader: res.isInHeader ?? false,
        });
      } else {
        setSpace(null);
      }

      setLoading(false);
    })();
  }, [id, form]);

  const handleAddBlock = (type: BlockType) => {
    const newBlock = {
      id: generateId("temp"),
      spaceId: "",
      type,
      order: blocks.length,
      content:
        type === "LINK"
          ? { title: "", url: "", description: "", image: "" }
          : type === "TEXT"
            ? { text: "" }
            : { embedUrl: "", embedType: "OTHER", caption: "" },
    };

    setBlocks([...blocks, newBlock]);
  };

  const handleBlocksChange = (updatedBlocks: any[]) => {
    setBlocks(updatedBlocks);
  };

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const id = toast.loading("Updating space...");

    const res = await updateSpaceWithBlocks(space?.id || "", {
      title: values.title,
      slug: values.slug,
      description: values.description,
      visibility: values.visibility,
      isHome: values.isHome,
      isInHeader: values.isInHeader,
      blocks,
    });

    toast.dismiss(id);

    if (res && res.success) {
      if (checkPinExists(space?.id || "")) {
        updatePinTitle(space?.id || "", values.title);
      }
      toast.success("Space updated successfully");
      router.push("/dashboard/spaces");
    } else {
      toast.error("Failed to update space");
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!space) {
    return (
      <Card>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive mb-4">
            Space Not Found
          </h2>
          <p className="text-muted-foreground mb-6">
            The space you are looking for does not exist or has been removed.
          </p>
          <Link href="/dashboard/spaces">
            <Button variant="outline" className="mt-4">
              Go Back to Spaces
            </Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Update Space</h1>

      <Form {...form}>
        <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Space Title</FormLabel>
                    <FormControl>
                      <Input placeholder="My Awesome Collection" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Slug</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <span className="text-muted-foreground text-2xl mr-2">
                          /
                        </span>
                        <Input
                          placeholder="my-awesome-collection"
                          onChange={(e) => {
                            field.onChange(slugify(e.target.value));
                          }}
                          value={field.value}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>Update your space's URL</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Briefly describe what this space is about..."
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="visibility"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Visibility</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PUBLIC">
                          Public - Anyone with the link can view
                        </SelectItem>
                        <SelectItem value="PRIVATE">
                          Private - Only you can view
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isInHeader"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Show in header navigation</FormLabel>
                      <FormDescription>
                        When enabled, this space will appear in the header
                        navigation menu. Only add public spaces or else the
                        visitors of your space won&apos;t be able to view it
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isHome"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Set as home page</FormLabel>
                      <FormDescription>
                        When enabled, this space will be shown in your homepage.
                        If you had set another space as your homepage it will be
                        overwriten. Make sure its visibility is public for users
                        to be able to see it
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Content</h2>

            {blocks.length > 0 ? (
              <BlockEditor
                blocks={blocks}
                onChange={handleBlocksChange}
                onAddBlock={handleAddBlock}
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-12 border rounded-lg border-dashed text-center">
                <p className="text-muted-foreground mb-4">
                  Add blocks to build your space
                </p>
                <FilePlus size={45} className="text-muted-foreground" />
              </div>
            )}

            <AddBlockMenu onAddBlock={handleAddBlock} />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Update Space
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
