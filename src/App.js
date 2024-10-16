import './App.css';
import Header from './components/header';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId='92522573922-ivhbbqquto38lrji7eqtum1jjstdee2k.apps.googleusercontent.com'>
        <HomePage />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
