import React from 'react';

import JobTitle from '../atoms/JobTitle';
import CompanyName from '../atoms/CompanyName';
import CardContent from '../molecules/CardContent';
import MidTitle from '../atoms/MidTitle';
import List from '../molecules/List';
import ListItem from '../atoms/ListItem';
import JobCompareWrapper from '../organisms/JobCompareWrapper';

export default function JobCompareCard({ job }) {
  const { Roles, Responsibilities, Qualifications } = job.description;

  const renderList = items => {
    return items && items.map((item, i) => <ListItem key={i}>{item}</ListItem>)
  }

  return (
    <JobCompareWrapper>
      <CardContent>
        <JobTitle>{job.title}</JobTitle>
        <CompanyName>{job.company.name}</CompanyName>

        <MidTitle>Role</MidTitle>
        <List>
          { renderList(Roles) }
        </List>

        <MidTitle>Responsibilities</MidTitle>
        <List>
          {renderList(Responsibilities)}
        </List>

        <MidTitle>Qualifications</MidTitle>
        <List>
          {renderList(Qualifications)}
        </List>
      </CardContent>
    </JobCompareWrapper>
  )
}
