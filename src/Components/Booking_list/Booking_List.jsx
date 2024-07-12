import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookedCars } from "../Utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Booking_List = () => {


  const bookingList = useLoaderData();
  
  const [bookedCars , setBookedCars] = useState([])
  useEffect(    
    ()=> {
     const storedBookedCars = getBookedCars();

     if( bookingList.length > 0 ){
         
        const carsbooked = [];

        for(const id of storedBookedCars )
    {

        const car = bookingList.find(car => car.id ===id);

        if(car){
            carsbooked.push(car);
        }
    }

     setBookedCars(carsbooked);
        

     }
    }
    
    ,[])


    const notify = () => toast("Your Booking Is Under Processing! We Will Confirm Through E-mail.");



    return (
        <div>
            <h1 className="text-2xl font-extrabold text-red-600 mt-10 mb-10"> Booked Cars : {bookedCars.length} </h1>

       <div className="grid grid-cols-1 gap-5 md:grid-cols-3 gap-5">


       {
            bookedCars.map(car => <li key={car.id}>

             

            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={car.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> {car.name} </h2>
    <p className="font-bold">{car.type} </p>
    <p className="font-bold">${car.price} </p>
    <div className="card-actions">
      <button 
      
       onClick={notify}
      className="btn btn-accent"> Under Proccessing  </button>

<ToastContainer />

    </div>
  </div>
</div>
                
                 
                
                
                


            </li>)
        }

       </div>


        </div>
    );
};

export default Booking_List;