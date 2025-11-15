/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useTheme } from "next-themes";
import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser";

type FormDataState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [phone, setPhone] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      const result: EmailJSResponseStatus = await emailjs.send(
        "service_tt8bv3c",
        "template_pihx8yj",
        templateParams,
        "0l_xHzUJYaIdqWtuM"
      );

      if (result.text === "OK") {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setPhone("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (submissionError) {
      console.error("Error submitting form:", submissionError);
      setError("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="w-full py-4 mb-12 px-4 sm:px-8  md:px-16 relative overflow-hidden ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Fade triggerOnce>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Get In Touch
            </h2>
            <p className="text-lg max-w-xl mx-auto text-slate-700 dark:text-slate-300">
              Got a project in mind? Let's talk. Whether you're looking to build something new, modernize existing systems, or explore what's possible, we're here to help. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </Fade>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="mb-8 text-slate-600 dark:text-slate-400">
                Fill out the form below and our team will respond within 24 hours to discuss your project requirements and explore how we can help you achieve your technology goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Phone
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      +92 348 9745648
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      +92 302 9825213
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Email
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      info@cybercircus.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Location
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      J2 Block Block J 2 Phase 2 Johar Town, Lahore, 54782
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 hidden lg:block">
              <h4 className="font-medium mb-4 text-slate-900 dark:text-white">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/cybercircusofficial"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-pink-600 dark:text-pink-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/cybercircusofficial"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-slate-800 dark:text-slate-200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@cybercircusofficial"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-600 dark:text-red-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/cybercircus"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-8"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="w-16 h-16 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400">
                  Message Sent!
                </h3>
                <p className="mt-2 text-center text-slate-700 dark:text-slate-300">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 dark:bg-red-900/30 dark:text-red-400 rounded-lg">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-slate-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 dark:bg-gray-800 rounded-lg border text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-slate-900 dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 dark:bg-gray-800 py-3 rounded-lg border text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-slate-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <PhoneInput
                    {...({
                      className: `w-full px-4 py-3 rounded-lg border transition-colors ${
                        isDarkMode
                          ? "border-slate-700 bg-slate-800 text-white focus:ring-blue-500"
                          : "border-slate-200 bg-white text-slate-900"
                      }`,
                      defaultCountry: "us",
                      value: phone,
                      onChange: handlePhoneChange,
                      inputClassName:
                        "w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                      dropdownClassName: "dark:bg-slate-800 text-slate-900 dark:text-white",
                      containerStyle: { width: "100%" },
                      style: {
                        "--react-international-phone-border-radius": "0.5rem",
                        "--react-international-phone-border-color": isDarkMode
                          ? "rgb(51, 65, 85)"
                          : "rgb(226, 232, 240)",
                        "--react-international-phone-background-color": isDarkMode
                          ? "rgb(30, 41, 59)"
                          : "white",
                        "--react-international-phone-text-color": isDarkMode
                          ? "white"
                          : "rgb(15, 23, 42)",
                        "--react-international-phone-selected-dropdown-item-background-color":
                          isDarkMode ? "rgb(51, 65, 85)" : "rgb(241, 245, 249)",
                        "--react-international-phone-country-selector-background-color-hover":
                          isDarkMode ? "rgb(51, 65, 85)" : "rgb(241, 245, 249)",
                      } as React.CSSProperties,
                    } as any)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-slate-900 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 dark:bg-gray-800 rounded-lg border text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors focus:outline-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg flex items-center justify-center transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

