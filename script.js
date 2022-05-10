// TODO: Refactoring

// Setup prime elements
const mainContainer = document.querySelector('.my-slider-main-container')
let sliderContainer = document.querySelector('.my-slider-image-container')
const mySlides = document.querySelectorAll('.image-container')
const dotsContainer = document.querySelector('.my-slider-dots-container')

const sliderLength = mySlides.length
const slideWidth = mySlides[0].offsetWidth

const containerWidth = mainContainer.offsetWidth

const firstSlide = mySlides[0]
const lastSlide = mySlides[sliderLength - 1]

const cloneFirstSlide = firstSlide.cloneNode(true)
const cloneLastSlide = lastSlide.cloneNode(true)

// Generate dots
mySlides.forEach(elem => {
  let dot = document.createElement('div')
  dot.classList.add('dot')
  dot.dataset.dot = elem.firstElementChild.dataset.img
  if (elem.classList.contains('active-slide')) {
    dot.classList.add('active-dot')
  }
  dotsContainer.appendChild(dot)
})

function addActive() {
  mySlides.forEach((elem, index) => {
    `${(index + 1) * (-containerWidth)}px` === sliderContainer.style.left
      ?
      elem.classList.add('active-slide')
      :
      elem.classList.remove('active-slide')
  })

  dotsContainer.querySelectorAll('.dot').forEach(elem => {
    elem.dataset.dot === document.querySelector('.active-slide').firstElementChild.dataset.img
      ?
      elem.classList.add('active-dot')
      :
      elem.classList.remove('active-dot')
  })
}

// Set clone slides
sliderContainer.appendChild(cloneFirstSlide)
sliderContainer.insertBefore(cloneLastSlide, firstSlide)

// Setup buttons
const leftButton = document.querySelector('.my-slider-arrow-left')
const rightButton = document.querySelector('.my-slider-arrow-right')

// Setup full slider width
let properWidth = containerWidth * (sliderLength + 2)
sliderContainer.style.setProperty('width', `${properWidth}px`)
sliderContainer.style.setProperty('left', `${-containerWidth}px`)

// Set actions
leftButton.addEventListener('click', leftMove)
rightButton.addEventListener('click', rightMove)
dotsContainer.addEventListener('click', activateSlide)
sliderContainer.addEventListener('transitionend', checkSlideEnd)

// Check if slider ends
function checkSlideEnd() {
  if (sliderContainer.offsetLeft === 0) {
    sliderContainer.classList.remove('transition')
    sliderContainer.style.left = `${sliderLength * -containerWidth}px`
    addActive()
  }

  if (sliderContainer.offsetLeft === -containerWidth * (sliderLength + 1)) {
    sliderContainer.classList.remove('transition')
    sliderContainer.style.left = `${-containerWidth}px`
    addActive()
  }
}

function leftMove() {
  sliderContainer.classList.add('transition')
  if (sliderContainer.offsetLeft % containerWidth === 0) {
    sliderContainer.style.left = `${sliderContainer.offsetLeft - containerWidth}px`
    addActive()
  }
}

function rightMove() {
  sliderContainer.classList.add('transition')

  if (sliderContainer.offsetLeft % containerWidth === 0) {
    sliderContainer.style.left = `${sliderContainer.offsetLeft + containerWidth}px`
    addActive()
  }
}

function activateSlide(e) {
  if (e.target.classList.value !== 'dot') return

  sliderContainer.classList.add('transition')

  e.target.parentElement.querySelectorAll('.dot').forEach(elem => {
    elem.classList.remove('active-dot')
  })

  mySlides.forEach((elem, index) => {
    elem.firstElementChild.dataset.img === e.target.dataset.dot
      ?
      elem.classList.add('active-slide')
      :
      elem.classList.remove('active-slide')

    if (elem.classList.contains('active-slide')) {
      sliderContainer.style.left = `${(index + 1) * (-containerWidth)}px`
      e.target.classList.add('active-dot')
    }
  })
}

// Drag interface
let startXposition;
let nextXposition;
let initialSliderPosition;
let finalSliderPosition;
var position = 0

sliderContainer.addEventListener("mousedown", dragStart);

sliderContainer.addEventListener("touchstart", dragStart);
sliderContainer.addEventListener("touchmove", dragMove);
sliderContainer.addEventListener("touchend", dragEnd);

function dragStart(e) {

  e.preventDefault()
  sliderContainer.classList.remove('transition')

  initialSliderPosition = sliderContainer.offsetLeft
  console.log(initialSliderPosition)

  if (e.type === 'touchstart') {
    startXposition = e.touches[0].clientX
    console.log(startXposition)
  } else {
    startXposition = e.clientX
    console.log(startXposition)


    document.onmouseup = dragEnd
    document.onmousemove = dragMove
  }
}

function dragMove(e) {
  if (e.type === 'touchmove') {
    nextXposition = startXposition - e.touches[0].clientX
    startXposition = e.touches[0].clientX
  } else {
    nextXposition = startXposition - e.clientX
    startXposition = e.clientX
  }

  sliderContainer.style.left = `${sliderContainer.offsetLeft - nextXposition}px`

  console.log(sliderContainer.style.left)
}

function dragEnd() {
  finalSliderPosition = sliderContainer.offsetLeft
  sliderContainer.classList.add('transition')

  position = finalSliderPosition - initialSliderPosition

  if (position < containerWidth * -.5) {
    sliderContainer.style.left = `${(sliderContainer.offsetLeft - position) - containerWidth}px`
    addActive()
  } else if (position > containerWidth * .5) {
    sliderContainer.style.left = `${(sliderContainer.offsetLeft - position) + containerWidth}px`
    addActive()
  } else {
    sliderContainer.style.left = `${initialSliderPosition}px`
  }

  document.onmouseup = null
  document.onmousemove = null
}