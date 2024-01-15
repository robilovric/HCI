import React from "react";

const ContactUs = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-white">
      <div className="max-w-md w-full p-8 bg-gray-100 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="flex flex-col space-y-4">
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
            className="bg-black hover:bg-gray-600 text-white py-2 rounded-md transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactUs;