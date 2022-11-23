// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection,
  getFirestore,
  onSnapshot,
  addDoc,
  query,
  where,
} from 'firebase/firestore';

// Import your web app's Firebase configuration
import { firebaseConfig } from '../config/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);
let user = null;

// Database
const db = getFirestore(app);
const banners = collection(db, 'banners');

// Show error message
const showErrorMessage = (msg) => {
  const alertBox = document.getElementById('errorMessage');
  alertBox.classList.remove('hide');
  alertBox.innerHTML =
    '<strong>Error!: </strong>' +
    msg +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
  alertBox.classList.add('show');
};

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
        showErrorMessage(err.message);
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
      showErrorMessage(err.message);
      loginForm.loginPassword.classList.add('is-invalid');
    });
});

// Logout
const logoutButton = document.querySelector('#logoutBtn');
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {})
    .catch((err) => {
      showErrorMessage(err.message);
    });
});

// Auth changes
onAuthStateChanged(auth, (u) => {
  const loginPanel = document.querySelector('#sectionLogin');
  const container = document.querySelector('#sectionContent');
  user = u;
  if (user) {
    // loggin
    loginPanel.classList.remove('vh-100');
    loginPanel.classList.add('d-none');
    container.classList.remove('d-none');

    // Query banners of the current user
    const q = query(banners, where('user', '==', user.uid));

    // Subscribe to banners
    onSnapshot(q, (snapshot) => {
      let banners = [];
      snapshot.docs.forEach((doc) => {
        banners.push({ ...doc.data(), id: doc.id });
      });
      console.log(banners);
    });

    // Query
  } else {
    // logout
    loginPanel.classList.remove('d-none');
    loginPanel.classList.add('vh-100');
    container.classList.add('d-none');
  }
});

// Add banner
const addBannerForm = document.querySelector('#addBannerForm');
addBannerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let text = addBannerForm.newBannerText.value;
  if (!text) {
    text = 'Sample text'; // Default text
  }
  addDoc(banners, {
    user: user.uid,
    text: text,
  })
    .then(() => {
      addBannerForm.reset();
    })
    .catch((err) => {
      showErrorMessage(err.message);
    });
});
