

import React from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../components/button';
import Editor from '../components/editor';
import List from './list';
import styles from './ToDoList.less';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  state = {
    text: '',
    warning: '',
  }
  submit() {
    if (this.state.text.trim() === '') {
      this.setState({
        warning: '请输入任务内容'
      });
      return;
    }
    const { rootStore: { ToDoListState } } = this.props;
    ToDoListState.addItem(this.state.text);
    this.setState({ text: '', warning: '' });
  }
  render() {
    const { rootStore: { ToDoListState } } = this.props;
    const data = ToDoListState.todoList;
    return <div className={styles.container}>
      <h2>任务便签</h2>
      {this.state.warning && <p style={{color:'red'}}>{this.state.warning}</p>}
      <List data={data}>
        {
          data.map(i => <List.ListItem data={i} onDelete={() => { ToDoListState.removeItem(i.id); }} onCheck={(flag) => { ToDoListState.changeItem(i, flag); }} />)
        }
      </List>
      <Editor text={this.state.text} label="任务" placeholder="安排新的任务吧。。。" onEnter={this.submit} onChange={(val) => { this.setState({ text: val }) }} />
      <Button style={{ float: 'right' }} onClick={this.submit}>保存任务</Button>
    </div>
  }
}

export default inject('rootStore')(observer(ToDoList));