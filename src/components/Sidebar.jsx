import React from "react";

const Sidebar = (props) => {
  const { handleToggleModal, data } = props;

  return (
    <div className="absolute top-0 right-0 bg-zinc-700 shadow-lg shadow-zinc-100 lg:w-2/6 md:w-4/5 md:opacity-90 lg:opacity-100 opacity-90 h-full w-full text-zinc-100 p-8 sm:space-y-0 space-y-4">
      <div
        id="image-information"
        className="h-[90%] sm:h-[95%] flex-col items-center justify-center sm:space-y-6 space-y-3"
      >
        <h2 className=" text-2xl sm:text-3xl font-semibold ">{data?.title}</h2>
        <h4 className=" text-sm sm:text-md font-light ">{data?.date}</h4>
        <p className=" indent-8 text-base sm:text-lg text-justify font-normal sm:h-[90%] h-[80%] overflow-y-scroll">
          {data?.explanation}
        </p>
      </div>
      <button onClick={handleToggleModal}>
        <i className="ri-arrow-right-line text-3xl font-bold text-zinc-200 mt-4 "></i>
      </button>
    </div>
  );
};

export default Sidebar;
