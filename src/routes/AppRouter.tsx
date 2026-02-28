import { createBrowserRouter, type RouteObject } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import MainLayout from "../components/layout/MainLayout";
import ReferralForm from "../pages/referralform/ReferralForm";
import Contact from "../pages/contact/Contact";
import Services from "../pages/services/Services";
import FAQ from "../pages/gallery copy/FAQ";
import Gallery from "../pages/gallery/Gallery";

// Define all routes
const routes: RouteObject[] = [
  {
    element: <MainLayout />, // layout route
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/referralform", element: <ReferralForm /> },
      { path: "/contact", element: <Contact /> },
      { path: "/service", element: <Services /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/faq", element: <FAQ /> },
    ],
  },
];

export const router = createBrowserRouter(routes);