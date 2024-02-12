import React from "react";

const ContactUs = () => {
  return (
    <div className="inline-flex justify-around w-full h-full my-auto">
      <div className="flex flex-col max-w-md w-full p-8 bg-gray-100 rounded-md shadow-lg my-7">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="flex flex-col gap-2">
          <label className="text-sm">Your Name:</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />

          <label className="text-sm">Your Email:</label>
          <input
            type="email"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />

          <label className="text-sm">Message:</label>
          <textarea
            rows={4}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Type your message here"
          ></textarea>

          <button
            type="submit"
            className="bg-black hover:bg-gray-600 text-white py-2 rounded-md transition-all duration-300 mt-10"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
