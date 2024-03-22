"use client";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, link, image }) => {
  return (
    <Link
      href={link}
      className="max-w-xs relative overflow-hidden w-full h-96 border bg-cover bg-center border-blue-950 shadow-blue-950 shadow-2xl rounded transform transition-all ease-in duration-150 hover:scale-[1.04] text-2xl hover:text-4xl "
    >
      <img src={image} className="object-cover object-center" alt={title} />
      <div className="flex px-6 py-4 absolute bottom-0 left-0 w-full h-full justify-center items-center bg-black/50 shadow-text">
        <div className="font-bold mb-2 uppercase relative top-24 text-center w-full">
          {title}
        </div>
      </div>
    </Link>
  );
};
export default Card;
