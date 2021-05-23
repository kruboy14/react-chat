import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Auth, Home } from './pages';
import { selectUserAuth } from './redux/selectors';

const App = () => {
  const isAuth = useSelector(selectUserAuth);
  return (
    <div className="wrapper">
        {isAuth ? <Redirect to="/dialog" /> : <Redirect to="/login" />}
      <Switch>
        <Route
          exact
          path={[ '/','/login', '/signup', '/register', '/register/verify']}
          component={Auth}
        />

        <Route path={['/dialog', '/dialog/:id']} component={Home} />
      </Switch>
    </div>
  );
};

export default App;
