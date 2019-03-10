import React from 'react';

import JobTitle from '../atoms/JobTitle';
import CompanyName from '../atoms/CompanyName';
import CardContent from '../molecules/CardContent';
import JobCompareWrapper from '../organisms/JobCompareWrapper';
import Description from './Description';
import Salary from './Salary';
import CompanyInfo from './CompanyInfo';
import Location from './Location';

export default function JobCompareCard({ job, activeTab }) {
  return (
    <JobCompareWrapper>
      <CardContent>
        <JobTitle>{job.title}</JobTitle>
        <CompanyName>{job.company.name}</CompanyName>

        {activeTab === 'desc' && <Description job={job} />}
        {activeTab === 'location' && <Location />}
        {activeTab === 'salary' && <Salary />}
        {activeTab === 'company' && <CompanyInfo />}
      </CardContent>
    </JobCompareWrapper>
  )
}
