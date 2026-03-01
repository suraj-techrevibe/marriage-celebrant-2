import { useEffect, useRef, useState } from "react";
import { useEdit } from "../../editable/context/EditContext";

import AboutUs from "./components/AboutUs";
import HomeSection1 from "./components/HomeSection1";
import HomeSection2 from "./components/HomeSection2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import WhyChoose from "./components/WhyChoose";
interface HeroData {
  heading: string;
  para: string;
  heroImage: string;
}

export default function Home() {
  

  return (
    <>
      {/* Top-right buttons */}
      {/* <div className="fixed top-5 right-5 flex gap-2 z-50">
        <button
          onClick={toggleEditing}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition"
        >
          {isEditing ? "Exit Edit" : "Edit"}
        </button>
        {isEditing && (
          <button
            onClick={saveData}
            className="bg-green-600 text-white px-4 py-2 rounded shadow-md hover:bg-green-700 transition"
          >
            Save Changes
          </button>
        )}
      </div> */}

      {/* Hero section */}
      {/* <Hero data={data} setData={setData} isEditing={isEditing} fileRef={fileRef} /> */}
      <HomeSection1 />
      <AboutUs />

      <HomeSection2 />
      <WhyChoose />
      <Section3 />
      <Section4 />
    </>
  );
}
