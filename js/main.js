const infoBtn = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let btn of infoBtn) {
  btn.addEventListener('click', showHint);
}

function showHint(e) {
  e.stopPropagation();
  this.parentNode.querySelector('.info-hint').classList.toggle('none');
}
document.addEventListener('click', closeHints);

function closeHints() {
  for (let hint of infoHints) {
    hint.classList.add('none');
  }
}

for (let hint of infoHints) {
  hint.addEventListener('click', (e) => e.stopPropagation());
}

const swiper = new Swiper('.swiper', {
  loop: true,
  freeMode: true,

  slidesPerView: 4,
  spaceBetween: 42,

  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },

  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  }
});


const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');


for (let btn of tabsBtns) {
  btn.addEventListener('click', function () {

    for (let btn of tabsBtns) {
      btn.classList.remove('.tab-controls__btn--active');
    }

    this.classList.add('.tab-controls__btn--active');

    for (let product of tabsProducts) {

      if (this.dataset.tab === 'all') {
        product.classList.remove('none');
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove('none');
        } else {
          product.classList.add('none');
        }
      }
    }
    swiper.update()
  })
}
