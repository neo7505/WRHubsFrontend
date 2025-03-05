import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FiEdit, FiCopy, FiDownload, FiTrash2, FiRefreshCw } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./OverallStatus.css";

const OverallStatus = () => {
 
  


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

    

      <div className="table-container">
        <div className="table-header">
          <input type="text" placeholder="Overall Status" className="search-bar" />
          <div className="table-icons">
            <FiEdit className="icon" />
          
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
                <th>Feasibility</th>
                <th>Inspection</th>
                <th>Energy Modelling</th>
                <th>Energy QC</th>
                <th>RepGenX</th>
               
               
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fixed">
                  <input type="checkbox" id="project-1" />
                  <label htmlFor="project-1">41877783</label>
                </td>
                <td>Approved</td>
                <td>Completed</td>
                <td>Pending</td>
                <td>Pending</td>
                <td>Pending</td>
                
              
               
              </tr>
              <tr>
                <td className="fixed">
                  <input type="checkbox" id="project-2" />
                  <label htmlFor="project-2">41877784</label>
                </td>
                <td>Approved</td>
                <td>Completed</td>
                <td>Pending</td>
                <td>Pending</td>
                <td>Pending</td>
                
               
              </tr>
              <tr>
                <td className="fixed">
                  <input type="checkbox" id="project-3" />
                  <label htmlFor="project-3">41877785</label>
                </td>
                <td>Approved</td>
                <td>Completed</td>
                <td>Pending</td>
                <td>Pending</td>
                <td>Pending</td>
               
               
              </tr>
              <tr>
                <td className="fixed">
                  <input type="checkbox" id="project-4" />
                  <label htmlFor="project-4">41877786</label>
                </td>
                <td>Approved</td>
                <td>Completed</td>
                <td>Pending</td>
                <td>Pending</td>
                <td>Pending</td>
               
              
              </tr>
              <tr>
                <td className="fixed">
                  <input type="checkbox" id="project-5" />
                  <label htmlFor="project-5">41877787</label>
                </td>
                <td>Approved</td>
                <td>Completed</td>
                <td>Pending</td>
                <td>Completed</td>
                <td>Pending</td>
              
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OverallStatus ;