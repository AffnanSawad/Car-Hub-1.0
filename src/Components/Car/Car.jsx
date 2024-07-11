import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({car}) => {

   const {id,name,series,description,price,type,image} = car;
  

    return (
        <div className="card bg-base-100 w-96 shadow-xl flex flex-col">
  <figure>
    
    <img src={image} />
     
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary"> new </div>
    </h2>
    <p className='texl-xl font-semibold '>Series : {series} </p>
       
     <div className="flex mr-5  texl-xl font-semibold">

    <h2> Price : ${price} </h2>

    <h2 className='ml-8'>Type:{type} </h2>

     </div>

     <hr />

     <Link to={`/details/${id}`}>
    
     <button className='btn btn-accent'> Show Details </button>
    
    </Link>



  </div>
</div>
    );
};

export default Car;