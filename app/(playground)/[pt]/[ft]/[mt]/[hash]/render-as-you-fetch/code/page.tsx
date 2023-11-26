"use client";

import { Card } from "@/app/_components/Card";
import mdxComponents from "@/app/_components/mdxComponent";
import Example from "./example.mdx";

export default function Page() {
  return (
    <Card>
      <div className="card-body">
        <Example components={mdxComponents} />
      </div>
    </Card>
  );
}
