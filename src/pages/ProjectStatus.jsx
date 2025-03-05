import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FiEdit, FiCopy, FiDownload, FiTrash2, FiRefreshCw } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./ProjectStatus.css";

const ProjectStatus = () => {
  const [activeTab, setActiveTab] = useState("Feasibility");
  const tabs = [
    "Feasibility",
    "Energy Models",
    "Certification Report",
    "Certification Multi-Bldg",
    "Copy of CFM Calc",
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="project-container">
      <div className="project-header">
        <h2>WRS Status</h2>
        <div className="header-icons">
          <IoNotificationsOutline className="icon" />
          <div className="profile-dropdown">
            <FaUserCircle className="icon" />
            <span>User <RiArrowDropDownLine /> </span>
          </div>
        </div>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="table-container">
        <div className="table-header">
          <input type="text" placeholder="Search Projects" className="search-bar" />
          <div className="table-icons">
            <FiEdit className="icon" />
            <FiCopy className="icon" />
            <FiDownload className="icon" />
            <FiTrash2 className="icon" />
            <FiRefreshCw className="icon" />
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th className="fixed">Project ID</th>
                <th>Receipt</th>
                <th>Project Name</th>
                <th># of Bldgs</th>
                <th>Client Area</th>
                <th>Address</th>
                <th>Improvement</th>
               
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fixed">
                  <input type="checkbox" id="project-1" />
                  <label htmlFor="project-1">41877783</label>
                </td>
                <td>TRUE</td>
                <td>Schuylkill Valley</td>
                <td>1</td>
                <td>17000</td>
                <td>6841 Collamer Road East</td>
                <td>HVAC + Envelope</td>
              
               
              </tr>
              <tr>
                <td className="fixed">
                  <input type="checkbox" id="project-2" />
                  <label htmlFor="project-2">41877784</label>
                </td>
                <td>FALSE</td>
                <td>Project 2</td>
                <td>2</td>
                <td>20000</td>
                <td>123 Main St</td>
                <td>Envelope</td>
               
              </tr>
              <tr>
                <td className="fixed">
                  <input type="checkbox" id="project-3" />
                  <label htmlFor="project-3">41877785</label>
                </td>
                <td>TRUE</td>
                <td>Project 3</td>
                <td>3</td>
                <td>25000</td>
                <td>456 Elm St</td>
                <td>HVAC</td>
               
              </tr>
              <tr>
                <td className="fixed">
                  <input type="checkbox" id="project-4" />
                  <label htmlFor="project-4">41877786</label>
                </td>
                <td>FALSE</td>
                <td>Project 4</td>
                <td>4</td>
                <td>30000</td>
                <td>789 Oak St</td>
                <td>HVAC + Envelope</td>
              
              </tr>
              <tr>
                <td className="fixed">
                  <input type="checkbox" id="project-5" />
                  <label htmlFor="project-5">41877787</label>
                </td>
                <td>TRUE</td>
                <td>Project 5</td>
                <td>5</td>
                <td>35000</td>
                <td>101 Pine St</td>
                <td>Envelope</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;