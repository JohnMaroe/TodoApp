import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Clock from '../pages/Clock';
import TodoApp from '../pages/TodoApp';

import './styles.css';

export default function Routes() {
  return (
    <Route render={({ location }) => (
      <TransitionGroup className="transitionGroup">
        <CSSTransition
          key={location.key}
          timeout={3000}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/"><Clock /></Route>
            <Route path="/app"><TodoApp /></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
};