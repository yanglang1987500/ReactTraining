
import { configure } from 'mobx';
import ToDoListState from './ToDoListState';
configure({ enforceActions: true });

class RootStore {
  axiosInstance: any;
  ToDoListState: any;
  constructor() {
    this.ToDoListState = new ToDoListState({ rootStore: this });
  }
}

export default new RootStore();
