import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="box-content h-96 w-64 p-4 border-4 bg-gray-600 rounded-xl flex flex-col items-center font-sans">
      <div className="text-red-500 font-sans mb-4 font-semibold text-3xl">{title}</div>
      <div className="flex-grow">
        <ul className="text-white pl-4 list-disc text-center font-extralight">{description}</ul>
      </div>
      <div>
        <Link href={buttonLink}>
          <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};