import { Navigation } from "@/src/widgets/navigation/ui/Navigation";
export const dynamic = "force-dynamic";

export default async function WithHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
