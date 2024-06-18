import React from "react";

const Sidebar = (props) => {
  const { handleToggleModal, data } = props;

  return (
    <div className="absolute top-0 right-0 bg-zinc-700 shadow-lg shadow-zinc-100 lg:w-2/6 md:w-4/5 md:opacity-90 lg:opacity-100 sm:opacity-80 h-full text-zinc-100 p-8 ">
      <div
        id="image-information"
        className=" h-[95%] flex-col items-center justify-center space-y-6 overflow-y-scroll"
      >
        <h2 className=" text-3xl font-semibold  ">{data?.title}</h2>
        <h4 className="text-md font-light ">{data?.date}</h4>
        <p className=" indent-8 text-lg font-normal">{data?.explanation}</p>
      </div>
      <button onClick={handleToggleModal}>
        <i className="ri-arrow-right-line text-3xl font-bold text-zinc-200 "></i>
      </button>
    </div>
  );
};

export default Sidebar;
