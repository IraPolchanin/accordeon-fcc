import React from 'react';
import "./customTabs.css";
import TabsContent from './TabsContent';

const tabs = [
  {
    id: 1,
    label: "Tab 1",
    content: <div>This is content for Tab 1</div>,
  },
  {
    id: 2,
    label: "Tab 2",
    content: <div>This is content for Tab 2</div>,
  },
  {
    id: 3,
    label: "Tab 3",
    content: <RandomComponent />,
  },
];

function RandomComponent() {
  return <h1>Some random content</h1>;
}

const CustomTabs = () => {


  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return (
    <TabsContent tabsContent={tabs} handleChange={handleChange} />
  )
}

export default CustomTabs