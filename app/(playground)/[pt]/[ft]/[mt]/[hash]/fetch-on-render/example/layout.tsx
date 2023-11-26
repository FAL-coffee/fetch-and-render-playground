export default function Layout({
  children,
  description,
}: {
  children: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div>
      <section id="example">{children}</section>
      <section id="description">{description}</section>
    </div>
  );
}
