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
  const { isEditing, toggleEditing } = useEdit();
  const [data, setData] = useState<HeroData>({
    heading: "",
    para: "",
    heroImage: "/assets/hero/default-hero.jpg", // default image path
  });
  const [loading, setLoading] = useState(true);

  // Keep a ref to the file selected
  const fileRef = useRef<File | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/home-data")
      .then((res) => res.json())
      .then((json) => {
        setData({
          heading: json.heading ?? "",
          para: json.para ?? "",
          heroImage: json.heroImage ?? "/assets/hero/default-hero.jpg",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Centralized save
  const saveData = async () => {
    try {
      const formData = new FormData();
      formData.append("heading", data.heading);
      formData.append("para", data.para);
      if (fileRef.current) formData.append("heroImage", fileRef.current);

      const res = await fetch("http://localhost:3000/save-home", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setData(result.data);
        alert("Saved successfully!");
        toggleEditing(); // exit edit mode
        fileRef.current = null; // reset
      }
    } catch (err) {
      console.error(err);
      alert("Failed to save. Is server running?");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* Top-right buttons */}
      <div className="fixed top-5 right-5 flex gap-2 z-50">
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
      </div>

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
