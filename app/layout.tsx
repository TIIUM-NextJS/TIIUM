import "./globals.css";

import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "TIIUM - 틔움",
  description:
    "직장인을 위한 디지털 꽃 키우기 힐링 플랫폼. 매일 출근 후 물주며 천천히 자라는 내 꽃을 돌보는 루틴 만들기",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
