import React from 'react';
import Feature from './Feature';

const SingleCard = ({packagee}) => {
  const {features} = packagee;
  return (
    <div className='p-6 mt-10 md:mt-0 rounded-lg bg-slate-300'>
      <h2 className='text-center text-4xl'>$
        <span className='text-6xl font-semibold'>{packagee.price}</span>
        <span className='text-xl'>/month</span>
      </h2>
      <h4 className='text-center my-2'>
        <span className='text-2xl'>{packagee.name}</span>
      </h4>
      <div className='mt-4'>
        {
          features.map((feature, idx) => <Feature
          key={idx}
          feature = {feature}
          ></Feature>)
        }
      </div>
      <button className=' w-full bg-blue-500 mt-4 py-2 rounded-lg text-lg font-medium tracking-wide text-white'>Buy Now</button>
    </div>
  );
};

export default SingleCard;