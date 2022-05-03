// TODO: Drag, Endless

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

// Drag interface
// let startXposition;
// let nextXposition;
// let initialSliderPosition;
// let finalSliderPosition;

// sliderContainer.addEventListener("mousedown", dragStart);

// sliderContainer.addEventListener("touchstart", dragStart);
// sliderContainer.addEventListener("touchmove", dragMove);
// sliderContainer.addEventListener("touchend", dragEnd);

// function dragStart(e) {

//   e.preventDefault()
//   initialSliderPosition = sliderContainer.offsetLeft

//   if (e.type === 'touchstart') {
//     startXposition = e.touches[0].clientX
//   } else {
//     startXposition = e.clientX

//     document.onmouseup = dragEnd
//     document.onmousemove = dragMove
//   }
// }

// function dragMove(e) {
//   if (e.type === 'touchmove') {
//     nextXposition = startXposition - e.touches[0].clientX
//     startXposition = e.touches[0].clientX
//   } else {
//     nextXposition = startXposition - e.clientX
//     startXposition = e.clientX
//   }

//   sliderContainer.style.left = `${sliderContainer.offsetLeft - nextXposition}px`

//   console.log(sliderContainer.style.left)
// }

// function dragEnd() {
//   finalSliderPosition = sliderContainer.offsetLeft

//   if (finalSliderPosition - initialSliderPosition < containerWidth * -.5) {
//     leftMove()
//   } else if (finalSliderPosition - initialSliderPosition > containerWidth * .5) {
//     rightMove()
//   } else {
//     sliderContainer.style.left = `${initialSliderPosition}px`
//   }

//   document.onmouseup = null
//   document.onmousemove = null
// }


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

// console.log(sliderContainer.style.left)
// console.log(sliderContainer.offsetLeft)

// Set actions
leftButton.addEventListener('click', leftMove)
rightButton.addEventListener('click', rightMove)
dotsContainer.addEventListener('click', activateSlide)
sliderContainer.addEventListener('transitionend', checkSlideEnd)

// Check if slider ends
function checkSlideEnd() {
  if (sliderContainer.offsetLeft === 0) {
    sliderContainer.style.left = `${sliderLength * -containerWidth}px`
    addActive()
  }

  if (sliderContainer.offsetLeft === -containerWidth * (sliderLength + 1)) {
    sliderContainer.style.left = `${-containerWidth}px`
    addActive()
  }
}

function leftMove() {
  if (sliderContainer.offsetLeft % containerWidth === 0) {
    sliderContainer.style.left = `${sliderContainer.offsetLeft - containerWidth}px`
    addActive()
  }
}

function rightMove() {
  if (sliderContainer.offsetLeft % containerWidth === 0) {
    sliderContainer.style.left = `${sliderContainer.offsetLeft + containerWidth}px`
    addActive()
  }
}

function activateSlide(e) {
  if (e.target.classList.value !== 'dot') return
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

////////////////////////////////////////////////////////////////

// // Setup slider length
// let slidesTotal = mySlides.length


// // Setup one slide width
// let imageStep = 100 / slidesTotal

// let sliderLast = mySlides[mySlides.length - 1]


// sliderContainer.insertAdjacentElement('afterbegin', sliderLast)


// const activateSlide = (e) => {
//   if (e.target.classList.value !== 'dot') return

//   mySlides.forEach((elem, index) => {
//     elem.firstElementChild.dataset.img === e.target.dataset.dot
//       ?
//       elem.classList.add('active-slide')
//       :
//       elem.classList.remove('active-slide')

//     if (elem.classList.contains('active-slide')) {
//       console.log(elem.offsetWidth)
//     }
//   })
// }



// let slideCoordinates = 0

//////////////////////////////////////////////////////////////////////

// let firstSlider = mySlides[0];

//////////////////////////////////////////////////////////////////////

// const leftMove = () => {
//   let firstSlider = document.querySelectorAll('.image-container')[0]

//   sliderContainer.style.marginLeft = '-200%'
//   sliderContainer.style.transition = 'all .5s ease'

//   setTimeout(() => {
//     sliderContainer.style.transition = 'none'
//     sliderContainer.insertAdjacentElement('beforeend', firstSlider)
//     sliderContainer.style.marginLeft = '-100%'
//   }, 500);

//   // let step
//   // debugger

//   // TODO check if First or Last elem in Array

//   // mySlides.forEach((elem, index) => {
//   //   if (elem.classList.contains('active-slide')) {
//   //     // console.log(mySlides[index])
//   //     elem.classList.remove('active-slide')
//   //     return step = index
//   //   }
//   // })

//   // if (mySlides[mySlides.length - 1].classList.contains()) {
//   //   sliderContainer.style.transform = `translateX(${img - imageStep}%)`
//   //   mySlides[step].style.order = '-1'
//   //   sliderContainer.style.transition = 'none'
//   //   sliderContainer.style.transform = `translateX(${0}%)`
//   //   return
//   // }

//   // let img = imageStep * -step

//   // sliderContainer.style.transform = `translateX(${img - imageStep}%)`
//   // mySlides[++step].classList.add('active-slide')

//   // if (step === mySlides.length - 1) {
//   //   // let img = imageStep * -step

//   //   // sliderContainer.style.transform = `translateX(${img - imageStep}%)`
//   //   // setTimeout(() => {
//   //   // }, 2);
//   //   sliderContainer.style.transition = 'none'
//   //   sliderContainer.style.transform = `translateX(${imageStep}%)`
//   //   // mySlides[step + 1].classList.add('active-slide')

//   //   // mySlides[step].style.transition = '100s'
//   //   // mySlides[step].style.transform = `translateX(${50}%)`
//   //   mySlides[step].style.order = '-1'
//   //   // mySlides[step].style.transform = `translateX(${0}%)`
//   //   setTimeout(() => {
//   //     sliderContainer.style.transition = 'all .4s ease'
//   //     sliderContainer.style.transform = `translateX(${0}%)`
//   //   }, 4);
//   //   // sliderContainer.style.transition = 'all .4s ease'
//   //   // sliderContainer.style.transform = `translateX(${0}%)`
//   //   return
//   // }

// }

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

// const rightMove = () => {

//   let slider = document.querySelectorAll('.image-container')
//   let lastSection = slider[slider.length - 1]

//   sliderContainer.style.marginLeft = '0%'
//   sliderContainer.style.transition = 'all .5s ease'

//   setTimeout(() => {
//     sliderContainer.style.transition = 'none'
//     sliderContainer.insertAdjacentElement('afterbegin', lastSection)
//     sliderContainer.style.marginLeft = '-100%'
//   }, 500);

  ////////////////////////////////////////////////////////////

  // let step
  // mySlides.forEach((elem, index) => {
  //   if (elem.classList.contains('active-slide')) {
  //     elem.classList.remove('active-slide')
  //     return step = index
  //   }
  // })
  // let img = imageStep * -step
  // // if (!mySlides[step--]) return console.log('hello')
  // mySlides[--step].classList.add('active-slide')
  // sliderContainer.style.transform = `translateX(${img + imageStep}%)`
// }


// const activeCenter = () => {
//   mySlides.forEach((elem, index) => {
//     if (elem.classList.contains('active-slide')) {
//       index > mySlides.length / 2
//         ?
//         leftMove()
//         :
//         rightMove()
//     }
//   })
// }
// activeCenter()
// document.addEventListener('click', activeCenter)


// setInterval(() => {
  //   rightMove()
  // }, 5000);
