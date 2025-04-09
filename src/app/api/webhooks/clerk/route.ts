import db from "@/lib/db";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

export async function POST(req: Request) {
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse("Missing svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || "");

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Error verifying webhook", { status: 400 });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id } = evt.data;

    try {
      await db.user.create({
        data: {
          clerkId: id,
        },
      });

      console.log(`User created in database with Clerk ID: ${id}`);
      return NextResponse.json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error creating user in database:", error);
      return NextResponse.json(
        { error: "Error creating user in database" },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({ message: `Webhook received: ${eventType}` });
}

export async function GET() {
  return NextResponse.json({ message: "Webhook endpoint is active" });
}
