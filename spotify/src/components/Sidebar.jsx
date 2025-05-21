import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniHome } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";


import "./Sidebar.css";


function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>

      <div className={`container-sidebar ${isOpen ? "show" : ""}`}>
        <nav className="sidebar">
          <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)()}>
            <IoCloseOutline color="white" fontSize={30} />
          </button>
          <div className="albums-sidebar">
            <div className="card-sidebar">
              <img src="./img/scotts.jpg" alt="" />
            </div>
            <div className="card-sidebar">
              <img src="./img/juice.jpg" alt="" />
            </div>
            <div className="card-sidebar">
              <img src="./img/eminem.jpg" alt="" srcset="" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;