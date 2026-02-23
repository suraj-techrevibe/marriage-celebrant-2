import React from "react";

const ContactInfo: React.FC = () => {
  return (
   
    <section className="max-w-4xl mx-auto py-16 px-6  rounded-xl  p-8 md:p-12 my-6 ">

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-greatvibes font-bold text-gray-800 mb-4">
          Time to Start Planning
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          I’m excited to be a part of your day of celebration. Tell me a bit about what you have planned — I would love to hear from you.
        </p>
      </div>

      {/* Contact Instructions */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Please fill in the form below and let’s get this celebration of love started, or send me a note directly with as much detail as possible to:
        </p>
        <a
          href="mailto:He***@lu***************.au"
          className="text-red-600 font-semibold underline hover:text-red-800 transition-colors"
        >
          He***@lu***************.au
        </a>
      </div>

      {/* 2-Column Section: Opening Hours & Google Map */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Opening Hours */}
        <div className="bg-gray-50 p-8 rounded-xl ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Opening Hours</h3>
          <ul className="text-gray-700 text-base md:text-lg space-y-2">
            <li>Monday: Open 24 hours</li>
            <li>Tuesday: Open 24 hours</li>
            <li>Wednesday: Open 24 hours</li>
            <li>Thursday: Open 24 hours</li>
            <li>Friday: Open 24 hours</li>
            <li>Saturday: Open 24 hours</li>
            <li>Sunday: Open 24 hours</li>
          </ul>
        </div>

        {/* Right: Google Map */}
        <div className="overflow-hidden rounded-xl ">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086122739257!2d144.9631!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f5a123%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1677221234567!5m2!1sen!2sus"
            width="100%"
            height="400"
            className="border-0 w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  
  );
};

export default ContactInfo;
