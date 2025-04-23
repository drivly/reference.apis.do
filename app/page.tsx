"use client";

import { APIReference } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/dist/style.css";

export default function Home() {
  return (
    <div className="h-screen">
      <APIReference
        apiDescriptionUrl="https://apis.do/api.json"
        configuration={{
          title: "APIs.do Reference",
          theme: "default",
        }}
      />
    </div>
  );
}
