
import React from 'react';
import { inject, observer } from 'mobx-react';
import styles from './index.less';

class ListItem extends React.Component {
  render(){
    const { data, onDelete, onCheck } = this.props;
    return <li className={data.checked ? styles.checked : styles.unchecked} key={data.id}>
      <input type="checkbox" checked={data.checked} id={data.id} onChange={(e) => {onCheck(e.target.checked)}} />
      <label for={data.id}>{data.title}</label>
      <span onClick={onDelete}>删除</span>
    </li>;
  }
}

export default inject('rootStore')(observer(ListItem));