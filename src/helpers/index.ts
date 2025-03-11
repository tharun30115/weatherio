import sunny from "../assets/images/sunny.svg";
import rainy from "../assets/images/rainy.svg";
import rainySmall from "../assets/images/rainy-small.svg";
import cloudy from "../assets/images/cloudy.svg";
import cloudySmall from "../assets/images/cloudy-small.svg";
import pcloudy from "../assets/images/partly-cloudy.svg";
import thunder from "../assets/images/thunder.png";
import thunderSmall from "../assets/images/thunder-small.svg";

export const getMainWeatherIcon = (title: string) => {
	switch (title) {
		case "Sunny":
			return sunny;
		case "Partly cloudy":
			return pcloudy;
		case "Cloudy":
			return cloudy;
		case "Rainy":
			return rainy;
		case "Thundery outbreaks possible":
			return thunder;
		default:
			if (title.includes("rain")) {
				return rainy;
			}
			if (title.includes("thunder")) {
				return thunder;
			}
			return sunny;
	}
};

export const getForcastWeatherIcon = (title: string | undefined | null) => {
	if (!title) {
		return sunny;
	}
	switch (title.toLocaleLowerCase()) {
		case "sunny":
			return sunny;
		case "partly cloudy ":
			return pcloudy;
		case "cloudy ":
			return cloudySmall;
		case "rainy":
			return rainySmall;
		case "thundery outbreaks possible":
			return thunderSmall;
		default:
			if (title.includes("rain")) {
				return rainySmall;
			}
			if (title.includes("thunder")) {
				return thunderSmall;
			}
			return sunny;
	}
};
