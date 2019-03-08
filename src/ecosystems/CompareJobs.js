import React from 'react';

import CompareWrapper from './CompareWrapper';
import JobCompareCard from '../organisms/JobCompareCard';

export default function CompareJobs() {
  return (
    <CompareWrapper>
      <JobCompareCard />
      <JobCompareCard />
      <JobCompareCard />
      <JobCompareCard />
    </CompareWrapper>
  )
}
