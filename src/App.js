import React, {useEffect} from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import SET_USER from './reducer';
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
     auth.onAuthStateChanged(authUser => {
       console.log('The user is >>> ',authUser);

       if(authUser){
         //user just logged in || user was logged in
         dispatch({
           type: SET_USER,
           user: authUser
         })
       }
       else{
         //user is logged out
         dispatch({
           type: SET_USER,
           user: null
         })
       }
     })
  },[])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/checkout">
             <Header />
             <Checkout />
          </Route>
          <Route path="/">
             <Header />
             <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;