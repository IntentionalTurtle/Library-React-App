import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './config/routes';
import Navbar from './components/Navbar';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
  <Provider store={store}>
    <Routes>
        { routes.map((route: any, index: any) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.component />
            }
          />
        )) }
      </Routes>
  </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
