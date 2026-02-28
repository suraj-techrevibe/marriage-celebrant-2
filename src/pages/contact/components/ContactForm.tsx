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
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().optional(),
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
      "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

    try {
      await axios.post(SCRIPT_URL, JSON.stringify(data), {
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Full Name"
          className={`input-clean ${errors.name ? "input-error" : ""}`}
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="error-text">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email"
          className={`input-clean ${errors.email ? "input-error" : ""}`}
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="error-text">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <input
          type="text"
          placeholder="Phone"
          className={`input-clean ${errors.phone ? "input-error" : ""}`}
          {...register("phone")}
        />
        {errors.phone?.message && (
          <p className="error-text">{errors.phone.message}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <select
          className="input-clean"
          {...register("service")}
        >
          <option value="">Service</option>
          <option>Wedding Planning</option>
          <option>Event Management</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <textarea
          placeholder="Message"
          rows={4}
          className={`input-clean resize-none ${errors.message ? "input-error" : ""}`}
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="error-text">{errors.message.message}</p>
        )}
      </div>

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