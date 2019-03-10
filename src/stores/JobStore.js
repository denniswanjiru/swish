import { observable, action, computed } from 'mobx';

class JobStore {
  BASE_URL = 'https://swish-app-server.herokuapp.com/jobs'
  @observable jobs = [];
  @observable selected = [];
  @observable activeTab = "desc";

  @action fetchJobs = () => {
    fetch('https://swish-app-server.herokuapp.com/jobs')
      .then(res => res.json())
      .then(data => this.jobs = data);
  }

  @action addSelected = job => {
    this.selected.push(job);
  }

  @action removeSelected = id => {
    this.selected = this.selected.filter(select => select.id !== id);
  }

  @action updateActiveTab = tab => {
    this.activeTab = tab;
  }

  @computed get allJobs() {
    return this.jobs;
  }

  @computed get getSelected() {
    return this.selected;
  }

  @computed get selectedCount() {
    return this.selected.length;
  }
}

const store = new JobStore();

export default store;