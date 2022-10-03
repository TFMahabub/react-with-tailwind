import React from 'react';
import SingleCard from './SingleCard';

const CardBody = () => {
  const packages = [
    {id:1, name:'Free', price: 0, features:[
      '1 month free of cost',
      'High Speed',
      'Quickly servicing',
      'Hudai Service',
      'Hudai Service',
    ]},
    {id:2, name:'Standard', price: 10.00, features:[
      '1 month free of cost',
      'High Speed',
      'Quickly servicing',
      'Hudai Service',
      'Hudai Service',
    ]},
    {id:3, name:'Premium', price: 20.00, features:[
      '1 month free of cost',
      'High Speed',
      'Quickly servicing',
      'Hudai Service',
      'Hudai Service',
    ]}
  ]
  return (
    <div className='m-4 md:m-12 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {
        packages.map(packagee => <SingleCard 
          key={packagee.id}
          packagee ={packagee}
        ></SingleCard>)
      }
    </div>
  );
};

export default CardBody;