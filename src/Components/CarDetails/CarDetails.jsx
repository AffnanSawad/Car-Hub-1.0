
import { useLoaderData, useParams } from 'react-router-dom';

 import {saveBookedCars} from '../Utility/localstorage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarDetails = () => {
 
   // HOW TO SHOE DETAILS
    const cardetails = useLoaderData();

   const {id} = useParams();

   const car_detail = cardetails.find( car_detail=> car_detail.id == id );

   console.log(car_detail); 


   const idInt = parseInt(id);



//    toast


const notify2 = () =>{
    
    saveBookedCars(id);
    toast("Booked Successfully");


}

    return (
        <div className='banner mt-10 grid grid-flow-row  ml-2 md:flex flex-row gap-10 mb-20'>

         

        <img src={car_detail.image} alt="" />
         
         <div >

         <h1 className='text-2xl font-bold text-red-500'> Name: {car_detail.name} </h1>
         <h1 className=' font-bold mt-5'> Type: {car_detail.type} </h1>
         <h1 className=' font-semibold mt-5'>{car_detail.description} </h1>

         <h1 className="text-2xl font-bold text-red-600 mt-10">Price: ${car_detail.price}</h1>


         <div className="flex gap-5 mt-5">

         {/* <button onClick={notify1} className='btn btn-accent'>Add To Cart</button> */}


         <button onClick={notify2} className='btn 
         
         
         text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
         
         
         '>Book Now !</button>


         <ToastContainer />

         </div>
         

         </div>
            

            

        </div>
    );
};

export default CarDetails;