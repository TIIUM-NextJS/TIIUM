import { Header } from "@/src/widgets/header/ui/Header";
export const dynamic = "force-dynamic";

export default async function WithHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
