import { subscribeBanner } from '../utils/fireBaseUtils';
import { applyStyle } from '../utils/textStyles';

// Get banner
const urlParams = new URLSearchParams(window.location.search);
subscribeBanner(urlParams.get('id'), (banner) => {
  if (banner) {
    applyStyle(banner);
  } else {
    document.location = 'error404.html';
  }
});
