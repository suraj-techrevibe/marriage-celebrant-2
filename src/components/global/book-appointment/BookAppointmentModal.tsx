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
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const scriptURL = "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        message: "",
      });
      onClose();
    } catch (error) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  if (!isOpen) return null;

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
          <input
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="phone"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

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