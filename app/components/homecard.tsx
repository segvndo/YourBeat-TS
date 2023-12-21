import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
  mainBackgroundColour: string;
};

const Card: FC<CardProps> = ({ title, description, buttonText, buttonLink, mainBackgroundColour }) => {
  return (
    <div className="box-content h-115 w-64 pt-6">
      <div className={`box-content h-96 w-64 p-4 border-4 flex flex-col items-center font-sans ${mainBackgroundColour}`}>
        <div className="text-red-500 font-sans mb-4 font-semibold text-3xl">{title}</div>
        <div className="flex-grow">
          <ul className="text-white pl-4 list-disc text-center font-extralight">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <Link href={buttonLink}>
              <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
