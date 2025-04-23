"use client";

import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

export default function Home() {
  return (
    <div className="h-screen">
      <ApiReferenceReact
        configuration={{
          title: "APIs.do Reference",
          theme: "default",
          url: "https://apis.do/api.json"
        }}
      />
    </div>
  );
}
