import React, { useState } from 'react';
import dynamic from 'next/dynamic';

function Mymap() {
    const Maps = dynamic(
        () => import('../components/Maps'),
        { ssr: false }
    )

    const [location, setLocation] = useState({ lng: - 6.988567492671183, lat: 110.42104354029307 });

    return (
        <div>
            <Maps
                center={location}
                location={location}
                draggable={true}
                title="My Map"
                onDragMarker={(e) => {
                    console.log("e", e);
                    let loc = { lat: e.lng, lng: e.lat };
                    setLocation(loc);
                }}
            />
            {"lng: " + location.lng}
            <br />
            {"lat: " + location.lat}
        </div>
    )
}

export default Mymap