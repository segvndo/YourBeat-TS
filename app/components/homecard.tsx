import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
  mainBackgroundColour?: string; // Optional background color prop
  borderColour?: string;
  titleColour?: string;
  descriptionColour?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  mainBackgroundColour,
  borderColour,
  titleColour,
  descriptionColour,
}) => {
  return (
    <div className={`box-content h-100 w-72 ${mainBackgroundColour || 'bg-green-500'} pt-5 rounded-2xl`}>
      <div className={`box-content h-20 w-68 flex justify-center items-center ${titleColour || 'bg-green-700'} mt-neg-2 rounded-t-2xl`}>
        <div className={`text-yellow-100 font-sans mb-4 font-semibold text-4xl flex justify-center`}>{title}</div>
      </div>
      <div className={`box-content h-96 w-54 p-4 border-4 ${borderColour || 'border-green-800'} rounded-2xl flex flex-col items-center font-sans ${mainBackgroundColour}`}>
        <div className="flex-grow">
          <ul className={`text-yellow-100 pl-4 list-disc text-center font-extralight ${descriptionColour || 'bg-gray-800'}`}>
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
