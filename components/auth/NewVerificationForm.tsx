"use client";

import React, { useCallback, useEffect, useState } from "react";
import CardWrapper from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { newUserVerification } from "@/actions/newUserVerification";
import FormError from "@/components/form-error";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token!");
      return;
    }
    newUserVerification(token)
      .then((res) => {
        if (res.error) {
          setSuccess(undefined);
          setError(res.error);
          return;
        }
        setError(undefined);
        setSuccess(res.success);
      })
      .catch((err) => {
        setError("Something went wrong!Please request new verification token.");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [token, onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex w-full items-center justify-center">
        {!success && !error && (
          <div className="flex items-center justify-center space-x-2 bg-white dark:invert">
            <span className="sr-only">Loading...</span>
            <div className="h-4 w-4 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 animate-bounce rounded-full bg-black"></div>
          </div>
        )}

        <FormError message={error} />
        {!success && <FormError message={success} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
