import { initializeApp } from 'firebase/app';
// Import your web app's Firebase configuration
import { firebaseConfig } from '../../config/firebaseConfig';
import { doc, getFirestore, onSnapshot, updateDoc } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get db
const db = getFirestore(app);

// Url
let pathArray = window.location.pathname.slice().split('/');
pathArray.pop();
let parentUrl =
  window.location.protocol +
  '//' +
  window.location.hostname +
  pathArray.join('/') +
  '/banner.html?id=';

// Styles
const styles = ['Text-Animation'];

// Get banner
const urlParams = new URLSearchParams(window.location.search);
const bannerRef = doc(db, 'banners', urlParams.get('id'));
onSnapshot(bannerRef, (snapshot) => {
  if (snapshot.exists()) {
    let banner = { ...snapshot.data(), id: snapshot.id };
    // Editor
    document.getElementById('bannerUrl').value = parentUrl + banner.id;
    document.getElementById('bannerName').value = banner.name;
    let styleSelector = document.getElementById('bannerStyle');
    styleSelector.innerHTML = '';
    for (let i in styles) {
      let option = document.createElement('option');
      option.value = styles[i];
      option.innerHTML = styles[i];
      if (styles[i] === banner.style) {
        option.selected = true;
      }
      styleSelector.append(option);
    }
    document.getElementById('bannerDuration').value = banner.duration;
    document.getElementById('bannerColor1').value = banner.color1;
    document.getElementById('bannerColor2').value = banner.color2;
    document.getElementById('bannerText').value = banner.text.join('\n');

    // Preview
    let preview = document.getElementById('previewFrame');
    preview.src = 'banner.html?id=' + banner.id;
  } else {
    document.location = 'error404.html';
  }
});

// Update banner
const editBannerForm = document.querySelector('#editBannerForm');
editBannerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let bannerName = editBannerForm.bannerName.value;
  let bannerStyle = editBannerForm.bannerStyle.value;
  let bannerDur = editBannerForm.bannerDuration.value;
  let bannerColor1 = editBannerForm.bannerColor1.value;
  let bannerColor2 = editBannerForm.bannerColor2.value;
  let textArray = editBannerForm.bannerText.value.split('\n');

  updateDoc(bannerRef, {
    name: bannerName,
    style: bannerStyle,
    duration: bannerDur,
    color1: bannerColor1,
    color2: bannerColor2,
    text: textArray,
  }).then(() => {
    console.log('updated');
  });
});

// Copy to clipboard
const copyToClipboardBtn = document.getElementById('copyToClipboardBtn');
copyToClipboardBtn.addEventListener('click', (e) => {
  var url = document.getElementById('bannerUrl').value;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      console.log('Copied ' + url);
    })
    .catch((err) => {
      console.log('Error ' + err);
    });
});
