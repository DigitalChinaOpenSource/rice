"use client";

import { Chat } from "@rice/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <Chat />
      </div>
    </main>
  );
}
