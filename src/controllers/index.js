import {
  logout,
  subscribeAuth,
  subscribeBanner,
  updateBanner,
} from '../utils/fireBaseUtils';
import { getParentUrl } from '../utils/utils';

// Database
/*const db = getFirestore(app);
const banners = collection(db, 'banners');
let userBanners = [];

// Show user banners
const showUserBanners = () => {
  const editBannerForm = document.getElementById('editBannerForm');
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
    const q = query(
      banners,
      where('user', '==', user.uid),
      orderBy('order', 'asc')
    );

    // Subscribe to banners
    onSnapshot(q, (snapshot) => {
      userBanners = [];
      snapshot.docs.forEach((doc) => {
        userBanners.push({ ...doc.data(), id: doc.id });
      });
      showUserBanners();
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
    order: userBanners.length + 1,
    text: text,
    created: serverTimestamp(),
  })
    .then(() => {
      addBannerForm.reset();
    })
    .catch((err) => {
      showErrorMessage(err.message);
    });
});*/
