"use client";

import { ServiceRequestModal } from "@/components/modals/ServiceRequestModal";
import { useEffect, useState } from "react";

export const ModalProviders = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <ServiceRequestModal />
    </>
  );
};
