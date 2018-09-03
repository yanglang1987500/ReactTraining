
import React from 'react';
import { inject, observer } from 'mobx-react';
import styles from './index.less';
import '../../util/calendar';

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

export default inject('rootStore')(observer(ListItem));