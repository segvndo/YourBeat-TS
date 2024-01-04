import React, { FC } from "react";

type CardProps = {
  title: string;
  description: string[];
  mainBackgroundColour: string;
  secondaryBackgroundColour: string;
  listBorderColour: string;
  style?: React.CSSProperties;
};

const Card: FC<CardProps> = ({ title, description, mainBackgroundColour, secondaryBackgroundColour, listBorderColour, style }) => {

  const outerContainerSZ = "h-96 w-64";
  const listSize = "h-96 w-72"
  const listBG = "bg-gray-800"

  return (
    <div className={`box-content ${outerContainerSZ} pt-4`}>
      <div className={`box-content ${outerContainerSZ} p-4 flex flex-col items-center font-sans rounded-xl ${mainBackgroundColour}`}>


        <div className={`box-content ${listSize} rounded-xl text-yellow-50 font-sans font-semibold text-3xl text-center pt-2 ${secondaryBackgroundColour}`}>

          {title}

          <div className={`${listBG} border-4 rounded-xl p-4 pb-60 text-lg ${listBorderColour}`} style={{ maxHeight: '100%', overflowY: 'auto'}}>

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