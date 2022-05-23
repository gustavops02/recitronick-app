const btnHamburguerOne = document.getElementById('btnMenu1')
const navbarContentOne = document.getElementById('navbar1')


btnHamburguerOne.addEventListener('click', () => {
	navbarContentOne.classList.toggle('visible-navbar')

})

const btnHamburguerTwo = document.getElementById('btnMenu2')
const navbarContentTwo = document.getElementById('navbar2')


btnHamburguerTwo.addEventListener('click', () => {
	navbarContentTwo.classList.toggle('visible-navbar')

})