/* eslint-disable no-unused-vars */
import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
    const [isLoading, setIsLoading] = useState(false);
    const [geoLocationPostion, setGeoLocationPostion] = useState(defaultPosition);
    const [error, setError] = useState(null);

    const lat = geoLocationPostion;
    const lng = geoLocationPostion

    function getPosition() {

        if (!navigator.geolocation)
            return setError("Your browser does not support geolocation");

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setGeoLocationPostion({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                });
                setIsLoading(false);
            },
            (error) => {
                setError(error.message);
                setIsLoading(false);
            }
        );
    }
    return { geoLocationPostion, getPosition, isLoading, error }
}
