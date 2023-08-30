const toggleButton = document.querySelector('.burger-button')
const toggleNavList = document.querySelector('.header__menu')

const toggleActiveButton = function () {
  toggleButton.classList.toggle('active')
  toggleNavList.classList.toggle('active')
  document.body.classList.toggle('popup-menu_open')
}

toggleButton.addEventListener('click', toggleActiveButton)

document.addEventListener('click', (evt) => {
  if (evt.target !== toggleNavList && evt.target !== toggleButton) {
    toggleButton.classList.remove('active')
    toggleNavList.classList.remove('active')
    document.body.classList.remove('popup-menu_open')
  }
})
const petPopup = document.querySelector('.popup');

const documentBody = document.body;

const petCards = document.querySelectorAll('.our-friends__card');

const showPetModal = function () {
  petPopup.classList.add('active')
  documentBody.classList.add('popup-menu_open')
  
}
let popupCloseButton;

petCards.forEach((el, index) => {
  el.addEventListener('click', () => {
    petPopup.classList.add('active')
    documentBody.classList.add('popup-menu_open')
    
    
    petPopup.innerHTML = `
    <img class="pet-popup__img" src="${randomGeneratedCards[index].img}" alt="${index.name}">
              
            <div class="window__content">
              <h3 class="window__name">${randomGeneratedCards[index].name}</h3>
              <h4 class="window__type">${randomGeneratedCards[index].breed}</h4>
              <p class="windows__description">${randomGeneratedCards[index].description}</p>
      
              <ul class="window__list">
              <li class="window__list-item list-item">
                  <b class="list-item__title">Age:</b>
                  <span class="list-item__description">${randomGeneratedCards[index].age}</span>
                </li>
                <li class="window__list-item list-item">
                  <b class="list-item__title">Inoculations:</b>
                  <span class="list-item__description">${randomGeneratedCards[index].inoculations}</span>
                </li>
                <li class="window__list-item list-item">
                  <b class="list-item__title">Diseases:</b>
                  <span class="list-item__description">${randomGeneratedCards[index].diseases}</span>
                </li>
                <li class="window__list-item list-item">
                  <b class="list-item__title">Parasites:</b>
                  <span class="list-item__description">${randomGeneratedCards[index].parasites}</span>
                </li>
          </ul>
            </div>
      
            <button class="popup__close-button">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
                </svg>
                
            </button>
    `
    popupCloseButton = document.querySelector('.popup__close-button');
    popupCloseButton.addEventListener('click', (e) => {
      petPopup.classList.remove('active')
      documentBody.classList.remove('popup-menu_open')
  })

  })
  
})