import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  backButtonHref: string;
  backButtonLabel: string;
  resetPasswordHref?: string;
  resetPasswordLabel?: string;
  showPasswordReset?: boolean;
}

const BackButton = ({
  backButtonHref,
  backButtonLabel,
  resetPasswordHref = "/auth/reset-password",
  resetPasswordLabel = "Reset Password?",
  showPasswordReset = false,
}: BackButtonProps) => {
  return (
    <>
      <Button variant="link" className="w-full font-normal" size="sm" asChild>
        <Link href={backButtonHref}>{backButtonLabel}</Link>
      </Button>
      {showPasswordReset && (
        <Button variant="link" className="w-full font-normal" size="sm" asChild>
          <Link href={resetPasswordHref}>{resetPasswordLabel}</Link>
        </Button>
      )}
    </>
  );
};

export default BackButton;
