"use client";
import React, { useState } from "react";
import { writeMessage } from "../sanity/actions";
import { useRouter } from "next/navigation";

const ContactForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage = formData;
    writeMessage(newMessage);
    router.push("/contact/thanks");
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Leave your message</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:bg-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            e-mail
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:bg-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-800 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:bg-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
