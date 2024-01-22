import React from 'react';

function SkeletonLoading() {
  return (
    <div className="border bg-white shadow rounded-md p-2 w-[250px]">
      <div className="animate-pulse flex flex-col ">
        <div className="rounded-lg bg-gray-200 w-[230px] h-40"></div>
        <div className="flex-1 space-y-2 py-3 ">
          <div className="h-2 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-200 rounded col-span-2"></div>
              <div className="h-2 bg-gray-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoading;
