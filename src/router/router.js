import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../components/home/home'
import { About } from '../components/about/about';
import { Experience } from '../components/experience/experience';
import { Skills } from '../components/skills/skills';

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