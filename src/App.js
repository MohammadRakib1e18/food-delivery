// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login/Login';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import AddService from './Components/AddService/AddService';
import AuthProvider from './Components/Contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/addService'>
              <AddService></AddService>
            </Route>
            <Route path='/manageOrder'>
              <ManageOrders></ManageOrders>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
