
import React from 'react';
import { inject, observer } from 'mobx-react';
import styles from './index.less';
import '../../util/calendar';

class List extends React.Component {
  render(){
    const { children, data = [] } = this.props;
    return <ul className={styles.list}>
      {children}
    </ul>
  }
}

class ListItem extends React.Component {
  render(){
    const { data, onDelete } = this.props;
    return <li key={data.id}>
      <label>{data.author} : </label>
      <p>{data.content}</p>
      <i>{Calendar.getInstance(data.time).friendly()}</i>
      <span onClick={onDelete}>删除</span>
    </li>;
  }
}

List.ListItem = observer(ListItem);

export default observer(List);