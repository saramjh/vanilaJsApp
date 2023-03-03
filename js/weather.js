const API_KEY = "e4517b8d99915d442491b5355ba12f22"
const weather = document.getElementById("weather")

function onGeoSuccess(position) {
	const lat = position.coords.latitude
	const lon = position.coords.longitude
	const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

	fetch(URL)
		.then((response) => response.json())
		.then(
			(data) =>
				(weather.innerText = `위치 - ${data.name}
				날씨 - ${data.weather[0].description}
				습도 - ${data.main.humidity}%
				기온 - ${data.main.temp}℃
				최고기온 - ${data.main.temp_max}℃
				최저기온 - ${data.main.temp_min}℃`)
		)
}
function onGeoFailure(error) {
	Error(error)
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure)
