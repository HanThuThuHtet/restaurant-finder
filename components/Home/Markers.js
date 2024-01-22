import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import BusinessItem from './BusinessItem';

function Markers({business}) {
  
    const { lat,lon} = business;
    const businessInfo = business.tags;
    // console.log(business.tags);
    // console.log(businessInfo);

    const customIcon = new L.Icon({
        iconUrl: '/placeholder.png', 
        iconSize: [30, 30], 
        iconAnchor: [16, 32], 
        popupAnchor: [0, -32], 
      });

  return (
    <div>
         {
          lat && lon && (
            <Marker
                position={[lat,lon]}
                icon={customIcon}
            >
              <Popup 
                position={[lat,lon]}
                
              >
                <BusinessItem business={businessInfo} />
              </Popup>
            </Marker>
          )
         }
    </div>
  )
}

export default Markers