import { useState, useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function MainLayout() {
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <NavBar />
      <main className="flex-1 w-full">
        <Outlet /> {/* child routes render here */}
      </main>
      <ScrollRestoration />
      <Footer />
    </div>
  );
}