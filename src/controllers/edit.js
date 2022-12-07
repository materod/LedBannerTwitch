import {
  logout,
  subscribeAuth,
  subscribeBanner,
  updateBanner,
} from '../utils/fireBaseUtils';
import { getParentUrl } from '../utils/utils';
import { getStyleNames, fontFammilies } from '../utils/textStyles';

const urlParams = new URLSearchParams(window.location.search);
const styleNames = getStyleNames();

// Check logged
subscribeAuth((user) => {
  if (user) {
    let bannerUrl = getParentUrl() + 'banner.html?id=' + urlParams.get('id');
    subscribeBanner(urlParams.get('id'), (banner) => {
      if (banner) {
        // Editor
        document.getElementById('bannerUrl').value = bannerUrl;
        document.getElementById('bannerName').value = banner.name;
        let styleSelector = document.getElementById('bannerStyle');
        styleSelector.innerHTML = '';
        for (let i in styleNames) {
          let option = document.createElement('option');
          option.value = styleNames[i];
          option.innerHTML = styleNames[i];
          if (styleNames[i] === banner.style) {
            option.selected = true;
          }
          styleSelector.append(option);
        }
        document.getElementById('bannerDuration').value = banner.duration;
        let fontSelector = document.getElementById('bannerFont');
        console.log(fontSelector);
        fontSelector.innerHTML = '';
        for (let i in fontFammilies) {
          let option = document.createElement('option');
          option.value = fontFammilies[i];
          option.innerHTML = fontFammilies[i];
          if (fontFammilies[i] === banner.font) {
            option.selected = true;
          }
          fontSelector.append(option);
        }
        document.getElementById('bannerSize').value = banner.size;
        document.getElementById('bannerColor1').value = banner.color1;
        document.getElementById('bannerColor2').value = banner.color2;
        document.getElementById('bannerBackColor').value = banner.backColor;
        document.getElementById('bannerBackAlpha').value = banner.backAlpha;
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

// Update banner
const editBannerForm = document.querySelector('#editBannerForm');
editBannerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let bannerName = editBannerForm.bannerName.value;
  let bannerStyle = editBannerForm.bannerStyle.value;
  let bannerDur = editBannerForm.bannerDuration.value;
  let bannerFont = editBannerForm.bannerFont.value;
  let bannerSize = editBannerForm.bannerSize.value;
  let bannerColor1 = editBannerForm.bannerColor1.value;
  let bannerColor2 = editBannerForm.bannerColor2.value;
  let bannerBackColor = editBannerForm.bannerBackColor.value;
  let bannerBackAlpha = editBannerForm.bannerBackAlpha.value;
  let textArray = editBannerForm.bannerText.value.split('\n');

  updateBanner(
    urlParams.get('id'),
    {
      name: bannerName,
      style: bannerStyle,
      duration: bannerDur,
      font: bannerFont,
      size: bannerSize,
      color1: bannerColor1,
      color2: bannerColor2,
      backColor: bannerBackColor,
      backAlpha: bannerBackAlpha,
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
