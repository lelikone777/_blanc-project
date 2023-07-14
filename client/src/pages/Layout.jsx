import reactLogo from "../../public/img/react.svg";
import viteLogo from "../../public/img/vite.svg";
import React from "react";

const Layout = ({ children }) => {
  return (
    <main>
      <div className="container m-auto">
        <h2 className="animate-jump-in animate-delay-300  m-auto w-full flex justify-center text-5xl text-teal-700 text-center">
          <img src={reactLogo} alt="vite logo" />
          Layout
          <img src={viteLogo} alt="vite logo" />
        </h2>

        {children}
      </div>
    </main>
  );
};

export default Layout;
