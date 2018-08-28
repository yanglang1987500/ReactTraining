import { observable, computed, action, decorate, autorun, reaction, when, configure, toJS, set, runInAction } from 'mobx';

class DashboardState {

  transparent: any
  id = 0;
  constructor(transparent) {
    this.transparent = transparent;
  }

  @observable
  todoList: Array<any> = [];

  @action
  addItem (name) {
    this.todoList.push({ id: this.id++, title: name, checked: false } );
  }

  @action
  removeItem(id){
    this.todoList = this.todoList.filter(i => i.id !== id);
  }
  
  @action
  changeItem(item, flag) {
    item.checked = flag;
  }
}

export default DashboardState;
