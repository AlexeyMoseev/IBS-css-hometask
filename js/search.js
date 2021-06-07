const searchButton = document.getElementsByClassName('search-button')[0]

searchButton.onclick = (e) => {
	e.preventDefault()
	const item = document.getElementsByClassName('item')
	for (let i = 0; i < item.length; i++) {
		item[i].setAttribute('style', 'display: flex')
	}

	const userInput = document.getElementsByClassName('search-input')[0].value

	if (userInput == '') {
		alert('Введите свойство name')
	} else {
		Array.prototype.slice
			.call(document.getElementsByClassName('item'))
			.forEach(function (item) {
				if (item.name !== userInput) {
					item.setAttribute('style', 'display: none')
				}
			})
	}
}
