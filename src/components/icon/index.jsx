import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './index.mess';

const Icon = (props) => {
  const { icon = '', style, className, size = "normal" } = props;
  return <i className={classnames(styles.icon, size, icon, className)} style={style} />;
};

export default Icon;