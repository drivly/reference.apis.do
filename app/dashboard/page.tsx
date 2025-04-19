import React from "react";
import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-4">This is a protected page. You are logged in as {session?.user?.name}.</p>
      </main>
    </div>
  );
}
