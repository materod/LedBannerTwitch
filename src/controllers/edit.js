import {
  logout,
  subscribeAuth,
  subscribeBanner,
  updateBanner,
} from '../utils/fireBaseUtils';
import { getParentUrl } from '../utils/utils';
import { getStyleNames } from '../utils/textStyles';

const urlParams = new URLSearchParams(window.location.search);

// Check logged
subscribeAuth((user) => {
  if (user) {
    let bannerUrl = getParentUrl() + 'banner.html?id=' + urlParams.get('id');
    subscribeBanner(urlParams.get('id'), (banner) => {
      if (banner) {
        // Editor
        document.getElementById('bannerUrl').value = bannerUrl + banner.id;
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
  } else {
    document.location = 'login.html';
  }
});

const logoutButton = document.querySelector('#logoutBtn');
logoutButton.addEventListener('click', () => {
  logout();
});

// Styles
const styles = ['Hearts', 'Text-Animation'];

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

  updateBanner(
    urlParams.get('id'),
    {
      name: bannerName,
      style: bannerStyle,
      duration: bannerDur,
      color1: bannerColor1,
      color2: bannerColor2,
      text: textArray,
    },
    () => {
      console.log('updated');
    }
  );
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
