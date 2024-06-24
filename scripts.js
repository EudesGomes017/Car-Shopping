let prevButton = document.getElementById('prev')

let nextButton = document.getElementById('next')

let container = document.querySelector('.container')

let items = container.querySelectorAll('.list .item')

let indicators = document.querySelector('.indicators')

let dots = indicators.querySelectorAll('ul li')//meus pontinhos dentro de ul e li para trocar de cores

let list = container.querySelector('.list')




let active = 0

let firstPosition = 0

let lastPosition = items.length - 1

function setSlider() {

    //estamos removendo a classe do elemetno que está 
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    //estamos removendo a classe do elemetno que está 
    let dotsOld = indicators.querySelector('ul li.active')
    dotsOld.classList.remove('active')


    //estamos  adcionando o novo elemento
    dots[active].classList.add('active')

    indicators.querySelector('.number').innerHTML = '0' + (active + 1)


}

nextButton.onclick = () => {

    list.style.setProperty('--caculation', 1)

    //estamos  adcionando o novo elemento
    active = active + 1 > lastPosition ? 0 : active + 1

    setSlider()

    items[active].classList.add('active')


}

prevButton.onclick = () => {

    list.style.setProperty('--caculation', -1)
    //estamos  adcionando o novo elemento
    active = active - 1 < firstPosition ? lastPosition : active - 1

    setSlider()

    items[active].classList.add('active')


}

