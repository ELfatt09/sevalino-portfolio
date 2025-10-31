import React, { useState } from "react";
import { motion } from "motion/react";
import vector1265 from "../assets/graphics/black-diagonal-arrow.svg";

export const ContactForm = ()  => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formFields = [
    {
      id: "name",
      label: "Name",
      placeholder: "enter your full name",
      type: "text",
      isTextarea: false,
    },
    {
      id: "email",
      label: "Email",
      placeholder: "enter your email",
      type: "email",
      isTextarea: false,
    },
    {
      id: "subject",
      label: "Subject",
      placeholder: "e.g. Freelance Project / Internship Opportunity",
      type: "text",
      isTextarea: false,
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Tell me more about your project or idea...",
      type: "text",
      isTextarea: true,
    },
  ];

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      action="https://formspree.io/f/manlbowg"
      method="POST"
      className="gap-8 px-6 py-9 bg-text/5 rounded-lg md:rounded-2xl flex flex-col items-start relative font-sans"
    >
      <header className="gap-3 self-stretch w-full  flex flex-col items-start relative">
        <h1 className="relative self-stretch   font-normal text-white text-3xl md:text-4xl tracking-[0] leading-[normal]">
          Let&apos;s Talk
        </h1>

        <p className="relative self-stretch text-sm  font-normal text-text/60 md:text-base tracking-[0] leading-[normal]">
          Have a project in mind or looking for a developer to collaborate with?
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </p>
      </header>

      <div className="flex flex-col items-start gap-3 md:gap-4 self-stretch w-full relative flex-[0_0_auto]">
        {formFields.map((field) => (
          <div
            key={field.id}
            className="gap-2 md:gap-3 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative"
          >
            <label
              htmlFor={field.id}
              className="relative self-stretch -mt-px  font-semibold text-white text-sm md:text-base tracking-[0] leading-[normal]"
            >
              {field.label}
            </label>

            {field.isTextarea ? (
              <textarea
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleInputChange}
                placeholder={field.placeholder}
                required
                rows={'5'}
                aria-required="true"
                className="relative w-full h-full py-2 px-2 md:py-4 placeholder:font-medium text-white text-base  placeholder:text-[#fffbfb80] bg-transparent resize-none rounded-[7px] border border-solid border-[#ffffffb2] shadow-[0px_4px_6px_#00000040]"
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleInputChange}
                placeholder={field.placeholder}
                
                required
                aria-required="true"
                className="py-2 px-2 md:py-4 relative w-full  placeholder:font-medium text-white text-base tracking-[0] leading-[13.9px] placeholder:text-[#fffbfb80] bg-transparent rounded-[7px] border border-solid border-[#ffffffb2] shadow-[0px_4px_6px_#00000040]"
              />
            )}
      </div>
        ))}
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-[8.03px] px-5 py-3.5 bg-primary rounded-[34.39px] relative flex-[0_0_auto] cursor-pointer hover:opacity-90 transition-opacity"
      >
        <span className="relative flex items-center justify-center w-fit mt-[-1.15px]  font-bold text-background text-base tracking-[-0.48px] leading-[normal] uppercase">
          Send Message
        </span>

        <img
          className="relative w-[9.19px] h-[9.19px]"
          alt="Send arrow icon"
          src={vector1265}
        />
      </button>
    </motion.form>
  );
};
