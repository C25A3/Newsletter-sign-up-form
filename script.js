const input = document.querySelector('#email')
const submitBtn = document.querySelector('.newsletter__form-btn')
const closePopupBtn = document.querySelector('.newsletter__popup-btn')
const error = document.querySelector('.newsletter__form-error')
const popup = document.querySelector('.newsletter__popup')
const newsletter = document.querySelector('.newsletter__article')

const checkEmail = () => {
	error.classList.add('hidden')
	input.classList.remove('input-error')
	if (input.value != '') {
		showPopup()
	} else {
		error.classList.remove('hidden')
		input.classList.add('input-error')
	}
}

const showPopup = () => {
	popup.classList.remove('hidden')
	newsletter.classList.add('hidden')
}
const closePopup = () => {
	popup.classList.add('hidden')
	newsletter.classList.remove('hidden')
    input.value = ''
}

submitBtn.addEventListener('click', e => {
	e.preventDefault()
	checkEmail()
})
closePopupBtn.addEventListener('click', e => {
	e.preventDefault()
	closePopup()
})
