import { observable, computed, action, decorate, autorun, reaction, when, configure, toJS, set, runInAction } from 'mobx';
import Api from '../util/api';

class ToDoListState {

  transparent: any
  id = 0;
  constructor(transparent) {
    this.transparent = transparent;
  }

  get axios() {
    return this.transparent.rootStore.axiosInstance;
  }

  @observable
  todoList: Array<any> = [];

  @observable
  status = {
    loading: false,
    saving: false,
  };

  @action
  fetchData() {
    this.status.loading = true;
    return new Promise((resolve, reject) => {
      this.axios.get(Api.todo.list).then(res => {
        runInAction('fetchThenSetData', () => {
          this.status.loading = false;
          this.todoList = res.data;
          resolve(res.data);
        });
      });
    })
  }

  @action
  addItem (name) {
    this.status.saving = true;
    this.axios.post(Api.todo.add, { name }).then(res => {
      runInAction('fetchThenSetData', () => {
        this.status.saving = false;
        this.fetchData();
      });
    });
  }

  @action
  removeItem(id){
    this.status.loading = true;
    this.axios.post(Api.todo.remove + id).then(res => {
      runInAction('fetchThenSetData', () => {
        this.status.loading = false;
        this.fetchData();
      });
    });
  }

  @action
  changeItem(item, flag) {
    this.status.loading = true;
    this.axios.post(Api.todo.change + item.id).then(res => {
      runInAction('fetchThenSetData', () => {
        this.status.loading = false;
        this.fetchData();
      });
    });
  }
}

export default ToDoListState;