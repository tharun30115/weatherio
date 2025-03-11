import axios from "axios";

export const GetWeather = async (lat: string, lon: string) =>
	await axios.get(
		`https://api.weatherapi.com/v1/forecast.json?key=${
			import.meta.env.VITE_OPENWEATHER_KEY
		}&q=${lat},${lon}&days=2`
	);
