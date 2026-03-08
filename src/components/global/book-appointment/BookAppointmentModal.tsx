import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const BookAppointmentModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbznrbEjC8XcZuIyFxekQXHtODoxxYyc62vdcWOwTZ2pxFj3Hp_ZmPy4tlVrdh6WXvb8-w/exec";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.service) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Australian phone validation
    const phoneRegex = /^(\+614|04)\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid Australian phone number (e.g., +61414226056 or 0414226056).");
      return;
    }

    setLoading(true);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      alert("Appointment booked successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        service: "",
        message: "",
      });
      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  // Prevent selecting past dates
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">
      <div className="bg-white w-full max-w-md p-6 rounded-xl relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">
          Book an Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            name="name"
            placeholder="Full Name (e.g., John Doe)"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email (e.g., john@example.com)"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          {/* Phone */}
          <input
            name="phone"
            type="tel"
            placeholder="Phone (e.g., +61XXXXXXXXXX or 04XXXXXXXX)"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          {/* Date */}
          <input
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleChange}
            min={today}
            className="w-full border p-2 rounded"
          />

          {/* Service Selection */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select Service</option>
            <option value="Commitment Ceremonies">Commitment Ceremonies</option>
            <option value="Wedding Ceremonies">Wedding Ceremonies</option>
            <option value="Renewal of Vows">Renewal of Vows</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message (optional)"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-full"
          >
            {loading ? "Submitting..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointmentModal;