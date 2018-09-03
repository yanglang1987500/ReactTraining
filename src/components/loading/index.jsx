import React from 'react';
import styles from './index.less';
import Spin from '../spin';

class Loading extends React.Component {
  render(){
    const { children, show = false, height, spinStyle = {} } = this.props;
    return (<div style={{height: height? height+'px':'100%'}} className={styles.wrap}>
      <div className={styles.spinWrap} style={{ display: show ? 'block' : 'none' }}><Spin className={styles.spin} style={spinStyle}/></div>
      {children}
    </div>);
  }
}

export default Loading;