import {
  subscribeAuth,
  registerWithEmail,
  loginWithEmail,
} from '../utils/fireBaseUtils';
import { showErrorMessage } from '../utils/utils';

// Check logged
subscribeAuth((user) => {
  if (user) {
    document.location = 'index.html';
  }
});

// Login
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.loginName.value;
  const pass = loginForm.loginPassword.value;

  loginWithEmail(
    email,
    pass,
    () => {
      loginForm.loginPassword.classList.add('is-valid');
      loginForm.reset();
    },
    (err) => {
      showErrorMessage(err.message);
      loginForm.loginPassword.classList.add('is-invalid');
    }
  );
});

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

    registerWithEmail(
      email,
      pass,
      () => {
        registerForm.registerPassword.classList.add('is-valid');
        registerForm.reset();
      },
      (err) => {
        showErrorMessage(err.message);
        registerForm.registerPassword.classList.add('is-invalid');
      }
    );
  }
});
