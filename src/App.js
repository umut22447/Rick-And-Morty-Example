import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen'
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
          <Route exact path="/">
            {user === null ? <LoginScreen /> : <RickAndMortyList />}
          </Route>
        </Switch>
        {user !== null ? <button onClick={getLogout}>Çıkış Yap</button> : null}
      </div>
    </Router>

  )
}

export default App;