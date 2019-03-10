import React from 'react';

import CompareWrapper from './CompareWrapper';
import JobCompareCard from '../organisms/JobCompareCard';

export default function CompareJobs({ jobs, activeTab }) {
  const renderJobs = () => {
    return jobs.map(job => <JobCompareCard key={job.id} job={job} activeTab={activeTab} />)
  }

  return (
    <CompareWrapper>
      { renderJobs() }
    </CompareWrapper>
  )
}
