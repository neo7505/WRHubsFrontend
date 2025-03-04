import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { CiSettings, CiBoxList } from "react-icons/ci";
import { FcInspection } from "react-icons/fc";
import { TbCirclesRelation } from "react-icons/tb";
import { IoIosApps } from "react-icons/io";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import WRlogo from "../assets/WRlogo.png";

import "./Navbar.css";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = (menu) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
      setActiveMenu(menu);
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = (submenu) => {
    setActiveSubmenu(submenu);
  };

  const menuItems = [
    {
      title: "Project Status",
      icon: CiSettings,
      submenu: ["Project", "Overall Status"],
    },
    {
      title: "CRM",
      icon: TbCirclesRelation,
      submenu: ["HubSpot", "Zapier", "Insightly"],
    },
    {
      title: "Feasibility",
      icon: CiBoxList,
    },
    {
      title: "Inspection App",
      icon: FcInspection,
      submenu: [
        "Projects",
        "Users",
        "Inspectors",
        "Inspectors Map",
        "Inspections Calendar",
      ],
    },
    {
      title: "Energy QC",
      icon: MdOutlineEnergySavingsLeaf,
      submenu: ["Projects", "Users"],
    },
    {
      title: "Report GenX",
      icon: HiOutlineDocumentReport,
      submenu: ["Projects"],
    },
    {
      title: "QC App",
      icon: IoIosApps,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div>
          <img src={WRlogo} alt="" />
        </div>
        <div>WalkerReid</div>
      </div>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <button
              className={`menu-button ${
                activeMenu === item.title ? "active" : ""
              }`}
              onClick={() => {
                toggleMenu(item.title);
                if (!item.submenu) setActiveSubmenu(null);
              }}
            >
              <span className="menu-icon-title">
                <item.icon className="menu-icon" />
                {item.title}
              </span>
              {item.submenu &&
                (openMenu === item.title ? (
                  <FiChevronDown />
                ) : (
                  <FiChevronRight />
                ))}
            </button>
            {item.submenu && openMenu === item.title && (
              <ul className="submenu-list">
                {item.submenu.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className={`submenu-item ${
                      activeSubmenu === sub ? "active" : ""
                    }`}
                    onClick={() => handleSubmenuClick(sub)}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button className="logout-button">
        <IoLogOutOutline className="logout-icon" /> Log out
      </button>
    </div>
  );
};
