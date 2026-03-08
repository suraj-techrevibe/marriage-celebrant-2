import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

/* =========================
   Validation Schema
========================= */
const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(/^(\+614|04)\d{8}$/, "Enter a valid Australian phone number"),
  service: z.string().nonempty("Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* =========================
   Component
========================= */
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbznrbEjC8XcZuIyFxekQXHtODoxxYyc62vdcWOwTZ2pxFj3Hp_ZmPy4tlVrdh6WXvb8-w/exec";

    try {
      await axios.post(SCRIPT_URL, JSON.stringify(data), {
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      alert("Form submitted successfully!");
      reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

      {/* Name */}
      <input
        type="text"
        placeholder="Full Name (e.g., John Doe)"
        className={`input-clean ${errors.name ? "input-error" : ""}`}
        {...register("name")}
      />
      {errors.name && <p className="error-text">{errors.name.message}</p>}

      {/* Email */}
      <input
        type="email"
        placeholder="Email (e.g., john@example.com)"
        className={`input-clean ${errors.email ? "input-error" : ""}`}
        {...register("email")}
      />
      {errors.email && <p className="error-text">{errors.email.message}</p>}

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone (e.g., +61XXXXXXXXX or 04XXXXXXXX)"
        className={`input-clean ${errors.phone ? "input-error" : ""}`}
        {...register("phone")}
      />
      {errors.phone && <p className="error-text">{errors.phone.message}</p>}

      {/* Service */}
      <select
        className={`input-clean ${errors.service ? "input-error" : ""}`}
        {...register("service")}
      >
        <option value="">Select Service</option>
        <option value="Commitment Ceremonies">Commitment Ceremonies</option>
        <option value="Wedding Ceremonies">Wedding Ceremonies</option>
        <option value="Renewal of Vows">Renewal of Vows</option>
      </select>
      {errors.service && <p className="error-text">{errors.service.message}</p>}

      {/* Message */}
      <textarea
        placeholder="Message (min 10 characters)"
        rows={4}
        className={`input-clean resize-none ${errors.message ? "input-error" : ""}`}
        {...register("message")}
      />
      {errors.message && <p className="error-text">{errors.message.message}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "SEND"}
      </button>
    </form>
  );
}