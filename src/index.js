// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Import your web app's Firebase configuration
import { firebaseConfig } from '../config/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Register new users
const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = registerForm.registerEmail.value;
  const pass = registerForm.registerPassword.value;
  const pass2 = registerForm.registerRepeatPassword.value;

  if (pass != pass2) {
    registerForm.registerRepeatPassword.classList.add('is-invalid');
  } else {
    registerForm.registerRepeatPassword.classList.add('is-valid');

    createUserWithEmailAndPassword(auth, email, pass)
      .then((cred) => {
        registerForm.registerPassword.classList.add('is-valid');
        registerForm.reset();
      })
      .catch((err) => {
        console.log(err.message);
        registerForm.registerPassword.classList.add('is-invalid');
      });
  }
});

// Login
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.loginName.value;
  const pass = loginForm.loginPassword.value;

  signInWithEmailAndPassword(auth, email, pass)
    .then((cred) => {
      loginForm.loginPassword.classList.add('is-valid');
      loginForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
      loginForm.loginPassword.classList.add('is-invalid');
    });
});

// Logout
const logoutButton = document.querySelector('#logoutBtn');
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {})
    .catch((err) => {
      console.log(err.message);
    });
});

// Auth changes
onAuthStateChanged(auth, (user) => {
  console.log('user state changed: ', user);
});
