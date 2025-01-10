"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const routes = ["/signup", "/login", "/forgot-password", "/reset-password"];
  const isAuthRoute = routes.includes(pathname);

  return (
    <html lang="en">
      <body>
        {!isAuthRoute && <Header />}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
