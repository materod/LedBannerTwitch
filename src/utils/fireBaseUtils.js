import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
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
    if (callback) {
      callback(currentUser);
    }
  });
};

const registerWithEmail = (email, pass, okCallback, errCallback) => {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((cred) => {
      if (okCallback) {
        okCallback();
      }
    })
    .catch((err) => {
      if (errCallback) {
        errCallback(err);
      }
    });
};

const loginWithEmail = (email, pass, okCallback, errCallback) => {
  signInWithEmailAndPassword(auth, email, pass)
    .then((cred) => {
      if (okCallback) {
        okCallback();
      }
    })
    .catch((err) => {
      if (errCallback) {
        errCallback(err);
      }
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

// Subscribe user banner changes
const subscribeUserBanners = (userId, callback) => {
  const bannersRef = collection(db, 'banners');
  // Query banners of the current user
  const q = query(
    bannersRef,
    where('user', '==', userId),
    orderBy('created', 'asc')
  );

  // Subscribe to banners
  onSnapshot(q, (snapshot) => {
    let userBanners = [];
    snapshot.docs.forEach((doc) => {
      userBanners.push({ ...doc.data(), id: doc.id });
    });
    if (callback) {
      callback(userBanners);
    }
  });
};

// Add new banner
const addUserBanner = (banner, okCallback, errCallback) => {
  const bannersRef = collection(db, 'banners');
  addDoc(bannersRef, banner)
    .then(() => {
      if (okCallback) {
        okCallback();
      }
    })
    .catch((err) => {
      if (errCallback) {
        errCallback(err);
      }
    });
};

// Remove banner
const removeUserBanner = (id, okCallback, errCallback) => {
  const bannerRef = doc(db, 'banners', id);
  console.log(bannerRef);
  deleteDoc(bannerRef)
    .then(() => {
      if (okCallback) {
        okCallback();
      }
    })
    .catch((err) => {
      if (errCallback) {
        errCallback(err);
      }
    });
};

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
    if (callback) {
      callback();
    }
  });
};

export {
  registerWithEmail,
  loginWithEmail,
  logout,
  subscribeAuth,
  subscribeUserBanners,
  addUserBanner,
  removeUserBanner,
  subscribeBanner,
  updateBanner,
};
