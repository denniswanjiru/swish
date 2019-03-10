import React, { Component } from 'react'
import moment from 'moment';
import { inject, observer } from 'mobx-react';

import JobTitle from '../atoms/JobTitle';
import CompanyName from '../atoms/CompanyName';
import JobCardWrapper from './JobCardWrapper';
import CompanyBrand from '../atoms/CompanyBrand';
import Company from '../molecules/Company';
import Location from '../atoms/Location';
import Select from '../molecules/Select';
import Checkbox from '../atoms/Checkbox';
import Posted from '../atoms/Posted';


@inject('store')
@observer
export default class JobCard extends Component {
  handleSelected = job => {
    if (this.selected.checked) {
      this.props.store.addSelected(job);
    } else {
      this.props.store.removeSelected(job.id);
    }
  }

  render() {
    const { job, store } = this.props;
    const checked = store.getSelected.find(select =>  job.id === select.id);
    return (
      <JobCardWrapper>
        <CompanyBrand src={job.company.brand} />
        <div>
          <JobTitle>{job.title}</JobTitle>
          <Company>
            <CompanyName>{job.company.name}</CompanyName>
            <Location>{job.location}</Location>
          </Company>
        </div>
        <Select>
          <Checkbox
            type="checkbox"
            name="job" value="jobtitle"
            ref={check => this.selected = check}
            onChange={() => this.handleSelected(job)}
            checked={!!checked}
          />
          <Posted>{moment(job.timestamp.createdAt, 'YYYYMMDD').fromNow()}</Posted>
        </Select>
      </JobCardWrapper>
    )
  }
}

