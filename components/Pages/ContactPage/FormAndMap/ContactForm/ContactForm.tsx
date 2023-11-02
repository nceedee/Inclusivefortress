import { Button } from "@/components/Global/Button/Button";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      action="https://formspree.io/f/meqbdaeb"
      method="POST"
      className="md:w-[40%] sm:w-[90%]"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-600 text-sm font-medium mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-b border-gray-300 outline-none py-2 px-3 text-gray-700"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-600 text-sm font-medium mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b border-gray-300 outline-none py-2 px-3 text-gray-700"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-600 text-sm  font-medium mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border-b border-gray-300 py-2 px-3 outline-none text-gray-700"
          required
        ></textarea>
      </div>

      <Button type="submit">Send</Button>
    </form>
  );
};
