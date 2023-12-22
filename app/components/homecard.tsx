import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string[];
  mainBackgroundColour: string;
  secondaryBackgroundColour: string;
  listBorderColour: string;
};

const Card: FC<CardProps> = ({ title, description, mainBackgroundColour, secondaryBackgroundColour, listBorderColour }) => {
  return (
    <div className="box-content h-96 w-64 pt-4">
      <div className={`box-content h-96 w-64 p-4 flex flex-col items-center font-sans rounded-xl ${mainBackgroundColour}`}>


        <div className={`box-content h-96 w-72 rounded-xl text-yellow-50 font-sans font-semibold text-3xl text-center pt-2 ${secondaryBackgroundColour}`}>

          {title}

          <div className={`flex-grow bg-gray-800 border-4 rounded-xl p-4 pb-60 text-lg ${listBorderColour}`}>
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