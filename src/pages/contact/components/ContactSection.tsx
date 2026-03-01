
import img from "../../../assets/hero/figma-image20.png";
import img1 from "../../../assets/hero/figma-image18.png";
import img2 from "../../../assets/hero/figma-image4.png";

import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import ContentWrapper from "../../../components/global/ContentWrapper";
import { Link } from "react-router-dom";

export default function ContactSection() {
  const socialLinks = [
    { Icon: FaFacebookF, href: "https://facebook.com/yourpage" },
    { Icon: FaXTwitter, href: "https://twitter.com/yourhandle" },
    { Icon: FaYoutube, href: "https://youtube.com/yourchannel" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com/company/yourprofile" },
  ];

  return (
    <section className="w-full">
<ContentWrapper>
      {/* ================= TOP SECTION ================= */}
      <div className="section-main">
        <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-16 items-center pb-24">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-primary">
              Handling the stress so your event is a success
            </h2>

            <p className="text-muted mt-4">
              Sed lectus ultricies id in massa tellus. Gravida ullamcorper
              lectus vitae tristique cursus tempor rutrum.
            </p>

            <div className="mt-8 space-y-3 text-muted">
              <p>📞 Phone: +32 685-5910</p>
              <p>✉️ Email: Nirava@outlook.com</p>
              <p>📍 Location: New York, USA</p>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative w-full max-w-md mx-auto md:mx-0">
            <div className="relative w-full aspect-[6/5]">

              <div className="card overflow-hidden">
                <img
                  src={img1}
                  alt="event"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="card absolute w-3/5 -bottom-8 -right-8 overflow-hidden">
                <img
                  src={img2}
                  alt="event"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3>Book For An Appointment</h3>

            <p className="text-muted mt-4">
              Sed lectus ultricies id in massa tellus. Gravida ullamcorper
              lectus vitae tristique cursus tempor rutrum.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover-lift"
                  style={{ background: "var(--color-primary)" }}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* FORM */}
          <ContactForm/>

        </div>
      </div>
</ContentWrapper>
      {/* ================= CTA SECTION ================= */}
      <div
        className="relative section-main text-center text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container-main">
          <h3>Dreaming of a picture-perfect event?</h3>
          <p className="mt-4">We’ve got it covered.</p>

          <div className="mt-8">
          <Link to="/contact">
  <button className="btn-outline bg-white text-black hover:bg-primary hover:text-white">
    CONTACT NOW
  </button>
</Link>
          </div>
        </div>
      </div>

    </section>
  );
}