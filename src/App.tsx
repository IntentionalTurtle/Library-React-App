import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './config/routes';
import Navbar from './components/Navbar';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './config/auth0.config';


function App() {
  return (
    <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <BrowserRouter>
        <Navbar />
        <Provider store={store}>
          <Routes>
              { routes.map((route: any, index: any) => (
                <Route
                  key={index}
                  path={route.path}
                  element={ <route.component />}
                />
              )) }
            </Routes>
        </Provider>
      </BrowserRouter>
    </Auth0Provider>    
  );
}

export default App
