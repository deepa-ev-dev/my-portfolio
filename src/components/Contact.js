import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold">Contact</h2>
      <form className="mt-4">
        <label htmlFor="name" className="block">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border p-2 w-full mb-4"
          required
        />

        <label htmlFor="email" className="block">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border p-2 w-full mb-4"
          required
        />

        <label htmlFor="message" className="block">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="border p-2 w-full mb-4"
          required
        ></textarea>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
