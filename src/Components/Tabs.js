import React, { useState } from "react";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";
import AllProjects from "./AllProjects";
import  "./TabsStyle.css"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="tabs">
        <li className={activeTab === "all" ? "active" : ""} onClick={() => handleTabClick("all")}>
          All
        </li>
      </ul>

      {activeTab === "all" && <AllProjects />}
      {activeTab === "frontend" && <FrontendProjects />}
      {activeTab === "backend" && <BackendProjects />}

    </div>
  );
};

export default Tabs;

