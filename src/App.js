import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './pages/Login';
import PrivateRoute from './componant/PrivateRoute/PrivateRoute';
import Home from './pages/Home';

export const UserContext = createContext();

function App() {
  const history = useHistory();
  const [user, setUser] = useState([]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
