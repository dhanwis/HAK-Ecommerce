import React from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderNavBar from "./HeaderNavBar";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <HeaderMiddle
          options={[
            { value: "all", label: "Categories" },
            { value: "kurti", label: "Kurtis" },
            { value: "saree", label: "Sarees" },
            { value: "kurti sets", label: "Kurti sets" },
            { value: "churidar", label: "Churidars" },
            { value: "churidar materials", label: "Churidar materials" },
          ]}
        />
        <HeaderNavBar />
      </header>
    </>
  );
}
