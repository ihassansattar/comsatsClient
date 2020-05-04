import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/teachers/Login';
import AdminLogin from './components/admin/Login'
import Profile from './components/teachers/Profile';
import AdminProfile from './components/admin/Profile'
import ForgetPassword from './components/teachers/ForgetPassword';
import ForgetPasswordAdmin from './components/admin/ForgetPassword';
import Reset from './components/teachers/Reset';
import ResetAdmin from './components/admin/Reset';

const Routes = () => (
  <div>
    <Switch>
      
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Login} />
      <Route exact path="/manage" component={AdminLogin} />
      <Route exact path="/ForgetPassword" component={ForgetPassword} />
      <Route exact path="/ForgetPasswordAdmin" component={ForgetPasswordAdmin} />
      <Route exact path="/userProfile/:username" component={Profile} />
      <Route exact path="/reset/:token" component={Reset} />
      <Route exact path="/resetadmin/:token" component={ResetAdmin} />
      <Route exact path="/adminProfile/:username" component={AdminProfile} />
      {/* <Route exact path="/lecture-room" component ={LectureRoom}/>
      <Route exact path="/financial-year" component ={FinancialYear}/>
      <Route exact path ="/bs-program-details" component={ BsProgramDetails}/>
      <Route exact path ="/student-services" component={ StudentService }/> */}
    </Switch>
  </div>
);

export default Routes;
