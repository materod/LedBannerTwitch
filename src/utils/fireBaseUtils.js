import { initializeApp } from 'firebase/app';
import { doc, getFirestore, onSnapshot, updateDoc } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Import your web app's Firebase configuration
import { firebaseConfig } from '../../config/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

// Auth changes
let currentUser = null;
const subscribeAuth = (callback) => {
  onAuthStateChanged(auth, (user) => {
    currentUser = user;
    callback(currentUser);
  });
};

const registerWithEmail = (email, pass, okCallback, errCallback) => {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((cred) => {
      okCallback();
    })
    .catch((err) => {
      errCallback(err);
    });
};

const loginWithEmail = (email, pass, okCallback, errCallback) => {
  signInWithEmailAndPassword(auth, email, pass)
    .then((cred) => {
      okCallback();
    })
    .catch((err) => {
      errCallback(err);
    });
};

// Logout
const logout = () => {
  signOut(auth)
    .then(() => {})
    .catch((err) => {
      showErrorMessage(err.message);
    });
};

// Get db
const db = getFirestore(app);

// Subscribe banner changes
const subscribeBanner = (id, callback) => {
  const bannerRef = doc(db, 'banners', id);
  onSnapshot(bannerRef, (snapshot) => {
    let banner = null;
    if (snapshot.exists()) {
      banner = { ...snapshot.data(), id: snapshot.id };
    }
    if (callback) {
      callback(banner);
    }
  });
};

// Update document
const updateBanner = (id, data, callback) => {
  const bannerRef = doc(db, 'banners', id);
  updateDoc(bannerRef, data).then(() => {
    callback();
  });
};

export {
  registerWithEmail,
  loginWithEmail,
  logout,
  subscribeAuth,
  subscribeBanner,
  updateBanner,
};
