/* eslint-disable react-hooks/set-state-in-effect */
import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import Button from "./Button";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeoLocation";

export default function Map() {
  const [searchParams] = useSearchParams();
  const [mapPostion, setMapPostion] = useState([40, 0]);
  const { cities } = useCities();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  const {
    geoLocationPostion,
    getPosition,
    isLoading: isLoadingPostion,
  } = useGeolocation();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPostion([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geoLocationPostion) {
        setMapPostion([geoLocationPostion.lat, geoLocationPostion.lng]);
      }
    },
    [geoLocationPostion]
  );

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPostion ? "Loading..." : "use your location"}
      </Button>
      <MapContainer
        center={[mapLat || 40, mapLng || 0]}
        zoom={8}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPostion} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      console.log(e);
    },
  });
}
