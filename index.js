/*-----------   BURGER MENU   ------------*/
const mobileMenuIcon = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');

mobileMenuIcon.addEventListener('click', () => {
   mobileMenuIcon.classList.toggle('open');
   menu.classList.toggle('visible');
})

menu.addEventListener('click', () => {
   menu.classList.remove('visible');
   mobileMenuIcon.classList.remove('open');
})


/*-----------   PORTFOLIO PICTURES CHANGING   ------------*/

const portfolioButtonsWrapper = document.querySelector('.portfolio__buttons-wrapper');
const portfolioBtnAll = document.querySelectorAll('.portfolio__btn');
const portfolioImages = document.querySelectorAll('.photo-block__img');


const addClass = function (event) {
  if (event.target.classList.contains('portfolio__btn')) {
      portfolioBtnAll.forEach((el) => {
         el.classList.remove('btn-active');
      });
      event.target.classList.add('btn-active');
   }
}

function changeImage(event) {
   if (event.target.classList.contains('portfolio__btn')) {
      portfolioImages.forEach((img, index) => {
        img.src = `assets/img/portfolio/${event.target.dataset.season}/${index + 1}.jpg`;
      });
   }
}

portfolioButtonsWrapper.addEventListener('click', addClass);
portfolioButtonsWrapper.addEventListener('click', changeImage);

/* КЕШИРОВАНИЕ ИЗОБРАЖЕНИЙ */

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
   seasons.forEach(preloadBlockImages);
}

function preloadBlockImages(item) {
   for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `assets/img/portfolio/${item}/${i}.jpg`;
   }
}
preloadImages();


/*-----------   PORTFOLIO PICTURES CLICKING   ------------*/

const photoBlock = document.querySelector('.photo-block');
const zoomBlock = document.querySelector('.portfolio__zoom');
const zoomImg = document.querySelector('.zoom__img');


photoBlock.addEventListener('click', function (e) {
  const path = e.target.src;
  zoomBlock.classList.add('visible');
  body.classList.add('visible');
  zoomImg.src = path;
})

zoomBlock.addEventListener('click', function (e) {
  if(![...e.target.classList].includes('zoom__img')) {
    zoomBlock.classList.remove('visible');
    body.classList.remove('visible');
  }
})

/*-----------   TRANSLATE PAGE   ------------*/

