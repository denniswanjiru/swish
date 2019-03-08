import React from 'react';

import JobDetails from '../organisms/JobDetails';
import JobCard from '../organisms/JobCard';
import PageWrapper from './PageWrapper';
import JobListings from '../ecosystems/JobListngs';

export default function Jobs() {
  return (
    <PageWrapper>
      <JobListings>
        <JobCard />
        <JobCard  active />
        <JobCard />
        <JobCard />
        <JobCard />
      </JobListings>
      <JobDetails />
    </PageWrapper>
  )
}
