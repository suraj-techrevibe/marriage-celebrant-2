import DefaultBg from "../../assets/default.jpg"; // put a default image in assets

interface Props {
  title: string;
  subtitle?: string;
  bgImage?: string; // optional background image
}

const PageHeader = ({ title, subtitle, bgImage }: Props) => {
  return (
    <section
      className="w-full bg-gray-800 text-white py-24 px-8 flex justify-center text-center items-center"
      style={{
        backgroundImage: `url(${bgImage || DefaultBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-30 p-6 rounded-md max-w-3xl">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-lg opacity-90">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
