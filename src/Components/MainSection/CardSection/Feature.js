import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
  return (
    <div className='flex mt-2'>
      <CheckCircleIcon className="h-6 w-6 text-blue-500"/>
      <li className='list-none ml-2'>{feature}</li>
    </div>
  );
};

export default Feature;
