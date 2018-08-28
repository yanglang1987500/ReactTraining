import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import rootStore from './store/store';
import ToDoList from './containers/ToDoList';


ReactDom.render(<Provider rootStore={rootStore}><ToDoList /></Provider>, document.getElementById('root'))