export default function ajax(method, url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			if (this.status === 200) callback(JSON.parse(this.responseText));
		}
	};
	xhr.send();
}
