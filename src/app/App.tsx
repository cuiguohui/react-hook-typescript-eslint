/**
 * Created by 崔国辉 on 2019/7/10 10:58
 * Develop by 崔国辉 on 2019/7/10 10:58
 */

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Router from '../router/Router';


const App = () => (
  <BrowserRouter>
    <Route
      path="/"
      component={Router}
    />
  </BrowserRouter>
);

export default App;
