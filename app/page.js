"use client"
import GlobalApi from '@/Shared/GlobalApi';
import BusinessList from '@/components/Home/BusinessList';
import CategoryList from '@/components/Home/CategoryList';
import GoogleMapView from '@/components/Home/Map/page';
import RangeSelect from '@/components/Home/RangeSelect';
import SelectRating from '@/components/Home/SelectRating';
import MapSkeletonLoading from '@/components/MapSkeletonLoading';
import SkeltonLoading from '@/components/SkeletonLoading';
import { UserLocationContext } from '@/context/UserLocationContext';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react'

export default function Home() {
  const {data:session} = useSession();
  const [ category,setCategory ] = useState();
  const [ radius,setRadius ] = useState(2500);

  const [ businessList,setBusinessList ] = useState([]);
  const { userLocation } = useContext(UserLocationContext);
  
  const [loading,setLoading] = useState(true);
  const router = useRouter();

  console.log(userLocation);

  const [lat,setLat] = useState();
  const [lng,setLng] = useState();

  useEffect(() => {
    if(!session?.user){
      router.push("/Login")
    }
  },[session])

  const getGooglePlace = () => {
    setLoading(true);
    if(userLocation){
      setLat(userLocation.lat);
      setLng(userLocation.lng);
    }
    GlobalApi.getGooglePlace(category,radius,lat,lng)
    .then(res => {
      console.log(res.data.osmData.elements);
      setBusinessList(res.data.osmData.elements);
      setLoading(false);
    })
  }

  useEffect(() => {
    getGooglePlace();
  },[category,radius])


  
  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
      <div className='py-8 px-4'>
        <CategoryList onCategoryChange={(value) => setCategory(value)}/>
        <RangeSelect onRadiusChange={(value) => setRadius(value)} />
        {/* <SelectRating /> */}
      </div>
      <div className='col-span-3 relative'>
        
         <GoogleMapView businessList={businessList} />
    
        <div className='md:absolute z-[1000] ml-6 mx-2 w-[95%] md:w-[95%] bottom-36 relative md:bottom-3'>
            {
              !loading 
              ? <BusinessList businessList={businessList} />
              : ""
                // <div className='flex gap-3'>
                //   {[1,2,3,4,5].map((item,index)=>(
                //       <SkeltonLoading key={index} />
                //   ))}
                // </div>
            }
        </div>
      </div>
    </div>
  )
}
