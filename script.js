// Setup prime elements
const slidesContainer = document.querySelectorAll('.image-container')
const dotsContainer = document.querySelector('.my-slider-dots-container')
const primeContainer = document.querySelector('.my-slider-main-container')
const imageContainer = document.querySelector('.my-slider-image-container')

// Setup buttons
const leftButton = document.querySelector('.my-slider-arrow-left')
const rightButton = document.querySelector('.my-slider-arrow-right')

// Generate dots
slidesContainer.forEach(elem => {
  let dot = document.createElement('div')
  dot.classList.add('dot')
  dot.dataset.dot = elem.firstElementChild.dataset.img
  dotsContainer.appendChild(dot)
})




// Setup slider length
let slidesTotal = slidesContainer.length
// Setup full slider width
let properWidth = 100 * slidesTotal
imageContainer.style.setProperty('width', `${properWidth}%`)
// Setup one slide width
let imageStep = 100 / slidesTotal

let sliderLast = slidesContainer[slidesContainer.length - 1]


imageContainer.insertAdjacentElement('afterbegin', sliderLast)


const activateSlide = (e) => {
  if (e.target.classList.value !== 'dot') return

  slidesContainer.forEach((elem, index) => {
    elem.firstElementChild.dataset.img === e.target.dataset.dot
      ?
      elem.classList.add('active-slide')
      :
      elem.classList.remove('active-slide')

    if (elem.classList.contains('active-slide')) {
      console.log(elem.offsetWidth)
    }
  })
}



let slideCoordinates = 0

// let firstSlider = slidesContainer[0];

const leftMove = () => {
  let firstSlider = document.querySelectorAll('.image-container')[0]

  imageContainer.style.marginLeft = '-200%'
  imageContainer.style.transition = 'all .5s ease'

  setTimeout(() => {
    imageContainer.style.transition = 'none'
    imageContainer.insertAdjacentElement('beforeend', firstSlider)
    imageContainer.style.marginLeft = '-100%'
  }, 500);

  // let step
  // debugger

  // TODO check if First or Last elem in Array

  // slidesContainer.forEach((elem, index) => {
  //   if (elem.classList.contains('active-slide')) {
  //     // console.log(slidesContainer[index])
  //     elem.classList.remove('active-slide')
  //     return step = index
  //   }
  // })

  // if (slidesContainer[slidesContainer.length - 1].classList.contains()) {
  //   imageContainer.style.transform = `translateX(${img - imageStep}%)`
  //   slidesContainer[step].style.order = '-1'
  //   imageContainer.style.transition = 'none'
  //   imageContainer.style.transform = `translateX(${0}%)`
  //   return
  // }

  // let img = imageStep * -step

  // imageContainer.style.transform = `translateX(${img - imageStep}%)`
  // slidesContainer[++step].classList.add('active-slide')

  // if (step === slidesContainer.length - 1) {
  //   // let img = imageStep * -step

  //   // imageContainer.style.transform = `translateX(${img - imageStep}%)`
  //   // setTimeout(() => {
  //   // }, 2);
  //   imageContainer.style.transition = 'none'
  //   imageContainer.style.transform = `translateX(${imageStep}%)`
  //   // slidesContainer[step + 1].classList.add('active-slide')

  //   // slidesContainer[step].style.transition = '100s'
  //   // slidesContainer[step].style.transform = `translateX(${50}%)`
  //   slidesContainer[step].style.order = '-1'
  //   // slidesContainer[step].style.transform = `translateX(${0}%)`
  //   setTimeout(() => {
  //     imageContainer.style.transition = 'all .4s ease'
  //     imageContainer.style.transform = `translateX(${0}%)`
  //   }, 4);
  //   // imageContainer.style.transition = 'all .4s ease'
  //   // imageContainer.style.transform = `translateX(${0}%)`
  //   return
  // }

}

const rightMove = () => {

  let slider = document.querySelectorAll('.image-container')
  let lastSection = slider[slider.length - 1]

  imageContainer.style.marginLeft = '0%'
  imageContainer.style.transition = 'all .5s ease'

  setTimeout(() => {
    imageContainer.style.transition = 'none'
    imageContainer.insertAdjacentElement('afterbegin', lastSection)
    imageContainer.style.marginLeft = '-100%'
  }, 500);

  // let step
  // slidesContainer.forEach((elem, index) => {
  //   if (elem.classList.contains('active-slide')) {
  //     elem.classList.remove('active-slide')
  //     return step = index
  //   }
  // })
  // let img = imageStep * -step
  // // if (!slidesContainer[step--]) return console.log('hello')
  // slidesContainer[--step].classList.add('active-slide')
  // imageContainer.style.transform = `translateX(${img + imageStep}%)`
}

const activeCenter = () => {
  slidesContainer.forEach((elem, index) => {
    if (elem.classList.contains('active-slide')) {
      index > slidesContainer.length / 2
        ?
        leftMove()
        :
        rightMove()
    }
  })
}
// activeCenter()
// document.addEventListener('click', activeCenter)

leftButton.addEventListener('click', leftMove)
rightButton.addEventListener('click', rightMove)
dotsContainer.addEventListener('click', activateSlide)

// setInterval(() => {
//   rightMove()
// }, 5000);