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

const drawBoobles = (banner) => {
  let bannerDiv = document.getElementById('placeholder');
  bannerDiv.innerHTML = '';

  let styleContainer = document.createElement('div');
  styleContainer.classList = ['boobles-container'];
  bannerDiv.appendChild(styleContainer);

  let i = 0;
  let item = document.createElement('span');
  item.innerHTML = banner.text[i];
  item.classList = ['boobles-text'];
  item.style.setProperty('--style-color1', banner.color1);
  item.style.setProperty('--style-font', '\'' + banner.font + '\'');
  item.style.setProperty('--style-size', banner.size + 'px');
  styleContainer.appendChild(item);

  // Create particles
  let booblesCount = (styleContainer.offsetWidth / 50) * 5;
  for (let n = 0; n <= booblesCount; n++) {
    let size = Math.random() * (24 - 6) + 6;
    let delay = Math.random() * banner.duration;
    let particle = document.createElement('span');
    particle.classList = ['particle'];
    particle.style.setProperty(
      'top',
      '50%'
    );
    particle.style.setProperty(
      'left',
      Math.random() * (styleContainer.offsetWidth / 2) +(styleContainer.offsetWidth / 4) 
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

const drawColorful = (banner) => {
  let bannerDiv = document.getElementById('placeholder');
  bannerDiv.innerHTML = '';

  let styleContainer = document.createElement('div');
  styleContainer.classList = ['colorful-container'];
  bannerDiv.appendChild(styleContainer);

  let item = document.createElement('div');
  item.classList = ['colorful-text'];
  item.style.setProperty('--style-color1', banner.color1);
  item.style.setProperty('--style-color2', banner.color2);
  item.style.setProperty('--style-font', '\'' + banner.font + '\'');
  item.style.setProperty('--style-size', banner.size + 'px');
  let delay = 0;
  for (let i in banner.text) {
    let chars = banner.text[i].split("");
    for (let c in chars) {
      item.innerHTML += '<span style="-webkit-animation-delay: '+ delay +'s;-moz-animation-delay: '+ delay +'s;-ms-animation-delay: '+ delay +'s; animation-delay: '+ delay +'s">' + chars[c] + '</span>';
      delay += 0.1;
    }
    item.innerHTML += '<br/>';
  }
  styleContainer.appendChild(item);
};

const drawHearts = (banner) => {
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
  let heartcount = (styleContainer.offsetWidth / 50) * 5;
  for (let n = 0; n <= heartcount; n++) {
    let size = Math.random() * (12 - 6) + 6;
    let delay = Math.random() * banner.duration;
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

const drawRotating = (banner) => {
  let bannerDiv = document.getElementById('placeholder');
  bannerDiv.innerHTML = '';

  let styleContainer = document.createElement('div');
  styleContainer.classList = ['rotating-container'];
  bannerDiv.appendChild(styleContainer);

  let textContainer = document.createElement('p');
  textContainer.classList = ['rotating-text'];
  textContainer.style.setProperty('--style-color1', banner.color1);
  textContainer.style.setProperty('--style-font', '\'' + banner.font + '\'');
  textContainer.style.setProperty('--style-size', banner.size + 'px');
  textContainer.style.setProperty('--style-duration', banner.duration + 's');
  styleContainer.appendChild(textContainer);

  let delay=0;
  let dur = parseFloat(banner.duration);
  let lastLetter = null;
  for (let i in banner.text) {
    let wordContainer = document.createElement('span');
    wordContainer.classList = ['rotating-word'];
    textContainer.appendChild(wordContainer);

    let chars = banner.text[i].split("");
    let delayOut = dur * chars.length;
    for (let c in chars) {
      let letterContainer = document.createElement('span');
      letterContainer.classList = ['rotating-letter'];
      letterContainer.style.setProperty('--delay-in', delay + 's');
      letterContainer.style.setProperty('--delay-out', (delayOut + delay) + 's');
      if (chars[c] == " ") {
        letterContainer.style.setProperty('min-width', banner.size / 3 + 'px');
      }
      letterContainer.innerHTML = chars[c];
      wordContainer.appendChild(letterContainer);
      lastLetter = letterContainer;
      if (c < chars.length - 1) {
        delay+=dur / 2.0;
      }
    }
    delay+=delayOut;
  }

  // Replays at end of last animation
  lastLetter.addEventListener(
    'animationend',
    (ev) => {
      if (ev.animationName == "rotation-out-keyframes") {
        document.getAnimations().forEach((animation) => {
          animation.play();
        });
      }
      
    },
    false
  );
}

const drawTextAnimation = (banner) => {
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
  Boobles: drawBoobles,
  Colorful: drawColorful,
  Hearts: drawHearts,
  Rotating: drawRotating,
  'Text-Animation': drawTextAnimation,
};

const applyStyle = (banner) => {
  stylesMap[banner.style](banner);
};

const getStyleNames = () => {
  return Object.keys(stylesMap);
};

export { applyStyle, getStyleNames, fontFammilies };
