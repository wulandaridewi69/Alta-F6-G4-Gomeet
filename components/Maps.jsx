import React, { useRef, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
// import Image from 'next/image';

// const markerIcon = new L.Icon({
//     iconUrl: ('leaf-green.png'),
//     iconSize: [25, 41],
// });

const Maps = ({ center, draggable, onDragMarker, location }) => {
  const markerRef = useRef(null);

  const dragHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker !== null) {
          onDragMarker(marker.getLatLng());
        }
      },
    }),
    []
  );

  // var LeafIcon = L.Icon.extend({
  //     shadowUrl: 'leaf-shadow.png',
  //     iconSize: [38, 95],
  //     shadowSize: [50, 64],
  //     iconAnchor: [22, 94],
  //     shadowAnchor: [4, 62],
  //     popupAnchor: [-3, -76]
  // });

  // var customIcon = new LeafIcon({ iconUrl: 'leaf-green.png' })

  return (
    <MapContainer
      center={[center.lng, center.lat]}
      // icon={markerIcon}
      // icon={customIcon}
      zoom={13}
      scrollWheelZoom={true}
      className="h-[300px] w-[600px]"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[
          location && location.lng ? location.lng : "",
          location && location.lat ? location.lat : "",
        ]}
        draggable={draggable}
        eventHandlers={dragHandlers}
        ref={markerRef}
      >
        <Popup className="bg-red-500 text-white">{"my point"}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
