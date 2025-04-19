"use client";

import React from "react";
import { signIn } from "@/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">Sign In</h1>
        <div className="mt-8">
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded"
            onClick={() => signIn("github", { redirectTo: "/" })}
          >
            Sign in with GitHub
          </button>
        </div>
      </main>
    </div>
  );
}
