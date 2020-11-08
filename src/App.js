import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginScreen from './components/LoginScreen'
import RegisterPage from './components/RegisterPage'
import RickAndMortyList from './components/RickAndMortyList';
import CharacterDetailsPage from './components/CharacterDetailsPage'
import { useAuth } from './contexts/AuthContext';

function App() {
  const { user, logout } = useAuth();

  const getLogout = () => {
    logout();
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/character/:id" children={user === null ? <LoginScreen /> : <CharacterDetailsPage />} />
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/">
            {user === null ? <LoginScreen /> : <RickAndMortyList />}
          </Route>
        </Switch>
        <Link to="/">
          {user !== null ? <button onClick={getLogout}>Çıkış Yap</button> : null}
        </Link>
      </div>
    </Router>

  )
}

export default App;