import './styles.css';

const apiKey = 'QZT3RJNA76KZFXGR896VM5CFJ';
const input = document.querySelector('input');

async function main() {
	try {
		if (input.value !== '') {
			const city = input.value;
			const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`);
			const data = await response.json();
			document.getElementById('weather-condition').textContent = data.currentConditions.conditions;
			document.getElementById('city').textContent = city.toUpperCase();
			document.getElementById('temperature').innerHTML = `${data.currentConditions.temp}<p>&degC</p>`;
			document.getElementById('feel').textContent = `Feels like: ${data.currentConditions.feelslike}°C`;
			document.getElementById('wind').textContent = `Wind: ${data.currentConditions.windspeed} Km/h`;
			document.getElementById('humidity').textContent = `Humidity: ${data.currentConditions.humidity}%`;
		}
	} catch {
		const errorDisplay = document.createElement('div');
		errorDisplay.classList.add('error-display');
		errorDisplay.textContent = 'ERROR Please check your internet connection and search a valid city';
		document.querySelector('body').appendChild(errorDisplay);
		errorDisplay.addEventListener('click', () => {
			errorDisplay.style.display = 'none';
		});
	}
}

window.addEventListener('keydown', (event) => {
	if(event.key === 'Enter') {
		main();
	}
});