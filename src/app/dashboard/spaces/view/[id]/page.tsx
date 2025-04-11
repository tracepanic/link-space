import Render from "@/app/dashboard/spaces/view/[id]/render";
import { getUserId } from "@/lib/server";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = await getUserId();

  return (
    <div className="max-w-3xl mx-auto py-8 min-h-screen">
      <Render id={id} userId={userId} />
    </div>
  );
}
