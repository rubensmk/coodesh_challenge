import { UsersProvider } from './context/user/UsersContext';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <Routes />
      </UsersProvider>
    </BrowserRouter>

  );
}

export default App;
