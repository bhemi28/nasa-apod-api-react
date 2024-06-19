import React from "react";

const Footer = (props) => {
  const { handleToggleModal, data } = props;

  return (
    <footer className="absolute bottom-0 left-0 flex w-full items-center justify-between px-8 sm:px-16 py-8 text-zinc-200 bg-gradient-to-t from-zinc-900 to-transparent">
      <div className="">
        <h1 className="text-sm sm:text-xl font-light">NASA APOD API</h1>
        <h2 className="text-xl sm:text-4xl  font-bold">{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="ri-information-line text-xl sm:text-2xl font-bold"></i>
      </button>
    </footer>
  );
};

export default Footer;
