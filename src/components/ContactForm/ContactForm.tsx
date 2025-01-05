"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        // Limit subject field to 500 characters
        if (name === "subject" && value.length > 100) {
            return;
        }

        // Ensure mobileNumber contains only digits
        if (name === "mobileNumber" && !/^\d*$/.test(value)) {
            return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch("/api/submitForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorMessage = await response.json();
                throw new Error(errorMessage.error || "Failed to submit the form");
            }

            setSuccess("Form submitted successfully!");
            setFormData({
                fullName: "",
                mobileNumber: "",
                email: "",
                subject: "",
                message: "",
            });

            // Clear success message after a delay
            setTimeout(() => {
                setSuccess(null);
            }, 3000);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message || "Something went wrong");
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center">
            <div className="pl-6 pr-6 pb-6 w-full max-w-lg">
                <h2 className="text-3xl font-medium text-gray-800 mb-6 font-primary">
                    Contact <span className="text-blue-500 font-extrabold">Us</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 font-primary">
                    {/* Full Name */}
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Mobile Number */}
                    <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="Mobile number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Subject */}
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject (max 500 characters)"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                        required
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-b from-[#FF8E24] to-[#FF7729] font-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 text-xl"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>

                {/* Feedback Messages */}
                <AnimatePresence>
                    {success && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="mt-4 p-4 text-green-800 bg-green-100 border border-green-300 rounded-lg"
                        >
                            {success}
                        </motion.div>
                    )}
                </AnimatePresence>

                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default ContactForm;
