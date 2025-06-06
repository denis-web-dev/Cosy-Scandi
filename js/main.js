const infoBtn = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

const ratingHTML = `
                    <fieldset class="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5"
                  title="Awesome - 5 stars"></label>
                <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half"
                  for="star4half" title="Pretty good - 4.5 stars"></label>
                <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4"
                  title="Pretty good - 4 stars"></label>
                <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half"
                  for="star3half" title="Meh - 3.5 stars"></label>
                <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3"
                  title="Meh - 3 stars"></label>
                <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half"
                  for="star2half" title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2"
                  title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half"
                  for="star1half" title="Meh - 1.5 stars"></label>
                <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1"
                  title="Sucks big time - 1 star"></label>
                <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf"
                  title="Sucks big time - 0.5 stars"></label>
              </fieldset>
`;
// Выбираем все карточки с классом .card__rating
const ratingsContainers = document.querySelectorAll('.card__rating');
ratingsContainers.forEach(container => {
  container.innerHTML += ratingHTML;
});

for (let btn of infoBtn) {
  btn.addEventListener('click', showHint);
}

function showHint(e) {
  e.stopPropagation();

  for (let hint of infoHints) {
    hint.classList.add('none');
  }

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

  slidesPerView: 1,
  spaceBetween: 42,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },

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
      btn.classList.remove('tab-controls__btn--active');
    }

    this.classList.add('tab-controls__btn--active');

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

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add('mobile-nav-wrapper--open');
}
mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove('mobile-nav-wrapper--open');
};
