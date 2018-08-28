
import React from 'react';
import { inject, observer } from 'mobx-react';
import ListItem from './listItem';
import styles from './index.less';

class List extends React.Component {
  render(){
    const { children, data = [] } = this.props;
    return <ul className={styles.list}>
      {children}
      <li> {data.filter(i => !!i.checked).length} 已完成/ {data.length} 总数</li>
    </ul>
  }
}
List.ListItem = ListItem;

export default inject('rootStore')(observer(List));