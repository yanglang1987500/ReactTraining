import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import rootStore from './store/store';
import ToDoList from './containers/ToDoList';
import Comment from './containers/Comment';

window.rootStore = rootStore;
ReactDom.render(<Provider rootStore={rootStore}>
 <HashRouter>
      <Switch>
        <Route exact path='/todo' render={ () => <ToDoList /> } />
        <Route path='/comment' render={ () => <Comment /> } />
      </Switch>
    </HashRouter> 

</Provider>, document.getElementById('root'))