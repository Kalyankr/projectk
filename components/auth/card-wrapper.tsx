import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import Header from "./header";
import Social from "./social";
import BackButton from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  resetPasswordHref?: string;
  resetPasswordLabel?: string;
  showPasswordReset?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  resetPasswordHref,
  resetPasswordLabel,
  showPasswordReset,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader className="text-center">
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter className="flex flex-row items-center justify-center">
        <BackButton
          backButtonHref={backButtonHref}
          backButtonLabel={backButtonLabel}
          showPasswordReset={showPasswordReset}
          resetPasswordHref={resetPasswordHref}
          resetPasswordLabel={resetPasswordLabel}
        />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
