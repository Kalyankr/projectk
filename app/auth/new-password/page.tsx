import { PasswordResetForm } from "@/components/auth/password-reset";
import React from "react";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PasswordResetForm />
      </Suspense>
    </div>
  );
};

export default page;