const i18Obj = {
   'en': {
     'skills': 'Skills',
     'portfolio': 'Portfolio',
     'video': 'Video',
     'price': 'Price',
     'contacts': 'Contacts',
     'hero-title': 'Alexa Rise',
     'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
     'hire': 'Hire me',
     'skill-title-1': 'Digital photography',
     'skill-text-1': 'High-quality photos in the studio and on the nature',
     'skill-title-2': 'Video shooting',
     'skill-text-2': 'Capture your moments so that they always stay with you',
     'skill-title-3': 'Rotouch',
     'skill-text-3': 'I strive to make photography surpass reality',
     'skill-title-4': 'Audio',
     'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
     'winter': 'Winter',
     'spring': 'Spring',
     'summer': 'Summer',
     'autumn': 'Autumn',
     'price-description-1-span-1': 'One location',
     'price-description-1-span-2': '120 photos in color',
     'price-description-1-span-3': '12 photos in retouch',
     'price-description-1-span-4': 'Readiness 2-3 weeks',
     'price-description-1-span-5': 'Make up, visage',
     'price-description-2-span-1': 'One or two locations',
     'price-description-2-span-2': '200 photos in color',
     'price-description-2-span-3': '20 photos in retouch',
     'price-description-2-span-4': 'Readiness 1-2 weeks',
     'price-description-2-span-5': 'Make up, visage',
     'price-description-3-span-1': 'Three locations or more',
     'price-description-3-span-2': '300 photos in color',
     'price-description-3-span-3': '50 photos in retouch',
     'price-description-3-span-4': 'Readiness 1 week',
     'price-description-3-span-5': 'Make up, visage, hairstyle',
     'order': 'Order shooting',
     'contact-me': 'Contact me',
     'send-message': 'Send message',
     'name': 'Your name is',
     'email': 'My e-mail to contact is',
     'message': 'I want to say',
     'phone-number': 'My phone number is',
     '[placeholder]textarea-placeholder': 'You can write a message here',
     '[placeholder]name-placeholder': 'what is your name?',
     '[placeholder]phone-number-placeholder': 'Type your phone number',
     '[placeholder]email-placeholder': 'Type your e-mail, please',
     'send-request': 'Send',
     '[placeholder]contacts-email-placeholder': 'Your e-mail',
     '[placeholder]contacts-phone-number-placeholder': 'Your phone number',
     '[placeholder]contacts-message-placeholder': 'Write your message',
     'answer': 'Thank you for your request! We will call you soon.'
   },
   'ru': {
     'skills': 'Навыки',
     'portfolio': 'Портфолио',
     'video': 'Видео',
     'price': 'Цены',
     'contacts': 'Контакты',
     'hero-title': 'Алекса Райс',
     'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
     'hire': 'Пригласить',
     'skill-title-1': 'Фотография',
     'skill-text-1': 'Высококачественные фото в студии и на природе',
     'skill-title-2': 'Видеосъемка',
     'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
     'skill-title-3': 'Ретушь',
     'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
     'skill-title-4': 'Звук',
     'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
     'winter': 'Зима',
     'spring': 'Весна',
     'summer': 'Лето',
     'autumn': 'Осень',
     'price-description-1-span-1': 'Одна локация',
     'price-description-1-span-2': '120 цветных фото',
     'price-description-1-span-3': '12 отретушированных фото',
     'price-description-1-span-4': 'Готовность через 2-3 недели',
     'price-description-1-span-5': 'Макияж, визаж',
     'price-description-2-span-1': 'Одна-две локации',
     'price-description-2-span-2': '200 цветных фото',
     'price-description-2-span-3': '20 отретушированных фото',
     'price-description-2-span-4': 'Готовность через 1-2 недели',
     'price-description-2-span-5': 'Макияж, визаж',
     'price-description-3-span-1': 'Три локации и больше',
     'price-description-3-span-2': '300 цветных фото',
     'price-description-3-span-3': '50 отретушированных фото',
     'price-description-3-span-4': 'Готовность через 1 неделю',
     'price-description-3-span-5': 'Макияж, визаж, прическа',
     'order': 'Заказать съемку',
     'contact-me': 'Свяжитесь со мной',
     'send-message': 'Отправить',
     'name': 'Как Вас зовут?',
     'email': 'Ваш e-mail',
     'message': 'Здесь Вы можете оставить Ваше сообшение',
     'phone-number': 'Ваш номер телефона',
     '[placeholder]textarea-placeholder': 'Здесь можно оставить сообщение',
     '[placeholder]name-placeholder': 'Введите Ваше имя',
     '[placeholder]phone-number-placeholder': 'Введите номер телефона',
     '[placeholder]email-placeholder': 'Введите Ваш email',
     'send-request': 'Отправить заявку',
     '[placeholder]contacts-email-placeholder': 'Ваш e-mail',
     '[placeholder]contacts-phone-number-placeholder': 'Ваш номер телефона',
     '[placeholder]contacts-message-placeholder': 'Здесь можно написать Ваше сообщение',
     'answer': 'Благодарим за заявку! Мы скоро свяжемся с Вами.'
   }
 }

const wordsToTranslate = document.querySelectorAll('[data-i18]');
const langSwitcherBox = document.querySelector('.lang-switcher');
const selectedLang = localStorage.getItem('lang') || 'en';

