import React from 'react';
import { UsersProvider } from './context/UsersContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <UsersProvider>
      <Dashboard />
    </UsersProvider>
  );
}

export default App;
