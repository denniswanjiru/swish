import React from 'react';

import TabsWrapper from '../molecules/TabsWrapper';
import Tab from '../atoms/Tab';

export default function Tabs() {
  return (
    <TabsWrapper>
      <Tab active>Job Description</Tab>
      <Tab>Company</Tab>
      <Tab>Location</Tab>
      <Tab>Salary & Benefits</Tab>
    </TabsWrapper>
  )
}
