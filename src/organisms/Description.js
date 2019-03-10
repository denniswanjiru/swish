import React, { Component, Fragment } from 'react'

import MidTitle from '../atoms/MidTitle';
import List from '../molecules/List';
import ListItem from '../atoms/ListItem';


export default class Description extends Component {
  renderList = items => {
    return items && items.map((item, i) => <ListItem key={i}>{item}</ListItem>)
  }

  render() {
    const { Roles, Responsibilities, Qualifications } = this.props.job.description;

    return (
      <Fragment>
        <MidTitle>Role</MidTitle>
        <List>
          {this.renderList(Roles)}
        </List>

        <MidTitle>Responsibilities</MidTitle>
        <List>
          {this.renderList(Responsibilities)}
        </List>

        <MidTitle>Qualifications</MidTitle>
        <List>
          {this.renderList(Qualifications)}
        </List>
      </Fragment>
    )
  }
}

