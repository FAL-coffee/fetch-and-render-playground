"use client";

import { Card } from "@/app/_components/Card";
import { CodeBlock } from "@/app/_components/CodeBlock";
import Example from "./example.mdx";

const components = {
  code: (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
    <CodeBlock {...props} />
  ),
};

export default function Page() {
  return (
    <Card>
      <div className="card-body">
        <Example components={components} />
      </div>
    </Card>
  );
}
