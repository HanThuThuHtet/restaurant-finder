"use client"
import GlobalApi from '@/Shared/GlobalApi';
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function HeaderNavBar() {
    const {data:session} = useSession();
    const [ profileClick,setProfileClick ] = useState(false);
    const [ searchQuery,setSearchQuery ] = useState('');
    const [ searchResults,setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProfileClick(false)
        },6000)
    },[profileClick==true]);

    // const getSearchResult = () => {
    //     GlobalApi.getSearchResult(searchQuery)
    //     .then(res => {
    //         console.log(res.data.osmData.elements);
    //         setSearchResults(res.data.osmData.elements)
    // })}

    // useEffect(() => {
    //     if(searchQuery.trim() !== ''){
    //         getSearchResult();
    //     }else{
    //         setSearchResults([]);
    //     }
    // },[searchQuery])

    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //       e.preventDefault(); 
    //       getSearchResult();
    //     }
    //   };


  return (
    <div className='flex items-center justify-between p-2 shadow-sm'>
        <div className='flex gap-7 items-center'>
            <Image src="/logo.png" alt='tasty-bites' width={60} height={60} />
            <h2>Home</h2>
            <h2>Favourite</h2>
        </div>
        {/* <div className='bg-gray-100 p-[6px] rounded-md w-[40%] gap-3 hidden md:flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type='text' 
                    placeholder='Search'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='bg-transparent outline-none w-full'
             />
        </div> */}
        <div className='px-6'>
            {session?.user 
            ?  (
                <>
                    <Image src={session.user.image} alt='user' width={40} height={40} 
                        className='rounded-full cursor-pointer 
                        hover:border-[2px] border-green-500'
                        onClick={() => setProfileClick(!profileClick)}
                    /> 
                    {
                        profileClick 
                        ? (
                            <div className="absolute flex gap-2 bg-white p-3 shadow-md border-[1px] mt-2  right-4 z-[2000]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                </svg>

                                <h2 className="cursor-pointer hover:text-blue-500 hover:font-bold"
                                onClick={()=>signOut()}>Logout</h2>
                            </div>
                            )
                        :null
                    }
                </>
                )
            : null }
        </div>
    </div>
  )
}

export default HeaderNavBar