import React from "react";
import { TitleTypeProps } from "@/app/type";

const TitleCenter: React.FC<TitleTypeProps> = ({title}) => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="block w-full h-0.5 bg-secondary-100"></div>
      <h5 className="block font-iranBold text-2xl text-primary-100 bg-white  absolute -top-6 text-center mx-auto  p-2">
        {title}
      </h5>
    </div>
  );
};

export default TitleCenter;
