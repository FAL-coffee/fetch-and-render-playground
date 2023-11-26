interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = (props: Props) => (
  <a
    {...props}
    style={{
      color: "var(--tw-prose-links)",
      textDecoration: "underline",
      fontWeight: 500,
    }}
  />
);
