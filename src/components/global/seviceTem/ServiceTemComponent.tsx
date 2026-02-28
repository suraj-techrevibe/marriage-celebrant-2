// 
// import { Link } from "react-router-dom";
// import type { ServiceTemplateProps } from "../../../types/types";

// const ServiceTemComponent: React.FC<ServiceTemplateProps> = ({
//   heading,
//   para,
//   para1,
//   para2,
//   para3,
//   img,
//   imgTitle,
//   highlightedWords,
//   link,
//   planItems,
//   providerItems,
//   planTitle,
//   providerTitle,
// }) => {
//   const getHighlightedText = (text: string | undefined, wordsToHighlight?: string[]) => {
//     if (!text) return null;
//     if (!wordsToHighlight || wordsToHighlight.length === 0) return text;
//     const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");
//     const parts = text.split(regex);
//     return parts.map((part, i) =>
//       wordsToHighlight.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
//         <span key={i} className="font-bold text-gray-600">
//           {part}
//         </span>
//       ) : (
//         part
//       )
//     );
//   };

//   // Support single img string or array of images
//   const renderImages = () => {
//     if (Array.isArray(img)) {
//       return img.map((src, i) => (
//         <img
//           key={i}
//           src={src}
//           alt={imgTitle || heading}
//           className="rounded-[3rem] h-[300px] sm:h-[400px] object-cover object-center shadow-sm w-full mb-4"
//         />
//       ));
//     }
//     return (
//       <img
//         src={img}
//         alt={imgTitle || heading}
//         className="rounded-[3rem] h-[300px] sm:h-[400px] object-cover object-center shadow-sm w-full"
//       />
//     );
//   };

//   const renderList = (title?: string, items?: string[]) => {
//     if (!items || items.length === 0) return null;
//     return (
//       <div className="mb-6">
//         {title && <h3 className="text-2xl font-semibold mb-2">{title}</h3>}
//         <ul className="list-disc list-inside text-gray-700">
//           {items.map((item, idx) => (
//             <li key={idx}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row gap-12 items-start">
//         {/* Text Content */}
//         <div className="flex flex-col flex-1 lg:order-1 order-2">
//           <h2 className="text-4xl sm:text-4xl font-serif font-bold text-gray-900 mb-8 leading-tight">
//             {heading}
//           </h2>

//           {/* Paragraphs */}
//           {[para, para1, para2, para3].map((p, idx) =>
//             p ? (
//               <p
//                 key={idx}
//                 className="text-gray-600 text-lg font-semibold leading-relaxed mb-6 md:text-left"
//               >
//                 {getHighlightedText(p, highlightedWords)}
//               </p>
//             ) : null
//           )}

//           {/* Lists */}
//           {renderList(planTitle, planItems)}
//           {renderList(providerTitle, providerItems)}

//           {link && (
//             <Link to={link}>
//               <button className="bg-red-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-800 transition-colors w-[70%] md:w-[60%] lg:self-start self-center">
//                 Learn More
//               </button>
//             </Link>
//           )}
//         </div>

//         {/* Image(s) */}
//         <div className="flex-1 lg:order-2 order-1 w-full">{renderImages()}</div>
//       </div>
//     </section>
//   );
// };

// export default ServiceTemComponent;