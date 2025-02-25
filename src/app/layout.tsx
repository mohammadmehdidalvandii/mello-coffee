import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MELLO - COFFEE | ملو کافی",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-fa">
      <body dir="rtl">
        {children}
      </body>
    </html>
  );
}
