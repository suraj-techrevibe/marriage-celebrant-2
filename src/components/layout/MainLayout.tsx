import { useState, useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer1 from "./Footer1";
import NavBar2 from "./NavBar2";

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
      <NavBar2 />
     
      <main className="flex-1 w-full">
        <Outlet /> {/* child routes render here */}
      </main>
      <ScrollRestoration />
      <Footer1 />
    </div>
  );
}