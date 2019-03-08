import React from 'react';

import CompareWrapper from './CompareWrapper';
import JobCompareCard from '../organisms/JobCompareCard';

export default function CompareJobs({ jobs }) {
  const renderJobs = () => {
    return jobs.map(job => <JobCompareCard key={job.id} job={job} />)
  }

  return (
    <CompareWrapper>
      { renderJobs() }
    </CompareWrapper>
  )
}
