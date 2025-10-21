"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import db from "@/lib/db";
import { getUser, updateUserSettings } from "@/lib/server";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [showBranding, setShowBranding] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSettings() {
      try {
        const user = await getUser();
        if (user) {
          const { default: db } = await import("@/lib/db");
          const dbUser = await db.user.findUnique({
            where: { clerkId: user.id },
            select: { showBranding: true },
          });
          if (dbUser) {
            setShowBranding(dbUser.showBranding);
          }
        }
      } catch (error) {
        console.error("Failed to load settings:", error);
        toast.error("Failed to load settings");
      } finally {
        setLoading(false);
      }
    }

    loadSettings();
  }, []);

  const handleBrandingToggle = async (checked: boolean) => {
    // Optimistic update
    setShowBranding(checked);

    try {
      const result = await updateUserSettings({ showBranding: checked });
      if (result.success) {
        toast.success("Settings updated");
      } else {
        // Revert on error
        setShowBranding(!checked);
        toast.error("Failed to update settings");
      }
    } catch (error) {
      // Revert on error
      setShowBranding(!checked);
      console.error("Settings update error:", error);
      toast.error("Failed to update settings");
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Loading your settings...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Branding</CardTitle>
          <CardDescription>
            Control how LinkSpace branding appears on your public profile
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="branding-toggle" className="text-base">
                Show &quot;Powered by LinkSpace&quot; badge
              </Label>
              <p className="text-sm text-muted-foreground">
                Display a small badge in your profile footer
              </p>
            </div>
            <Switch
              id="branding-toggle"
              checked={showBranding}
              onCheckedChange={handleBrandingToggle}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
