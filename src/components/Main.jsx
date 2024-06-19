import React from "react";

const Main = (props) => {
  const { data } = props;

  return (
    <div className=" absolute h-[100%] w-full">
      <img
        src={data?.hdurl}
        alt={data.title || "bg_img"}
        className="h-full md:w-full lg:w-full object-cover"
      />
    </div>
  );
};

export default Main;
