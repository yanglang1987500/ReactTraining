import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

const Button = (props) => {
  const { children, className, style = {}, onClick } = props;
  return <button className={classnames(styles.button, className)} onClick={onClick} style={style}>
    {children}
  </button>;
};

export default Button;