function changeLang(lang, lines){
  localStorage.setItem('lang', `${lang}`);
  const buttons = document.querySelectorAll('[data-lang]');
  buttons.forEach(button => {
    if(button.dataset.lang === lang) {
      button.classList.add('lang-switcher__active');
    } else {
      button.classList.remove('lang-switcher__active');
    }
  });

  lines.forEach(elem => {
    if(elem.localName === 'input' || elem.localName === 'textarea') {
      elem.placeholder = i18Obj[`${lang}`][elem.dataset.i18];
    } else {
      elem.textContent = i18Obj[`${lang}`][elem.dataset.i18];
    }
  });
}

function translatePageManually(event) {
  if([...event.target.classList].includes('lang-switcher__btn')) {
    const selectedLang = event.target.dataset.lang;
    changeLang(selectedLang, wordsToTranslate);
  }
}

changeLang(selectedLang, wordsToTranslate);
langSwitcherBox.addEventListener('click', translatePageManually);



/*-----------   CHANGE THEME   ------------*/


const themeBtn = document.querySelector('.theme-switcher');
const sectionNames = ['body', 'skills', 'portfolio', 'video', 'price', 'contacts'];
const sections = [];
let isThemeLight = false;

function findSections() {
  sectionNames.forEach(name => sections.push(document.querySelector(`.${name}`)));
  return sections;
}

function changeBodyStyle () {
  sectionNames.forEach(name => {
        document.querySelector(`.${name}`).classList.toggle('light-theme');
      }
  )
}

function changeSVGLing(selector, url){
  const icon = document.querySelector(`.${selector}`);
  icon.setAttribute('href', url);
  return icon;
}

function themeSwitch () {
  isThemeLight = !isThemeLight;
  changeBodyStyle();
  if(isThemeLight) {
    changeSVGLing('theme-switcher__svg', "assets/svg/sprite.svg#moon-light");
  } else {
    changeSVGLing('theme-switcher__svg', "assets/svg/sprite.svg#sun-light");
  }
}

themeBtn.addEventListener('click', themeSwitch);


/*---------------MODAL WINDOW------------------*/

const layout = document.querySelector('#modal-layout');

function closeModalWindow(e) {
  if ([...e.target.classList].includes('modal__layout') ||
      [...e.target.classList].includes('modal__close-btn')) {
    layout.classList.remove('visible');
  } else if ([...e.target.classList].includes('modal__submit')) {
    layout.classList.remove('visible');
    showPopUp(e);
  }
}

layout.addEventListener('click', closeModalWindow);

function openModalWindow(e) {
  if([...e.target.classList].includes('action')) {
    layout.classList.add('visible');
  }
}

body.addEventListener('click', openModalWindow);



/*-------------------  POP-UP WINDOW   ---------------*/
const popUpLayout = document.querySelector('.answer__layout');

function showPopUp(event) {
  event.preventDefault();
  popUpLayout.classList.add('visible');
  setTimeout(()=> {
    popUpLayout.classList.remove('visible');
  }, 2500)
}


document.querySelector('.contacts__btn').addEventListener('click', showPopUp);
/*-------------------  ARROW TOP   ---------------*/

const arrowTopBtn = document.querySelector('#arrowTop');
function showArrowTop() {
  const isHidden= pageYOffset < document.documentElement.clientHeight;

  if(isHidden){
    if(Array.from(arrowTopBtn.classList).includes('visible')){
      arrowTopBtn.classList.remove('visible');
    }
    if(!Array.from(arrowTopBtn.classList).includes('hidden')){
      arrowTopBtn.classList.add('hidden');
    }
  } else {
    if(Array.from(arrowTopBtn.classList).includes('hidden')){
      arrowTopBtn.classList.remove('hidden');
    }
    if(!Array.from(arrowTopBtn.classList).includes('visible')){
      arrowTopBtn.classList.add('visible');
    }
  }
}

document.addEventListener('scroll', showArrowTop);
showArrowTop();

arrowTopBtn.addEventListener('click', function(){
  window.scrollTo({
    top: 100,
    left: 0,
    behavior: 'smooth'
  });
})
