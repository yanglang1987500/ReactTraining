
import { configure } from 'mobx';
import Api from '../util/api';
import CommentState from './CommentState';

configure({enforceActions: true});
class RootStore {
  axios: any;
  CommentState: any;
  constructor() {
    this.axios = Api.axios;
    this.CommentState = new CommentState(this);
  }
}

export default new RootStore();
