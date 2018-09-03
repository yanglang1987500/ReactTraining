
import React from 'react';
import styles from './index.less';

class Editor extends React.Component {
  render(){
    const { label, placeholder, onChange = ()=>{},
      onEnter = () => {}, text } = this.props;
    return <div className={styles.editor}>
      <label>{label} : </label>
      <input value={text}
        onKeyUp={(e) => {if(e.keyCode === 13){ onEnter(); }}}
        placeholder={placeholder}
        onChange={(e) => {onChange(e.target.value)}}/>
    </div>;
  }
}

export default Editor;