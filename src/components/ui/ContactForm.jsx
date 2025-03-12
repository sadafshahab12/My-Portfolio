import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { BsExclamationCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setMessage({ text: "Message sent successfully!", type: "success" });
      reset();
      setTimeout(() => {
        setMessage({ text: "", type: "success" });
      }, 1500);
    } catch (error) {
      console.log(error);
      setMessage({ text: "Something went wrong. Try again!", type: "error" });
      setTimeout(() => {
        setMessage({ text: "", type: "error" });
      }, 1500);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className=" bg-[#f9f9ff] py-15 md:py-20 lg:py-30 px-5 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-bold xxs:font-semibold text-xl xxxs:text-2xl xxs:text-3xl xs:text-4xl text-center pb-7">
          Contact Me
        </h2>
        {message.text && (
          <p
            className={`text-14  flex-center gap-2 pb-4 capitalize ${
              message.type === "success" ? "text-green-700" : "text-red-500"
            }`}
          >
            {" "}
            {message.type === "success" ? (
              <AiOutlineCheckCircle className="w-6 h-6 " />
            ) : (
              <BsExclamationCircle className="w-6 h-6 " />
            )}
            {message.text}
          </p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="border border-mysky text-12 py-2 px-4 w-full block placeholder:text-textlightBlack outline-none focus:ring-2 focus:ring-mypurple transition-all ease-in duration-300"
            />
            {errors.name && (
              <p className="text-12 text-red-500 flex-left gap-2">
                <BsExclamationCircle />
                Name is required
              </p>
            )}
          </div>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="border border-mysky text-12 py-2 px-4 w-full block placeholder:text-textlightBlack outline-none focus:ring-2 focus:ring-mypurple transition-all ease-in duration-300"
            />
            {errors.email && (
              <p className="text-12 text-red-500 flex-left gap-2">
                <BsExclamationCircle />
                Valid email is required.
              </p>
            )}
          </div>
          <div className="space-y-2">
            <input
              type="tel"
              placeholder="Your Phone Number"
              {...register("phone", {
                required: true,
                pattern: /^[0-9+\-() ]*$/i,
              })} // Allows numbers, +, -, (), and spaces
              className="border border-mysky text-12 py-2 px-4 w-full block placeholder:text-textlightBlack outline-none focus:ring-2 focus:ring-mypurple transition-all ease-in duration-300"
            />
            {errors.phonenumber && (
              <p className="text-12 text-red-500 flex-left gap-2">
                <BsExclamationCircle />
                Invalid phone number format.
              </p>
            )}
          </div>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Subject"
              {...register("subject", { required: true })}
              className="border border-mysky text-12 py-2 px-4 w-full block placeholder:text-textlightBlack outline-none focus:ring-2 focus:ring-mypurple transition-all ease-in duration-300"
            />
            {errors.subject && (
              <p className="text-12 text-red-500 flex-left gap-2">
                <BsExclamationCircle />
                Subject is required.
              </p>
            )}
          </div>
          <div className="space-y-2">
            <textarea
              placeholder="Your Message"
              {...register("message", {
                required: true,
              })}
              className="border border-mysky text-12 py-2 px-4 w-full block placeholder:text-textlightBlack outline-none focus:ring-2 focus:ring-mypurple transition-all ease-in duration-300"
            />
            {errors.message && (
              <p className="text-12 text-red-500 flex-left gap-2">
                <BsExclamationCircle />
                Message cannot be empty.
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="button w-full hover:bg-gradient-to-b hover:from-textlightBlack hover:to-textlightBlack "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
