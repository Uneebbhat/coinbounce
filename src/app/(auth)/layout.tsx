import React, { ReactNode } from "react";

interface AuthLayout {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayout) => {
  return (
    <section className="container mx-auto h-[100vh] flex items-center justify-center">
      {children}
    </section>
  );
};

export default AuthLayout;
