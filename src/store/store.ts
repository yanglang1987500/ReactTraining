
import { configure } from 'mobx';
import Api from '../util/api';
import ToDoListState from './ToDoListState';
import CommentState from './CommentState';
configure({ enforceActions: true });

class RootStore {
  axiosInstance: any;
  ToDoListState: any;
  CommentState: any;
  constructor() {
    this.axiosInstance = Api.axios;
    this.ToDoListState = new ToDoListState({ rootStore: this });
    this.CommentState = new CommentState({ rootStore: this });
  }
}

export default new RootStore();
