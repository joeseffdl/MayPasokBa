"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const ToasterComponent = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  );
};
