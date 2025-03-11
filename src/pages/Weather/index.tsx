/* eslint-disable @typescript-eslint/no-explicit-any */
import BottomBox from "../../components/Bottombox";
import ClipText from "../../components/ClipText";
import useGeolocation from "../../hooks/useGeoLocation";
import { useEffect, useState } from "react";
import { GetWeather } from "../../services/api";
import { getForcastWeatherIcon, getMainWeatherIcon } from "../../helpers";

const Weather = () => {
	const { lat, lon, error } = useGeolocation();
	const [data, setData] = useState<any>();

	useEffect(() => {
		if (lat && lon) {
			GetWeather(lat.toString(), lon.toString()).then((res) => setData(res?.data));
		} else {
			console.log(error);
		}
	}, [error, lat, lon]);

	const currentTime = data?.location?.localtime.split(" ")[1];
	const currentHour = currentTime ? parseInt(currentTime.split(":")[0]) : 12;

	const nextFourHours = () => {
		const firstDayHours =
			data?.forecast?.forecastday[0]?.hour?.filter((hourData: any) => {
				const hour = parseInt(hourData.time.split(" ")[1].split(":")[0]);
				return hour > currentHour && hour < currentHour + 5;
			}) || [];

		if (firstDayHours.length < 4) {
			const remainingHoursNeeded = 4 - firstDayHours.length;
			const secondDayHours =
				data?.forecast?.forecastday[1]?.hour?.slice(0, remainingHoursNeeded) || [];
			return [...firstDayHours, ...secondDayHours];
		}

		return firstDayHours.slice(0, 4);
	};

	if (!data) {
		return (
			<span className="w-full text-center text-white font-bold text-xl mt-5">Loading...</span>
		);
	}
	return (
		<>
			<div className="flex flex-col items-center justify-between w-full py-14 h-full">
				<div className="w-full text-center text-[28px] relative font-extrabold flex flex-col">
					<ClipText content={data?.location?.country} />
					<ClipText content={data?.location?.name} />
				</div>
				<div className="relative w-full text-center font-bold text-[80px]">
					<ClipText content={`${data?.current?.temp_c}`} />
				</div>
				<img
					src={getMainWeatherIcon(data?.current?.condition.text)}
					alt="weather-icon"
					className="scale-[1.2]"
				/>
				<div className="w-full flex flex-col gap-1 items-center justify-center mt-8">
					<div className="relative w-full text-center font-extrabold text-sans text-[40px]">
						<ClipText content={data?.current?.condition.text} />
					</div>
					<div className="text-white font-extrabold text-lg font-sans">{currentTime}</div>
				</div>
			</div>
			<BottomBox>
				<div className="w-full flex items-center justify-center gap-5">
					{nextFourHours()?.map((hourData: any, index: number) => (
						<div
							key={index}
							className="bg-white w-[66px] h-[113px] rounded-full border border-stroke flex flex-col items-center justify-between pt-4 pb-6"
						>
							<img
								src={getForcastWeatherIcon(hourData.condition.text)}
								alt="weather-icon"
								className="w-[50px]"
							/>
							<span className="text-sans font-semibold text-sm text-title">
								{hourData.time.split(" ")[1]}
							</span>
						</div>
					))}
				</div>
			</BottomBox>
		</>
	);
};

export default Weather;
