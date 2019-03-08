import { observable, action, computed } from 'mobx';

class JobStore {
  @observable jobs = [];
  @observable selected = [];

  @action fetchJobs = () => {
    fetch('/src/assets/db/db.json')
      .then(res => res.json())
      .then(data => this.jobs = data.jobs);
  }

  @action addSelected = job => {
    this.selected.push(job);
  }

  @action removeSelected = id => {
    this.selected = this.selected.filter(select => select.id !== id);
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