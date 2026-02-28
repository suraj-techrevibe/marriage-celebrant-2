

interface ImageSliderProps {
  imgTitle?: string; // optional if you might not use it
  img: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imgTitle, img }) => {
  return (
    <div className="relative w-full max-w-md mx-auto group overflow-hidden">
      <figure className="w-full">
        <img
          src={img}
          alt={imgTitle || "Image"}
          className="w-[90%] h-full object-cover rounded-sm"
        />
      </figure>

      {/* Uncomment to show title */}
      {/* {imgTitle && (
        <figcaption className="absolute bottom-[25%] left-0 right-[-5%] bg-[#4169E1] py-4 px-6 shadow-lg ml-10">
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-wide text-center">
            {imgTitle}
          </h2>
        </figcaption>
      )} */}
    </div>
  );
};

export default ImageSlider;