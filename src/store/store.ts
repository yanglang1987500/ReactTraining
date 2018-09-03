
import { configure } from 'mobx';
import Api from '../util/api';
import CommentState from './CommentState';
configure({ enforceActions: true });

class RootStore {
  axiosInstance: any;
  CommentState: any;
  constructor() {
    this.axiosInstance = Api.axios;
    this.CommentState = new CommentState({ rootStore: this });
  }
}

export default new RootStore();
