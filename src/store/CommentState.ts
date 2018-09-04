import { observable, action, runInAction } from 'mobx';
import Api from '../util/api';

class CommentState {

  rootStore: any
  id = 0;
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  get axios() {
    return this.rootStore.axios;
  }

  @observable
  commentList: Array<any> = [];

  @observable
  status = {
    loading: false,
    saving: false,
  };

  @action
  fetchData() {
    this.status.loading = true;
    return new Promise((resolve, reject) => {
      this.axios.get(Api.comment.list).then(res => {
        runInAction('fetchThenSetData', () => {
          this.status.loading = false;
          this.commentList = res.data;
          resolve(res.data);
        });
      });
    })
  }

  @action
  addItem (author, content) {
    this.status.saving = true;
    this.axios.post(Api.comment.add, { author, content }).then(res => {
      runInAction('fetchThenSetData', () => {
        this.status.saving = false;
        this.fetchData();
      });
    });
  }

  @action
  removeItem(id){
    this.status.loading = true;
    this.axios.post(Api.comment.remove + id).then(res => {
      runInAction('fetchThenSetData', () => {
        this.status.loading = false;
        this.fetchData();
      });
    });
  }

}

export default CommentState;
