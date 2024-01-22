import React from 'react';

function MapSkeletonLoading() {
  return (
    <div className="border bg-white shadow rounded-md p-2 w-full">
      <div className="animate-pulse flex flex-col ">
        <div className="rounded-lg bg-gray-200 w-[90] h-[700px]"></div>
      </div>
    </div>
  );
}

export default MapSkeletonLoading;
