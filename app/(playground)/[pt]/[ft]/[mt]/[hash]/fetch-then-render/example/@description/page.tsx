"use client";

import { Card } from "@/app/_components/Card";
import mdxComponents from "@/app/_components/mdxComponent";
import Description from "./description.mdx";

export default function Page() {
  return (
    <Card>
      <div className="card-body">
        <Description components={mdxComponents} />
      </div>
    </Card>
  );
}
