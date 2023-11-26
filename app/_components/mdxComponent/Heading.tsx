import { ReactNode, CSSProperties, createElement } from "react";

type Props = {
  level: 1 | 2 | 3;
  children: ReactNode;
};

export const Heading = ({ level, children }: Props) => {
  const Tag = `h${level}` as `h${1 | 2 | 3}`;
  const style: CSSProperties =
    {
      h1: {
        fontSize: "2.1428571em",
        marginTop: 0,
        marginBottom: "0.8em",
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "1.4285714em",
        marginTop: "1.6em",
        marginBottom: "0.8em",
        lineHeight: 1.4,
      },
      h3: {
        fontSize: "1.2857143em",
        marginTop: "1.6em",
        marginBottom: "0.8em",
        lineHeight: 1.4,
      },
    }[Tag] || {};

  return createElement(Tag, { style }, children);
};
