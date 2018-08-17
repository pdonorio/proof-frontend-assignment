import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import Signupcontainer from './containers/SignupContainer';
import ProfileContainer from './containers/ProfileContainer';
import VerificationContainer from './containers/VerificationContainer';
import './App.css';

const root = document.getElementById('root');
const load = () => render(
  (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/signup" component={Signupcontainer} />
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/verification" component={VerificationContainer} />
        </Switch>
      </Router>
    </AppContainer>
  ), root,
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
