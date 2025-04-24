"use client";

import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

const openApiSpec = {
  openapi: "3.0.0",
  info: {
    title: "APIs.do API Reference",
    version: "1.0.0",
    description: "API reference documentation for APIs.do services"
  },
  paths: {
    "/api": {
      get: {
        summary: "Get API information",
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export default function Home() {
  return (
    <div className="h-screen">
      <ApiReferenceReact
        configuration={{
          title: "APIs.do Reference",
          theme: "default",
          content: openApiSpec
        }}
      />
    </div>
  );
}
