const fontFammilies = [
  'Akronim',
  'Alfa Slab One',
  'Anton', 
  'Arial', 
  'Bangers',
  'Black Ops One',
  'Bungee Shade',
  'Caveat', 
  'Coda',
  'Codystar',
  'Comfortaa', 
  'Courier Prime', 
  'Creepster',
  'Dancing Script', 
  'Faster One',
  'Flavors',
  'Fredericka the Great',
  'Fredoka One', 
  'Indie Flower',
  'Londrina Shadow', 
  'Monoton',
  'Nanum Pen Script', 
  'Nosifer',
  'Notable',
  'Oswald',
  'Permanent Marker', 
  'Pirata One', 
  'Press Start 2P',
  'Rampart One',
  'Righteous', 
  'Rubik Moonrocks',
  'Rye',
  'Sacramento', 
  'Silkscreen',
  'Titan One',
  'VT323',
  'Zilla Slab Highlight'
];

const drawHearts = (banner) => {
  document.body.classList = ['bodyTextAnimation'];
  let bannerDiv = document.getElementById('placeholder');
  bannerDiv.innerHTML = '';

  let styleContainer = document.createElement('div');
  styleContainer.classList = ['hearts-container'];
  bannerDiv.appendChild(styleContainer);

  let i = 0;
  let item = document.createElement('span');
  item.innerHTML = banner.text[i];
  item.classList = ['hearts-text'];
  item.style.setProperty('--style-color1', banner.color1);
  item.style.setProperty('--style-font', '\'' + banner.font + '\'');
  item.style.setProperty('--style-size', banner.size + 'px');
  styleContainer.appendChild(item);

  // Create particles
  var heartcount = (styleContainer.offsetWidth / 50) * 5;
  for (let n = 0; n <= heartcount; n++) {
    var size = Math.random() * (12 - 6) + 6;
    var delay = Math.random() * banner.duration;
    let particle = document.createElement('span');
    particle.classList = ['particle'];
    particle.style.setProperty(
      'top',
      Math.random() * (styleContainer.offsetHeight - 10) + 10
    );
    particle.style.setProperty(
      'left',
      Math.random() * (styleContainer.offsetWidth - 0)
    );
    particle.style.setProperty('width', size + 'px');
    particle.style.setProperty('height', size + 'px');
    particle.style.setProperty('--style-color2', banner.color2);
    particle.style.setProperty('--style-duration', banner.duration + 's');
    particle.style.setProperty('-webkit-animation-delay', delay + 's');
    particle.style.setProperty('-moz-animation-delay', delay + 's');
    particle.style.setProperty('-ms-animation-delay', delay + 's');
    particle.style.setProperty('animation-delay', delay + 's');
    styleContainer.appendChild(particle);

    // Change text
    if (n == 0) {
      particle.addEventListener(
        'animationiteration',
        () => {
          i++;
          if (i >= banner.text.length) {
            i = 0;
          }
          item.innerHTML = banner.text[i];
        },
        false
      );
    }
  }
};

const drawTextAnimation = (banner) => {
  document.body.classList = ['bodyTextAnimation'];
  let bannerDiv = document.getElementById('placeholder');
  bannerDiv.innerHTML = '';

  let styleContainer = document.createElement('div');
  styleContainer.classList = ['textAnimation-container'];
  bannerDiv.appendChild(styleContainer);

  let styleContent = document.createElement('div');
  styleContent.classList = ['textAnimation-content'];
  styleContainer.appendChild(styleContent);

  let i = 0;
  let item = document.createElement('h2');
  item.innerHTML = banner.text[i];
  item.classList = ['textAnimation-text'];
  item.style.setProperty('--style-color1', banner.color1);
  item.style.setProperty('--style-color2', banner.color2);
  item.style.setProperty('--style-duration', banner.duration + 's');
  item.style.setProperty('--style-font', '\'' + banner.font + '\'');
  item.style.setProperty('--style-size', banner.size + 'px');
  styleContainer.appendChild(item);

  item.addEventListener(
    'animationiteration',
    () => {
      i++;
      if (i >= banner.text.length) {
        i = 0;
      }
      item.innerHTML = banner.text[i];
    },
    false
  );
};

const stylesMap = {
  Hearts: drawHearts,
  'Text-Animation': drawTextAnimation,
};

const applyStyle = (banner) => {
  stylesMap[banner.style](banner);
};

const getStyleNames = () => {
  return Object.keys(stylesMap);
};

export { applyStyle, getStyleNames, fontFammilies };
