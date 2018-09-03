import '../style/base/_reset.scss';
import '../style/main.scss';

import React from 'react';
import Header from './header/index';

import About from './about/index';
import Landing from './landing/index';
import Photography from './landing/index';
import ProjectPage from './projects/index';

import { Provider } from 'react-redux';
import createStore from '../lib/app-create-store';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Project from './project-items';


const store = createStore();

export default class App extends React.Component {

  render() {
    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Header />
              <Route exact path="/" component={Landing}/>
              <Route exact path="/About" component={About}/>
              <Route exact path="/Projects" component={ProjectPage}/>
              <Route exact path="/Photography" component={Photography}/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}
