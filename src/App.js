import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
/*these are jsx pages*/
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import SignUp from './SignUp';
import SignupDriver from './SignupDriver';
import TermsServices from './TermsServices';
import PrivacyPolicy from './PrivacyPolicy';
/*required for components' routing */
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
/*components required to use material-ui*/
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
/*Components*/
import Appbar from './components/AppBar';
import Footer from './components/Footer';
//vehicle detail form component
import VehicleDetailForm from './components/VehicleDetailForm';
//firebase
import  firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCQNqyZgj-O5ViMIJlYrE1CWJ23SFcv_TU",
  authDomain: "journey-partner-65289.firebaseapp.com",
  databaseURL: "https://journey-partner-65289.firebaseio.com",
  projectId: "journey-partner-65289",
  storageBucket: "journey-partner-65289.appspot.com",
  messagingSenderId: "652487352209",
  appId: "1:652487352209:web:e71db6943ea363f7108430",
  measurementId: "G-JFGH73WFWV"
};
if(!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig);
}
if(firebase.apps.length)
{
  console.log('connected')
}


function App() {

  const [darkMode,setDarkMode]=useState(false);


  const theme=createMuiTheme({
    palette:{
      type: darkMode ? "dark" : "light",
      primary:{
        light:"#2ec4b6",
        main:"#065143",
        dark:"#ff9f1c",
        contrastText:"#fdfffc",
      },
      secondary:{
        light:"#e5e5e5",
        main:"#fca311",
        dark:"#14213d",
        contrastText:"#ffffff",
      },
    },
  
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <Appbar/>
      <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>

      <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/company' component={AboutUs} />
       <Route path='/signup' component={SignUp} />
       <Route path='/signupasdriver' component={SignupDriver} />
       <Route path='/vehicledetails' component={VehicleDetailForm} />
       <Route path='/termsandservices' component={TermsServices} />
       <Route path='/privacypolicy' component={PrivacyPolicy} />
       </Switch>
       <Footer/>
    </Router>
    </MuiThemeProvider>
       
      
  );
}

export default App;
