/**
 * Created by 崔国辉 on 2019/7/10 16:26
 * Develop by 崔国辉 on 2019/7/10 16:26
 */
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
