import React from "react";
import BottomMenu from "./_components/BottomMenu";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <BottomMenu />
    </main>
  );
}
