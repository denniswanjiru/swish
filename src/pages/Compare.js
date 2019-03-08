import React, { Component } from 'react';
import Chip from '../organisms/Chip';
import Tabs from '../organisms/Tabs';
import Chips from '../ecosystems/Chips';
import CompareTabs from '../ecosystems/CompareTabs';
import CompareJobs from '../ecosystems/CompareJobs';
import PageWrapper from './PageWrapper';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Compare extends Component {
  renderChips = () => {
    const { selected } = this.props.store;
    return selected.map(({ id, title, company }) => (
      <Chip
        key={id}
        title={title}
        id={id}
        company={company.name}
        handleClick={this.handleSelected}
      />
    ))
  }

  handleSelected = id => {
    this.props.store.removeSelected(id);
  }

  render() {
    const { selected } = this.props.store
    return (
      <PageWrapper>
        <Chips>
          {this.renderChips()}
        </Chips>
        <CompareTabs>
          <Tabs />
        </CompareTabs>
        <CompareJobs jobs={selected} />
      </PageWrapper>
    )
  }
}


