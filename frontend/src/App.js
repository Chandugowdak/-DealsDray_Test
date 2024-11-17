import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Thapa/Login';
import Registration from './Thapa/Registration';
import Home from './Thapa/Home';
import EmployeeList from './Thapa/EmployeeList';

import EmployeeData from './Thapa/EmployeeData';


const App = () => {
  return (
    <div>
      <Router>
      
        <Switch>
          
          <Route path="/log" exact component={Login} />
          <Route path="/reg" component={Registration} />
          <Route path="/hom" component={Home} />
          <Route path="/employee-list" component={EmployeeList} />
        
          <Route path="/employee-data" component={EmployeeData} />
          <Route path="/log" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
