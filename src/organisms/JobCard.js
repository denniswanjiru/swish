import React from 'react';
import styled, { css } from 'styled-components';
import JobTitle from '../atoms/JobTitle';
import CompanyName from '../atoms/CompanyName';
import JobCardWrapper from './JobCardWrapper';
import CompanyBrand from '../atoms/CompanyBrand';
import Company from '../molecules/Company';
import Location from '../atoms/Location';
import Select from '../molecules/Select';
import Checkbox from '../atoms/Checkbox';
import Posted from '../atoms/Posted';

export default function JobCard({active}) {
  return (
    <JobCardWrapper active={active}>
      <CompanyBrand src="https://driftt.imgix.net/https%3A%2F%2Fdriftt.imgix.net%2Fhttps%253A%252F%252Fs3.amazonaws.com%252Fcustomer-api-avatars-prod%252F1197034%252Fa6bc67cc950652223d55e2eb1028eb25s6yke9cb4zd4%3Ffit%3Dmax%26fm%3Dpng%26h%3D200%26w%3D200%26s%3D0bd8a3b5ee206735f41c34e17f2fea3f?fit=max&fm=png&h=200&w=200&s=5e00e6350fbb199aed43ad7967b1f86e" />
      <div>
        <JobTitle>Senior Software Engineer</JobTitle>
        <Company>
          <CompanyName>The Lions</CompanyName>
          <Location>San Francisco, CA</Location>
        </Company>
      </div>
      <Select>
        <Checkbox type="checkbox" name="job" value="jobtitle" />
        <Posted>2 days ago</Posted>
      </Select>
    </JobCardWrapper>
  )
}
