import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../views/home'
import { About } from '../views/about';
import { Experience } from '../views/experience';
import { Skills } from '../views/skills';

export const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/about' component={ About }/>
      <Route path='/skills' component={ Skills }/>
      <Route path='/experience' component={ Experience }/>
    </Switch>
  </main>
);