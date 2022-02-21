const slidesContainer = document.querySelectorAll('.image-container')
const dotsContainer = document.querySelector('.my-slider-dots-container')
const primeContainer = document.querySelector('.my-slider-main-container')
const imageContainer = document.querySelector('.my-slider-image-container')

let slidesTotal = getComputedStyle(primeContainer).getPropertyValue('--slides')
let slidesWidth = getComputedStyle(imageContainer).getPropertyValue('width')

slidesTotal *= slidesContainer.length

let properWidth = `${parseInt(slidesWidth) * slidesTotal}px`

imageContainer.style.setProperty('width', properWidth)

slidesContainer.forEach(elem => {
  let dot = document.createElement('div')
  dot.classList.add('dot')
  dot.dataset.dot = elem.firstElementChild.dataset.img
  dotsContainer.appendChild(dot)
})

const activateSlide = (e) => {
  if (e.target.classList.value !== 'dot') return

  slidesContainer.forEach(elem => {
    elem.classList.remove('active-slide')
    if (elem.firstElementChild.dataset.img === e.target.dataset.dot) {
      elem.classList.add('active-slide')
    }
  })
}

dotsContainer.addEventListener('click', activateSlide)

// console.log()

// slidesContainer.forEach(elem => dotsContainer.appendChild(document.createElement('div').classList.add('dot')))

// console.log(slidesContainer)