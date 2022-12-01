import { initializeApp } from 'firebase/app';
// Import your web app's Firebase configuration
import { firebaseConfig } from '../../config/firebaseConfig';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get db
const db = getFirestore(app);

const drawTextAnimation = (textArray, color1, duration) => {
  document.body.classList = ['bodyTextAnimation'];
  let banner = document.getElementById('placeholder');
  banner.innerHTML = '';

  let styleContainer = document.createElement('div');
  styleContainer.classList = ['style1-container'];
  banner.appendChild(styleContainer);

  let styleContent = document.createElement('div');
  styleContent.classList = ['style1-content'];
  styleContainer.appendChild(styleContent);

  let i = 0;
  let item = document.createElement('h2');
  item.innerHTML = textArray[i];
  item.classList = ['style1-text'];
  item.style['color'] = color1;
  item.style['-webkit-animation'] =
    'style1FadeInOut ' + duration + 's ease-in 0s infinite backwards';
  item.style['-moz-animation-delay'] =
    'style1FadeInOut ' + duration + 's ease-in 0s infinite backwards';
  item.style['-ms-animation-delay'] =
    'style1FadeInOut ' + duration + 's ease-in 0s infinite backwards';
  item.style['animation-delay'] =
    'style1FadeInOut ' + duration + 's ease-in 0s infinite backwards';
  styleContainer.appendChild(item);

  item.addEventListener(
    'animationiteration',
    () => {
      i++;
      if (i >= textArray.length) {
        i = 0;
      }
      item.innerHTML = textArray[i];
    },
    false
  );
};

// Draw styles
const applyStyle = (banner) => {
  if (banner.style === 'Text-Animation') {
    drawTextAnimation(banner.text, banner.color1, banner.duration);
  }
};

// Get banner
const urlParams = new URLSearchParams(window.location.search);
const bannerRef = doc(db, 'banners', urlParams.get('id'));
onSnapshot(bannerRef, (snapshot) => {
  if (snapshot.exists()) {
    let banner = { ...snapshot.data(), id: snapshot.id };
    applyStyle(banner);
  } else {
    document.location = 'error404.html';
  }
});
