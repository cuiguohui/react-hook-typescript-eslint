/**
 * Created by 崔国辉 on 2019/7/10 16:26
 * Develop by 崔国辉 on 2019/7/10 16:26
 */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import My from '../my/My';
import Playing from '../playing/Playing';

const Router = () => (
  <Switch>
    <Route path="/playing" component={Playing} exact />
    <Route path="/my" component={My} exact />
    <Route path="/" component={Home} exact />
  </Switch>
);

export default Router;
