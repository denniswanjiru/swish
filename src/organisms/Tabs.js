import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

import TabsWrapper from '../molecules/TabsWrapper';
import Tab from '../atoms/Tab';


@inject('store')
@observer
export default class Tabs extends Component {
  isActive = tab => {
    const { activeTab } = this.props.store;
    return activeTab === tab;
  }

  render() {
    const { updateActiveTab } = this.props.store;

    return (
      <TabsWrapper>
        <Tab active={this.isActive('desc')} onClick={() => updateActiveTab('desc')}>Job Description</Tab>
        <Tab active={this.isActive('company')} onClick={() => updateActiveTab('company')}>Company</Tab>
        <Tab active={this.isActive('location')} onClick={() => updateActiveTab('location')}>Location</Tab>
        <Tab active={this.isActive('salary')} onClick={() => updateActiveTab('salary')}>Salary & Benefits</Tab>
      </TabsWrapper>
    )
  }
}
