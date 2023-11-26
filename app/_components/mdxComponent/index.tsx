import { MDXComponents } from "mdx/types";

import { CodeBlock } from "@/app/_components/mdxComponent/CodeBlock";
import { Heading } from "@/app/_components/mdxComponent/Heading";
import { Link } from "@/app/_components/mdxComponent/Link";

export default {
  code: CodeBlock,
  h1: (props) => (
    <Heading level={1} {...props}>
      {props.children}
    </Heading>
  ),
  h2: (props) => (
    <Heading level={2} {...props}>
      {props.children}
    </Heading>
  ),
  h3: (props) => (
    <Heading level={3} {...props}>
      {props.children}
    </Heading>
  ),
  a: (props) => <Link {...props} />,
} satisfies MDXComponents;
