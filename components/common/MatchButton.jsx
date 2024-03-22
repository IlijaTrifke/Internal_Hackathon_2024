"use client";
import React from "react";

const MatchButton = ({ handleMatch }) => {
  return (
    <button
      className="w-1/3 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
      action={handleMatch}
    >
      Match
    </button>
  );
};

export default MatchButton;
