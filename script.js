const slidesContainer = document.querySelectorAll('.image-container')
const dotsContainer = document.querySelector('.my-slider-dots-container')
const primeContainer = document.querySelector('.my-slider-main-container')
const imageContainer = document.querySelector('.my-slider-image-container')
const leftButton = document.querySelector('.my-slider-arrow-left')
const rightButton = document.querySelector('.my-slider-arrow-right')

// console.log(slidesContainer)

let slidesTotal = getComputedStyle(primeContainer).getPropertyValue('--slides')

slidesTotal *= slidesContainer.length

let properWidth = 100 * slidesTotal

imageContainer.style.setProperty('width', `${properWidth}%`)

let imageStep = 100 / slidesTotal

slidesContainer.forEach(elem => {
  let dot = document.createElement('div')
  dot.classList.add('dot')
  dot.dataset.dot = elem.firstElementChild.dataset.img
  dotsContainer.appendChild(dot)
})


const activateSlide = (e) => {
  if (e.target.classList.value !== 'dot') return

  slidesContainer.forEach(elem => {
    elem.firstElementChild.dataset.img === e.target.dataset.dot
      ?
      elem.classList.add('active-slide')
      :
      elem.classList.remove('active-slide')
  })
}

let slideCoordinates = 0

const leftMove = () => {
  let step
  // debugger

  // TODO check if First or Last elem in Array

  slidesContainer.forEach((elem, index) => {
    if (elem.classList.contains('active-slide')) {
      // console.log(slidesContainer[index])
      elem.classList.remove('active-slide')
      return step = index
    }
  })

  // if (slidesContainer[slidesContainer.length - 1].classList.contains()) {
  //   imageContainer.style.transform = `translateX(${img - imageStep}%)`
  //   slidesContainer[step].style.order = '-1'
  //   imageContainer.style.transition = 'none'
  //   imageContainer.style.transform = `translateX(${0}%)`
  //   return
  // }

  let img = imageStep * -step

  imageContainer.style.transform = `translateX(${img - imageStep}%)`
  slidesContainer[++step].classList.add('active-slide')

  if (step === slidesContainer.length - 1) {
    // let img = imageStep * -step

    // imageContainer.style.transform = `translateX(${img - imageStep}%)`
    // setTimeout(() => {
    // }, 2);
    imageContainer.style.transition = 'none'
    imageContainer.style.transform = `translateX(${imageStep}%)`
    // slidesContainer[step + 1].classList.add('active-slide')

    // slidesContainer[step].style.transition = '100s'
    // slidesContainer[step].style.transform = `translateX(${50}%)`
    slidesContainer[step].style.order = '-1'
    // slidesContainer[step].style.transform = `translateX(${0}%)`
    setTimeout(() => {
      imageContainer.style.transition = 'all .4s ease'
      imageContainer.style.transform = `translateX(${0}%)`
    }, 4);
    // imageContainer.style.transition = 'all .4s ease'
    // imageContainer.style.transform = `translateX(${0}%)`
    return
  }

}

const rightMove = () => {
  let step
  slidesContainer.forEach((elem, index) => {
    if (elem.classList.contains('active-slide')) {
      elem.classList.remove('active-slide')
      return step = index
    }
  })
  let img = imageStep * -step
  // if (!slidesContainer[step--]) return console.log('hello')
  slidesContainer[--step].classList.add('active-slide')
  imageContainer.style.transform = `translateX(${img + imageStep}%)`
}

leftButton.addEventListener('click', leftMove)
rightButton.addEventListener('click', rightMove)
dotsContainer.addEventListener('click', activateSlide)