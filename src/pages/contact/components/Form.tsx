import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import bgImg from "../../../assets/house/form-placeholder.jpg";

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Full name is required (min 2 chars)"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbybtrK9qZTb47gXLeaQiim5yxZsqeaCLm-g7x3zcHn9ua7HNdBHqx9yitATnCY-p9jonw/exec";

    try {
      await axios.post(SCRIPT_URL, JSON.stringify(data), {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      });

      alert("Message sent successfully!");
      reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <section
      className="relative py-16 px-6 my-6"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Form container */}
      <div className="relative max-w-3xl mx-auto  shadow-md p-8 md:p-12 bg-white/90 border border-gray-100">
        <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">Send a Message</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input 
                type="text" 
                placeholder="Full Name *" 
                className={`w-full p-4 bg-slate-100 rounded-md focus:ring-2 focus:ring-red-500 outline-none border ${errors.name ? 'border-red-500' : 'border-transparent'}`}
                {...register("name")}
              />
              {typeof errors.name?.message === 'string' && (
                <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <input 
                type="tel" 
                placeholder="Phone Number *" 
                className={`w-full p-4 bg-slate-100 rounded-md focus:ring-2 focus:ring-red-500 outline-none border ${errors.phone ? 'border-red-500' : 'border-transparent'}`}
                {...register("phone")}
              />
              {typeof errors.phone?.message === 'string' && (
                <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <input 
              type="email" 
              placeholder="Email Address *" 
              className={`w-full p-4 bg-slate-100 rounded-md focus:ring-2 focus:ring-red-500 outline-none border ${errors.email ? 'border-red-500' : 'border-transparent'}`}
              {...register("email")}
            />
            {typeof errors.email?.message === 'string' && (
              <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <textarea 
              placeholder="Message *" 
              rows={6}
              className={`w-full p-4 bg-slate-100 rounded-md focus:ring-2 focus:ring-red-500 outline-none resize-none border ${errors.message ? 'border-red-500' : 'border-transparent'}`}
              {...register("message")}
            />
            {typeof errors.message?.message === 'string' && (
              <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>
            )}
          </div>

          <div className="flex justify-end mt-6">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`${isSubmitting ? 'bg-gray-400' : 'bg-red-500'} text-white px-10 py-4  font-bold uppercase tracking-wider hover:bg-red-800 transition-colors shadow-lg`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;