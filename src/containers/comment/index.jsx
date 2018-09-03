
import React from 'react';
import { inject, observer } from 'mobx-react';
import ListItem from './listItem';
import styles from './index.less';

class List extends React.Component {
  render(){
    const { children, data = [] } = this.props;
    return <ul className={styles.list}>
      {children}
    </ul>
  }
}
List.ListItem = ListItem;

export default inject('rootStore')(observer(List));