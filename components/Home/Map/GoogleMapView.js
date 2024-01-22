import React, { useContext, useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import { UserLocationContext } from '@/context/UserLocationContext';
import L from 'leaflet';
import Markers from '../Markers';

function GoogleMapView({businessList}) {

    const{ userLocation,setUserLocation } = useContext(UserLocationContext);
    // const coordinate = { lat: 40.7128, lng: -74.006} 
    //lat: 16.8794227 lng:96.1421051
    const coordinate = { lat: 16.8794, lng: 96.142}

    const containerStyle = {
        height: "87vh",
        width: "100%"
    }
    

    const customIcon = new L.Icon({
        iconUrl: '/user-location.png', 
        iconSize: [50, 50], 
        iconAnchor: [16, 32], 
        popupAnchor: [0, -32], 
      });

    const handleMarkerDragEnd = (event) => {
        const {lat,lng} = event.target.getLatLng();
        console.log("dragged",lat,lng);
        updateLocation({lat,lng});
    }

    const updateLocation = ({lat,lng}) => {
        setUserLocation({lat,lng});
    }

    console.log(userLocation);

  return (
   
        <MapContainer
             center={userLocation} 
             //center={coordinate}
             zoom={12} 
             style={containerStyle}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
                position={userLocation} 
                //position={coordinate}
                draggable={true}
                icon={customIcon}
                eventHandlers={{
                    dragend: handleMarkerDragEnd
                }}
            />
            {
                businessList.map((item,index) => item.tags && index<=7 &&(
                    <Markers business={item} key={index}/>
                ))
            }
        </MapContainer>
    
  )
}

export default GoogleMapView