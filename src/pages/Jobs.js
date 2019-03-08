import styled from 'styled-components';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import JobDetails from '../organisms/JobDetails';
import JobCard from '../organisms/JobCard';
import PageWrapper from './PageWrapper';
import JobListings from '../ecosystems/JobListngs';
import Chip from '../organisms/Chip';
import Chips from '../ecosystems/Chips';
import Button from '../atoms/Button';

@inject('store')
@observer
export default class Jobs  extends Component {
  componentDidMount() {
    this.props.store.fetchJobs();
  }

  renderJobs = () => {
    const { jobs } = this.props.store;
    return jobs.map(job => (<JobCard key={job.id} job={job} />))
  }

  renderChips = () => {
    const { selected } = this.props.store;
    return selected.map(({id, title, company}) => (
      <Chip
        key={id}
        id={id}
        title={title}
        company={company.name}
        handleClick={this.handleSelected}
      />
    ))
  }

  handleSelected = id => {
    this.props.store.removeSelected(id);
  }

  render() {
    const { selectedCount } = this.props.store;
    return (
      <PageWrapper>
        <Chips>
          {this.renderChips()}
          {selectedCount > 1 && (
            <NavLink to="/compare">
              <Button>Compare Selected</Button>
            </NavLink>
          )}
        </Chips>
        <JobListings>
          {this.renderJobs()}
        </JobListings>
        <JobDetails />
      </PageWrapper>
    )
  }
}
