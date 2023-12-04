import { Provider } from 'react-redux';
import './styles/App.scss';
import { store } from './redux/store';
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom"
import React, { Suspense } from 'react';
import AppRoute from './routing/AppRoute';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './layout/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './reuseable/Loader/Loader';

function App() {

  const homeRoutes = React.lazy(()=>import("./pages/home/homeRoutes"))
  const exchangesRoutes = React.lazy(()=>import("./pages/exchanges/exchangesRoutes"))

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader/>}>
            <Switch>
              <Redirect exact from="/" to="/home"/>
              <AppRoute protect={false} path="/home" component={homeRoutes}></AppRoute>
              <AppRoute protect={false} path="/exchanges" component={exchangesRoutes}></AppRoute>
            </Switch>
        </Suspense>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
