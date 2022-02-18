const slidesContainer = document.querySelectorAll('.image-container')
const dotsContainer = document.querySelector('.my-slider-dots-container')
slidesContainer.forEach(elem => dotsContainer.appendChild(document.createElement('div').classList.add('dot')))

console.log(slidesContainer)