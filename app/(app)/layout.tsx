import React from "react";
import Header from "@/components/common/header";
import Footer from "@/components/common/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
