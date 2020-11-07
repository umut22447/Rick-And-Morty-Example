import React from 'react'
import LoginScreen from './components/LoginScreen'
import RickAndMortyList from './components/RickAndMortyList';
import { useAuth } from './contexts/AuthContext';

function App(){
  const { user } = useAuth();

  return (
    <div>
      {user === null ? <LoginScreen /> : <RickAndMortyList />}
    </div>
  )
}

export default App;