import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import { Login, SignUp, ValidationEmail } from './pages/Authentication';
import Profile from './pages/Profile/index';
import PageNotFound from './pages/PageNotFound';
import './index.css';

import store, { history } from './modules/store';
import CONSTANTS from './modules/constants';

const { ROUTES } = CONSTANTS;

const root = document.getElementById('root');
const load = () => render(
  (
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <ErrorBoundary>
            <Route exact path={ROUTES.LOGIN} component={() => <Login history={history} />} />
            <Route exact path={ROUTES.REGISTER} component={() => <SignUp history={history} />} />
            <Route exact path={ROUTES.VALIDATE_EMAIL} component={() => <ValidationEmail />} />
            <Route exact path={ROUTES.PROFILE} component={() => <Profile />} />
            <Route component={() => <PageNotFound />} />
          </ErrorBoundary>
        </Router>
      </Provider>
    </AppContainer>
  ), root,
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
