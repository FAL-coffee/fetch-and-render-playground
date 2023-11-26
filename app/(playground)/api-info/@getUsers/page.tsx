"use client";

import { Card } from "@/app/_components/Card";
import mdxComponents from "@/app/_components/mdxComponent";
import Detail from "./detail.mdx";

export default function Page() {
  return (
    <Card>
      <div className="card-body">
        <Detail components={mdxComponents} />
      </div>
    </Card>
  );
}
