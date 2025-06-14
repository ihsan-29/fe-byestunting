import type React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
