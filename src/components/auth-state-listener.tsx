"use client";

import { deleteUserId, saveUserId } from "@/lib/server";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export function AuthStateListener() {
  const { isLoaded, isSignedIn } = useAuth();
  const [prevAuthState, setPrevAuthState] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!isLoaded) return;

    if (prevAuthState !== null && prevAuthState !== isSignedIn) {
      if (isSignedIn) {
        // User just signed in
        runAuthenticatedFunction();
      } else {
        // User just signed out
        runUnauthenticatedFunction();
      }
    }

    setPrevAuthState(isSignedIn);
  }, [isLoaded, isSignedIn, prevAuthState]);

  function runAuthenticatedFunction() {
    saveUserId();
  }

  function runUnauthenticatedFunction() {
    deleteUserId();
  }

  return null;
}
