import { FaPhoneAlt } from "react-icons/fa";

function ButtonContact({ number }: { number: string }) {
  return (
    <button className="flex items-center justify-center  bg-[#2c59a3] text-white px-6 py-3 font-bold text-lg hover:bg-red-600 transition-colors shadow-md shrink-0 whitespace-nowrap">
      <FaPhoneAlt className="mr-3 text-base" />
      <span>{number}</span>
    </button>
  );
}


export default ButtonContact;