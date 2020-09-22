import { Switch } from 'react-router-dom';
import React, { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import routes from '../routes';

const ContactView = lazy(() =>
  import('../Views/ContactView' /* webpackChunkName: "contact-view" */),
);
const LoginView = lazy(() =>
  import('../Views/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('../Views/RegisterView' /* webpackChunkName: "register-view" */),
);

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route path={routes.contacts} component={ContactView} />
            <Route path={routes.login} component={LoginView} />
            <Route path={routes.register} component={RegisterView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
