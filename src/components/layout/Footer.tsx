import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo/nirava_logo.png";
import ndislogo from "../../assets/logo/ndis_logo.png";

const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebookF, href: "https://facebook.com/yourpage" },
    { Icon: FaXTwitter, href: "https://twitter.com/yourhandle" },
    { Icon: FaYoutube, href: "https://youtube.com/yourchannel" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com/company/yourprofile" },
  ];

  return (
    
    
    <footer className="w-full bg-white border-t border-gray-100 font-sans">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:text-left">
          
          {/* Column 1: Get in Contact */}
          <div className="flex flex-col text-center items-center md:items-center space-y-4">
            <h3
              className="text-3xl  text-red-600 font-great-vibes"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Get in touch
            </h3>
            <div className="flex flex-col gap-2 text-gray-600 text-lg">
              <a
                href="mailto:info@wecarecommunity.com.au?subject=Enquiry%20from%20Website"
                className="transition-colors duration-300 font-medium"
                style={{ color: "#B91C1C" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f26c18")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
              >
                info@wecarecommunity.com.au
              </a>
              <a
                href="tel:1800371070"
                className="transition-colors duration-300 font-medium"
                style={{ color: "#B91C1C" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f26c18")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
              >
                1800 371 070
              </a>
            </div>
          </div>

          {/* Column 2: Logos */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex gap-1 items-center">
              <img
                src={logo}
                alt="Nirava Logo"
                className="h-16 w-auto object-contain"
              />
              <img
                src={ndislogo}
                alt="NDIS Logo"
                className="h-16 w-auto object-contain "
              />
            </div>
          </div>

          {/* Column 3: See Me in Action */}
          <div className="flex flex-col items-center md:items-center space-y-4">
            <h3
              className="text-3xl text-red-600 font-great-vibes"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              See Me in Action
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-colors duration-300"
                  style={{ backgroundColor: "#B91C1C" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f87620f3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f26c18")
                  }
                >
                  <social.Icon size={18} color="white" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Separate copyright div */}

<div className="w-full bg-red-100 text-center py-8 sm:py-12 flex flex-col items-center">
  {/* Indigenous Acknowledgment */}
  <p className="max-w-6xl text-gray-600 text-xs leading-relaxed px-4">
    I acknowledge the land on which I work and meet, Gadigal land. I pay respects 
    to elders past, present and emerging and honour their continuing connection 
    to this land, respect culture and place. This is indigenous land and when on 
    it you can love whomever you choose.
  </p>

  {/* Copyright */}
  <div className="mt-4 text-gray-700 text-xs">
    &copy; {new Date().getFullYear()} Nirava . All Rights Reserved.
  </div>
</div>




    </footer>
  );
};

export default Footer;









// import { Link } from "react-router-dom";
// import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import logo from "../../assets/logo/icon_we_care_community.png";
// import ndislogo from "../../assets/logo/ndis_logo.png";

// const Footer = () => {
//   const socialLinks = [
//     { Icon: FaFacebookF, href: "https://facebook.com/yourpage" },
//     { Icon: FaXTwitter, href: "https://twitter.com/yourhandle" },
//     { Icon: FaYoutube, href: "https://youtube.com/yourchannel" },
//     { Icon: FaLinkedinIn, href: "https://linkedin.com/company/yourprofile" },
//   ];

//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Our Services", path: "/services" },
//     { name: "Referral Form", path: "/referralform" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <footer className="bg-white border-t border-gray-100 font-sans">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Office Info */}
//           <div className="space-y-4 flex flex-col items-center">
//             <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-500 w-fit pb-1">
//               Office
//             </h3>
//             <address className="not-italic text-gray-600 text-lg leading-relaxed">
//               <span className="font-semibold block mt-2 text-gray-800">
//                 Head Office:
//               </span>
//               Level 1,154 Marsden St Parramatta NSW 2150
//               <br />
//               <span className="font-semibold block mt-2 text-gray-800">
//                 Goulburn Day Program Centre:
//               </span>
//               149 Kinghorne St Goulburn, NSW 2580
//               <br />
//               <span className="font-semibold block mt-2 text-gray-800">
//                 Other Services Area:
//               </span>
//               All Across Sydney, Southern Highland, Newcastle, Hawkesbury,
//               Richmond and Wollongong
//             </address>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4 flex flex-col items-center">
//             <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-500 w-fit pb-1">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     to={link.path}
//                     className="text-gray-600 text-lg hover:text-red-600 hover:translate-x-1 transition-all inline-block"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4 flex flex-col items-center">
//   <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-500 w-fit pb-1 text-center">
//     Contact Us
//   </h3>
//   <div className="text-gray-600 text-lg space-y-2 text-center">
//     <p className="hover:text-red-600 transition-colors">
//     <p>
//   <a
//     href="mailto:info@wecarecommunity.com.au?subject=Enquiry%20from%20Website"
//     style={{
//       color: "#4B5563", // Tailwind text-gray-600
//       textDecoration: "none",
//       fontWeight: 500,
//       transition: "color 0.3s ease",
//       cursor: "pointer"
//     }}
//     onMouseEnter={(e) => (e.currentTarget.style.color = "#f26c18")} // red on hover
//     onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")} // back to gray
//   >
//     info@wecarecommunity.com.au
//   </a>
// </p>

// <p>
//   <a
//     href="tel:1800371070"
//     target="_blank"
//     rel="noopener noreferrer"
//     style={{
//       color: "#4B5563", // text-gray-600
//       textDecoration: "none",
//       fontWeight: 500,
//       cursor: "pointer",
//       transition: "color 0.3s ease"
//     }}
//     onMouseEnter={(e) => (e.currentTarget.style.color = "#f26c18")}
//     onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
//   >
//     1800 371 070
//   </a>
// </p>

//     </p>
//   </div>
// </div>




//           {/* Logos & Social Icons */}
//           <div className="space-y-6 flex flex-col items-center md:items-start">
//             {/* Social Icons */}
//             <div className="flex gap-4">
//               {socialLinks.map((social, i) => (
//             <a
//             key={i}
//             href={social.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               w-10 h-10 rounded-full
//               flex items-center justify-center
//               text-white
//               shadow-md
//               transition-colors duration-300
//             "
//             style={{
//               backgroundColor: "#f26c18",
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f87620f3")}
//             onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f26c18")}
//           >
//             <social.Icon size={18} color="white" />
//           </a>
          
             
//               ))}
//             </div>

//             {/* Logos */}
//             <div className="flex flex-row gap-4 mt-4">
//               <img
//                 src={logo}
//                 alt="Nirava  Logo"
//                 className="h-16 w-auto object-contain"
//               />
//               <img
//                 src={ndislogo}
//                 alt="NDIS Logo"
//                 className="h-16 w-auto object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
//           &copy; {new Date().getFullYear()} Nirava . All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
