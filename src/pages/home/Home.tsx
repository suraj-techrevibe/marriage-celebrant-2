import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { useEdit } from "../../editable/context/EditContext";

import JourneyCTA from "./components/JourneyCTA";
import CardGrid from './components/Card';

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
    heroImage: "/default-hero.jpg", // default image path
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/home-data")
      .then((res) => res.json())
      .then((json) => {
        setData({
          heading: json.heading ?? "",
          para: json.para ?? "",
          heroImage: json.heroImage ?? "/default-hero.jpg",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const saveData = async () => {
    try {
      const res = await fetch("http://localhost:3000/save-home", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) alert("Saved successfully!");
      else alert("Failed to save: " + JSON.stringify(json));
    } catch (err) {
      console.error(err);
      alert("Error saving data");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* Fixed top-right buttons */}
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
      <Hero data={data} setData={setData} isEditing={isEditing} />

      <CardGrid />
      <JourneyCTA />
    </>
  );
}