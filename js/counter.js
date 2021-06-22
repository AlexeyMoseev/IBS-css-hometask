const countInput = document.getElementsByClassName('count')[0];
const remove = document.getElementsByClassName('remove')[0];
const add = document.getElementsByClassName('add')[0];
const units = countInput.value.replace(/\d/g, '');
add.onclick = function () {
	countInput.value = parseInt(countInput.value) + 1 + units;
};
remove.onclick = function () {
	if (parseInt(countInput.value) > 1) {
		countInput.value = parseInt(countInput.value) - 1 + units;
	}
};
