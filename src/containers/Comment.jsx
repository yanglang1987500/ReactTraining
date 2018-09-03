

import React from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../components/button';
import Editor from '../components/editor';
import List from './comment/index';
import Loading from '../components/loading';
import styles from './Comment.less';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  state = {
    author: '',
    content: '',
    warning: '',
  }
  componentDidMount() {
    const { rootStore: { CommentState } } = this.props;
    CommentState.fetchData();
  }
  submit() {
    if (this.state.author.trim() === '') {
      this.setState({
        warning: '请输入作者'
      });
      return;
    }
    if (this.state.content.trim() === '') {
      this.setState({
        warning: '请输入评论内容'
      });
      return;
    }
    const { rootStore: { CommentState } } = this.props;
    CommentState.addItem(this.state.author, this.state.content);
    this.setState({ author: '', content: '', warning: '' });
  }
  render() {
    const { rootStore: { CommentState } } = this.props;
    const data = CommentState.commentList;
    return <div className={styles.container}>
      <Loading  show={CommentState.status.loading}>
        <h2>真正的好男人</h2>
        <section>
          真正的好男人并不是不玩游戏，不打DOTA不打WOW的。而是在他玩游戏的时候，只要你一个短信 ，一个电话 或一个QQ ， 他就会为你直接退出游戏。 
          神回复：这，就是传说中俗称的，猪一样的队友。。。
        </section>
        {this.state.warning && <p style={{color:'red'}}>{this.state.warning}</p>}
        <List data={data}>
          {
            data.map(i => <List.ListItem data={i} onDelete={() => { CommentState.removeItem(i.id); }} onCheck={(flag) => { CommentState.changeItem(i, flag); }} />)
          }
        </List>
        <Editor text={this.state.author} label="作者" placeholder="" onChange={(val) => { this.setState({ author: val }) }} />
        <Editor text={this.state.content} label="评论" placeholder="评论内容" onEnter={this.submit} onChange={(val) => { this.setState({ content: val }) }} />
        <Button style={{ float: 'right' }} loading={CommentState.status.saving} onClick={this.submit}>发表</Button>
      </Loading>
    </div>
  }
}

export default inject('rootStore')(observer(Comment));