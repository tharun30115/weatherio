import { useEffect, useState } from "react";

interface GeolocationCoordinates {
	lat: number | null;
	lon: number | null;
}
interface UseGeoLocationReturn {
	lat: number | null;
	lon: number | null;
	error: string | null;
}

const useGeoLocation = (): UseGeoLocationReturn => {
	const [location, setLocation] = useState<GeolocationCoordinates>({ lat: null, lon: null });
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLocation({ lat: position.coords.latitude, lon: position.coords.longitude });
					setError(null);
				},
				(err) => {
					setError(err.message);
				}
			);
		} else {
			setError("Geolocation is not supported by this browser.");
		}
	}, []);

	return { lat: location.lat, lon: location.lon, error };
};

export default useGeoLocation;
