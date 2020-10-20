import React, { useContext } from 'react';
import logo from '../../images/logos/logo.png';
import google from '../../images/logos/google.png';
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {
  document.title = 'Volunteer Network | Login'

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          image: photoURL
        };
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }
  return (
    <div className="conatiner-fluid d-flex justify-content-center align-items-center flex-column">
      <div className="logo-container">
        <img className="login-form-logo" src={logo} alt="" />
      </div>
      <button className="form-container d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-center">Login With</h2>
        <div onClick={handleGoogleSignIn} className="signin-button-container d-flex justify-content-center align-items-center">
          <img className="google-logo" src={google} alt="" />
          <p>Continue with Google</p>
        </div>
        <p>Don’t have an account? <a href="#">Create an account</a></p>
      </button>
    </div>
  );
};

export default Login;