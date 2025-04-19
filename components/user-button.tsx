"use client";

import React from "react";
import { signOut } from "@/auth";

export function UserButton({ user }: { user: any }) {
  return (
    <div className="flex items-center gap-2">
      {user?.name && <span>Hi, {user.name}</span>}
      <button 
        onClick={() => signOut({ redirectTo: "/" })}
        className="bg-black text-white font-bold py-1 px-2 rounded text-sm"
      >
        Sign out
      </button>
    </div>
  );
}
