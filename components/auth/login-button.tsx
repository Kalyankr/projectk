"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

import { useRouter } from "next/navigation";
import React from "react";

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <div onClick={onClick}>
        <span>{children}</span>
      </div>
    );
  }
  return <span onClick={onClick}>{children}</span>;
};

export default LoginButton;
