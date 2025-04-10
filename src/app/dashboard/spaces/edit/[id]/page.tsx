import Render from "@/app/dashboard/spaces/edit/[id]/render";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="max-w-3xl mx-auto py-8 min-h-screen">
      <Render id={id} />
    </div>
  );
}
