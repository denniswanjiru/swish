import React from 'react'
import Chip from '../organisms/Chip';
import Tabs from '../organisms/Tabs';
import Chips from '../ecosystems/Chips';
import CompareTabs from '../ecosystems/CompareTabs';
import CompareJobs from '../ecosystems/CompareJobs';
import PageWrapper from './PageWrapper';

export default function Compare() {
  return (
    <PageWrapper>
      <Chips>
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </Chips>
      <CompareTabs>
        <Tabs />
      </CompareTabs>
      <CompareJobs />
    </PageWrapper>
  )
}


