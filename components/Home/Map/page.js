import dynamic from "next/dynamic";

const GoogleMapView = dynamic(() => import('./GoogleMapView'),{
    ssr: false
});

export default GoogleMapView