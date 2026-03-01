import { Link } from "react-router-dom";

export default function FaqCTA() {
    return (
      <section className="section-main">
        <div className="container-main text-center max-w-2xl mx-auto">
          <h2 className="text-secondary mb-6">
            Still Have Questions?
          </h2>
  
          <p className="text-muted mb-8">
            Our team is always ready to help. Let’s discuss your event and
            create something unforgettable together.
          </p>
  
          <Link to="/contact" className="btn-primary inline-block">
  Contact Us
</Link>
        </div>
      </section>
    );
  }