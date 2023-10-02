import React, { useRef, useState } from "react";
import { useEffect } from "react";
import eventsIcon from "../../assets/event.png";
// prettier-ignore
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMapEvents, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { Card, Metric, Text } from "@tremor/react";
import { database } from "../../firebase";
import { addEvent, resetEvents, setMap } from "../../store/Events/eventSlice";
import { useDispatch, useSelector } from "react-redux";

const Map = () => {
  const selectedEvent = useSelector((state) => state.events.map);
  const map = useRef(null);
  const popupRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState();
  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedEvent) {
      map.current.flyTo(
        [selectedEvent.location.lat, selectedEvent.location.lon],
        14
      );
      // popupRef.current.openPopup();
      // console.log(popupRef.current);
      // popupRef.current._source._events.click();
      console.log(popupRef.current);
    }
  }, [selectedEvent]);

  const MapComponent = () => {
    const _map = useMap();
    map.current = _map;
    return null;
  };

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

    onSnapshot(collectionRef, (docsSnaps) => {
      const results = [];
      dispatch(resetEvents());
      docsSnaps.forEach((currentDoc) => {
        const event = currentDoc.data();
        results.push(event);
      });
      console.log(results);
      setEvents(results);
      results.map((event) => dispatch(addEvent(event)));
    });
  }, []);

  return (
    <MapContainer
      style={{ height: "400px" }}
      center={currentLocation ?? [-33.8899, 18.5066]}
      zoom={10}
    >
      <MapComponent key={"Map"} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[-33.8899, 18.5066]}>
        <Popup>My Current Location</Popup>
      </Marker> */}

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
