import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string[];
  buttonText: string;
  mainBackgroundColour: string;
  borderColour: string;
};

const Card: FC<CardProps> = ({ title, description, buttonText, buttonLink, mainBackgroundColour, borderColour }) => {
  return (
    <div className="box-content h-115 w-64 pt-6">
      <div className={`box-content h-96 w-64 p-4 border-4 flex flex-col items-center font-sans ${mainBackgroundColour}`}>
        <div>Hello</div>
        <div className="text-yellow-50 font-sans mb-4 font-semibold text-3xl">{title}</div>
        <div className="flex-grow bg-gray-800 rounded-md p-4">
          <ul className="text-yellow-50 pl-4 list-disc text-center font-extralight">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
