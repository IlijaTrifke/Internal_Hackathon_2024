import clsx from "clsx";
import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={clsx(
        `relative flex w-[13rem] items-center justify-center gap-3 rounded-full border px-11 py-3 text-lg font-light tracking-widest text-white transition-all ${className}`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
