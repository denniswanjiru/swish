import React from 'react';

import JobTitle from '../atoms/JobTitle';
import CompanyName from '../atoms/CompanyName';
import CardContent from '../molecules/CardContent';
import MidTitle from '../atoms/MidTitle';
import List from '../molecules/List';
import ListItem from '../atoms/ListItem';
import JobCompareWrapper from '../organisms/JobCompareWrapper';

export default function JobCompareCard() {
  return (
    <JobCompareWrapper>
      <CardContent>
        <JobTitle>Senior Software Engineer</JobTitle>
        <CompanyName>The Lions</CompanyName>

        <MidTitle>Role</MidTitle>
        <List>
          <ListItem>
            In this role, you will primarily work as a Senior Backend Engineer within the Technology department building world-class internal products to support Andela’s business needs.
              </ListItem>
        </List>

        <MidTitle>Responsibilities</MidTitle>
        <List>
          <ListItem>
            Develop software solutions by studying information needs; conferring with users; studying systems flow, data usage and work processes; investigating problem areas; following the software development lifecycle
              </ListItem>
          <ListItem>
            In this role, you will primarily work as a Senior Backend Engineer within the Technology department building world-class internal products to support Andela’s business needs.
              </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora cupiditate neque sunt.
              </ListItem>
        </List>

        <MidTitle>Qualifications</MidTitle>
        <List>
          <ListItem>
            4-8 years of software development experience
              </ListItem>
          <ListItem>
            Strong understanding of computer science principles
              </ListItem>
        </List>
      </CardContent>
    </JobCompareWrapper>
  )
}
