import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function BusinessItem({business}) {

    // console.log(business);

    const [photo,setPhoto] = useState('/placeholder.jpeg');

    useEffect(() => {
        const fetchPhoto = async() => {
            try{
                const response = await fetch(
                    `https://api.unsplash.com/photos/random?query=restaurant&orientation=landscape&client_id=oZMZL7ZZna6w1VHcbE6RqHBX5bqk_ZF3lczd7VgEYTM`,
                    {
                        method: 'GET',
                        headers: {
                            'Accept-Version': 'v1',
                            // Authorization: 'Client-ID oZMZL7ZZna6w1VHcbE6RqHBX5bqk_ZF3lczd7VgEYTM'
                        }
                    }
                );

                const data = await response.json();

                if (data.urls && data.urls.regular){
                    setPhoto(data.urls.regular);
                } 
            }catch(error){
                console.error('Error Fetching Photo',error)
            }
        };
        fetchPhoto();
    },[])

   
   
  return (
    <div className='w-[200px] flex-shrink-0 p-2 rounded-lg bg-white'> 
        {
            business ?
            (
                <>
                    <Image
                        //src='/placeholder.jpeg'
                        // src='/restaurant.jpg'
                        src={photo}
                        alt={business.name}
                        width={200}
                        height={80}
                        className='rounded-lg object-cover'
                    />
                    <h2 className='text-[16px] font-bold mt-1 line-clamp-1'>{business.name}</h2>
                    <h2 className='text-[12px] text-gray-400 line-clamp-2'>
                        {business["addr:street"]},{business["addr:city"]}
                    </h2>
                    <h2 className='text-[12px] font-bold'>
                        {business.phone}
                    </h2>
                    <h2 className='text-[12px] text-green-600 font-bold overflow-hidden'><a href={business.website}  target='_blank' rel='noopener noreferrer'>{business.website}</a></h2>
                    {/* <div className='flex gap-1 items-center'>
                        <h2 className='text-[12px] font-bold'>rating : </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" fill="currentColor" 
                        className="w-3 h-3 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div> */}
                </>
            )
            : null
        }
    </div>
  )
}

export default BusinessItem