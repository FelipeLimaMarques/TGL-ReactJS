import React, { Suspense, useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './hooks';
import * as actions from './store/actions';

import Spinner from './components/UI/Spinner';
import Layout from './hoc/Layout';

const Logout = React.lazy(() => import('./components/Logout'));
const Login = React.lazy(() => import('./containers/Auth/Pages/Login'));
const Register = React.lazy(() => import('./containers/Auth/Pages/Register'));
const Reset = React.lazy(() => import('./containers/Auth/Pages/Reset'));
const PassUpdate = React.lazy(() => import('./containers/Auth/Pages/PassUpdate'));
const LoggedIn = React.lazy(() => import('./containers/LoggedIn/Pages/Recent'));
const Newbet = React.lazy(() => import('./containers/LoggedIn/Pages/Newbet'));
const Account = React.lazy(() => import('./containers/LoggedIn/Pages/Account'));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.token !== null);

  useEffect(() => {
    dispatch( actions.checkAuthState() )
  }, [])
  

  useEffect(() => {
    isAuthenticated && dispatch(actions.fetchGames());
  }, [isAuthenticated])

  let routes = (
    <Switch>
      <Route path="/registration" component={Register} />
      <Route path="/reset" component={Reset} />
      <Route path="/update_password" component={PassUpdate} />
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );

  isAuthenticated && (routes = (
    <Switch>
      <Route path="/newbet" component={Newbet} />
      <Route path="/home" component={LoggedIn} />
      <Route path="/registration" component={Register} />
      <Route path="/reset" component={Reset} />
      <Route path="/update_password" component={PassUpdate} />
      <Route path="/login" component={Login} />
      <Route path="/account" component={Account} />
      <Route path="/logout" component={Logout} />
      <Redirect to="/home" />
    </Switch>
  ));

  return (
    <div>
      <Layout>
        <Suspense fallback={<Spinner withDiv={true}/>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

export default withRouter(App);
