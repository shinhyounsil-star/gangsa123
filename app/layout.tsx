import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "신현실 AI 강사 | 기술은 쉽게, 배움은 가치 있게",
  description: "AI와 데이터로 사람의 성장을 돕는 신현실 강사의 기업·기관·시니어 맞춤형 실전 AI 교육과 강의 상담.",
  metadataBase: new URL("https://gangsa123-hazel.vercel.app"),
  openGraph: {
    title: "신현실 AI 강사",
    description: "기술은 쉽게, 배움은 가치 있게 — 현장에 바로 적용하는 실전형 AI 교육",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "신현실 AI 강사",
    description: "기술은 쉽게, 배움은 가치 있게 — 현장에 바로 적용하는 실전형 AI 교육",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko"><body>{children}</body></html>
  );
}
