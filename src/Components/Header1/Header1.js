import React from "react";
import HeaderMiddle1 from "./HeaderMiddle1";
import HeaderNavBar1 from "./HeaderNavBar1";

export default function Header1() {
  return (
    <>
      <header className="site-header">
        <HeaderMiddle1
          options={[
            { value: "all", label: "Categories" },
            { value: "kurti", label: "Kurtis" },
            { value: "saree", label: "Sarees" },
            { value: "kurti sets", label: "Kurti sets" },
            { value: "churidar", label: "Churidars" },
            { value: "churidar materials", label: "Churidar materials" },
          ]}
        />
        <HeaderNavBar1 />
      </header>
    </>
  );
}
