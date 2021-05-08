import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { Auth, Home } from './pages';
import { selectUser } from './redux/selectors';

const App = () => {
  const isAuth = useSelector(selectUser);
  return (
    <div className="wrapper">
      {isAuth ? <Redirect to="/im" /> : <Redirect to="/login" />}
      <Route
        exact
        path={['/', '/login', '/signup', '/register', '/register/verify']}
        component={Auth}
        />

      <Route path="/im" component={Home} />
    </div>
  );
};

export default App;
