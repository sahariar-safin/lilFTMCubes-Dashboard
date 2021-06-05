import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { createContext, useState } from 'react';
import AllBlog from './componant/AllBlog/AllBlog';
import AddBlog from './componant/AddBlog/AddBlog';
import Login from './componant/Login/Login';
import PrivateRoute from './componant/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const history = useHistory();
  const [user, setUser] = useState([]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/allblog">
            <AllBlog></AllBlog>
          </PrivateRoute>
          <PrivateRoute path="/addblog">
            <AddBlog />
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
