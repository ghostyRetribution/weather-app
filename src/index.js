import './styles.css';

const apiKey = 'QZT3RJNA76KZFXGR896VM5CFJ';
const input = document.querySelector('input');

function main() {
	if (input.value !== '') {
		const city = input.value;
		fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`)
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				document.getElementById('weather-condition').textContent = response.currentConditions.conditions;
				document.getElementById('city').textContent = city.toUpperCase();
				document.getElementById('temperature').textContent = response.currentConditions.temp;
				document.getElementById('feel').textContent = `Feels like: ${response.currentConditions.feelslike}`;
				document.getElementById('wind').textContent = `Wind: ${response.currentConditions.windspeed} Km/h`;
				document.getElementById('humidity').textContent = `Humidity: ${response.currentConditions.humidity}%`;
			});
	}
}

window.addEventListener('keydown', (event) => {
	if(event.key === 'Enter') {
		main();
	}
});