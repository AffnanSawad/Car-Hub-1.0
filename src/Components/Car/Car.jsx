
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

     {/* SHOW DETAILS BUTTON */}

     <Link to={`/details/${id}`}>
    
     <button className='btn
     
     text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
     
     
     
     '> Show Details </button>
    
    </Link>



  </div>
</div>
    );
};

export default Car;