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
    <div className="box-content h-115 w-64 pt-4">
      <div className={`box-content h-96 w-64 p-4 flex flex-col items-center font-sans rounded-lg ${mainBackgroundColour}`}>


        <div className="box-content h-96 w-72 rounded-lg bg-green-800 text-yellow-50 font-sans mb-4 font-semibold text-3xl text-center pt-2">
          
          {title}
          
        <div className="flex-grow bg-gray-800 border-green-500 border-8 rounded-md p-4 pb-60 text-lg">
          <ul className="text-yellow-50 pl-6 list-disc text-center font-extralight">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        </div>


      </div>
    </div>
  );
};

export default Card;
