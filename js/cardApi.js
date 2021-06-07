const urlCard = 'http://localhost:3006/item/:itemid'
const id = '571fc60d-ea2c-469e-a5b6-c229d31f195d' //id нажатой карточки - будем получать динамически при полной реализации

function ajax(method, url, callback) {
	var xhr = new XMLHttpRequest()
	xhr.open(method, url)
	xhr.onreadystatechange = function () {
		if (this.readyState == 4) {
			if (this.status == 200) callback(JSON.parse(this.responseText))
		}
	}
	xhr.send(null)
}

ajax('GET', 'http://localhost:3006/item/' + id, function (data) {
	try {
		//Заполнение данных карточки
		const title = document.getElementsByClassName('detailed-title')[0]
		title.innerHTML = data.content.name

		const description = document.getElementsByClassName('description')[0]
		description.innerHTML = data.content.description

		const details = document.getElementsByClassName('details')[0]
		details.innerHTML = data.content.details

		const info = document.getElementsByClassName('info')[0]
		info.innerHTML = data.content.info

		const currency = document.getElementsByName('purchase-currency')[0]
		if (data.content.price.currency == 'USD') {
			currency.innerHTML = '$'
		}

		const purchase = document.getElementsByName('purchase-value')[0]
		purchase.innerHTML = data.content.price.value

		//Добавление фото
		const photo = document.getElementsByClassName('detailed-image')[0]
		photo.src = 'http://localhost:3006/' + data.content.picture.path
		photo.alt = data.content.picture.alt

		//Проверка лайка
		const favorite = document.getElementsByClassName(
			'detailed-favorite-button'
		)[0]
		if (!data.content.like) {
			favorite.insertAdjacentHTML(
				'afterbegin',
				'<svg class="favorite" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z" fill="#959595"/></svg>'
			)
		} else {
			favorite.insertAdjacentHTML(
				'afterbegin',
				'<svg class="favorite" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#E97F03"/></svg>'
			)
		}
	} catch (e) {
		console.log(e)
	}
})
