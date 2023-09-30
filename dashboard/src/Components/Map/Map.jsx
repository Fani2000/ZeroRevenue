import React, { useState } from "react";
import { useEffect } from "react";
import eventsIcon from "../../assets/event.png";
// prettier-ignore
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { Card, Metric, Text } from "@tremor/react";
import { database } from "../../firebase";

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("FOUND LOCATION");
        setCurrentLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      },
      (error) => {
        console.log("Error: ", error);
      }
    );
  }, []);

  useEffect(() => {
    const collectionRef = collection(database, "Events");
    // getDocs(collectionRef).then((query) => {
    //   query.forEach((doc) => {
    //     console.log("DOC: ", doc.data());
    //     setEvents(events);
    //   });
    // });

    onSnapshot(collectionRef, (docsSnaps) => {
      const results = [];
      docsSnaps.forEach((currentDoc) => {
        results.push(currentDoc.data());
      });
      setEvents(results);
    });
  }, []);

  return (
    <MapContainer
      style={{ height: "500px" }}
      center={currentLocation ?? [-33.8899, 18.5066]}
      zoom={10}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-33.8899, 18.5066]}>
        <Popup>My Current Location</Popup>
      </Marker>

      {events.map((event, i) => (
        <Marker
          key={i}
          icon={
            new Icon({
              iconUrl: eventsIcon,
              iconSize: [30, 30],
            })
          }
          position={[event.location.lat, event.location.lon]}
        >
          <Popup>
            <Text>Event Type: {event.type}</Text>
            <Text>Address: {event.address}</Text>
            <Text>User ID: Fani</Text>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
