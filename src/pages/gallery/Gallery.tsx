import Hero from "../../components/global/herosection/Hero1";

import img1 from  "../../assets/hero/newlyweds.jpg";

import img2 from "../../assets/hero/newlyweds.jpg";
import img3 from "../../assets/hero/newlyweds.jpg";
import GallerySection from "./components/GallerySection";

function Gallery() {
  const heading = "Gallery";
  const para =
    "Nirava is dedicated to giving people with disabilities, their families, and their caretakers in the Sydney areas individualised, custom-made help.";

  const galleryItems = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
  ];

  return (
    <>
      <Hero heading={heading} para={para} bgImage={img1} />
      <GallerySection items={galleryItems} />
    </>
  );
}

export default Gallery;