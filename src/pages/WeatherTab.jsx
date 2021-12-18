import React, { useState } from 'react';
import { Card, List, Avatar } from 'antd';
import Weather from "./Weather";
import Compare from "./Compare";

const tabList = [
  {
    key: 'tab1',
    tab: 'Current',
  },
  {
    key: 'tab2',
    tab: 'Compare',
  },
];


export const TabsCard = () => {
  const [activeTabKey, setActiveTabKey] = useState('tab1');

  const onTabChange = key => {
    console.log(key)
    setActiveTabKey(key);
  };

  return (
    <>
      <Card
        style={{ width: '100%' }}
        title="Weather"
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={key => {
          onTabChange(key);
        }}
      >
      {activeTabKey === 'tab1'?<Weather />:<Compare />}
      </Card>
    </>
  );
};
