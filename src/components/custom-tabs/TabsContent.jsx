import React, { useState } from 'react';
import "./customTabs.css";

const TabsContent = ({ tabsContent, handleChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  
  const handleTabChange = currentPosition => {
    setCurrentTabIndex(currentPosition);
    handleChange(currentPosition);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tab, index) => (
          <div
            key={tab.id}
            className={`tab-item ${index === currentTabIndex ? 'active' : ''}`}
            onClick={() => handleTabChange(index)}
          >
            <span className="label">{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  )
}

export default TabsContent