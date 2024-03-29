"use client";

import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const isButtonDisabled = email.length < 5 || !email.includes("@");

  const handleOnSendClick = () => {
    alert(`Email sent to: ${email}`);
  };

  return (
    <div className="bg-lapis-blue text-night-black w-full mt-10 px-10 py-16 text-center">
      <h1 className="font-bold text-2xl ">Subscribe to newsletter</h1>
      <p className="pt-4">
        Enter your email address to register to our newsletter subscription!
      </p>
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="mt-3 p-2 rounded-lg border-white border-1 shadow-lg text-black"
        />
        <button
          className={`mt-4 px-10 py-2 ${
            isButtonDisabled
              ? "bg-french-gray text-black text-lg font-semibold rounded-lg"
              : "bg-light-green text-black text-lg font-semibold rounded-lg"
          }`}
          type="submit"
          onClick={handleOnSendClick}
          disabled={isButtonDisabled}
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default SubscribeSection;
