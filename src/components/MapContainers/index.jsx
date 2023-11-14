import { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function MapContainers({ positions }) {

  const { isLoaded } = useLoadScript({

    googleMapsApiKey: import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  function Map() {
    const center = useMemo(() => ({ lat: positions[0], lng: positions[1] }), [])
    return (
      <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
        <MarkerF position={center} />
      </GoogleMap>
    )
  }
  if (!isLoaded) return <div>Loading..</div>
  return <Map />
}