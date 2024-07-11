
import { useLoaderData, useParams } from 'react-router-dom';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarDetails = () => {
 
   // HOW TO SHOE DETAILS
    const cardetails = useLoaderData();

   const {id} = useParams();

   const car_detail = cardetails.find( car_detail=> car_detail.id == id );

   console.log(car_detail); 



//    toast

const notify1 = () => toast("Added To The Cart");
const notify2 = () => toast("Booked Successfully");




    return (
        <div className='banner mt-10 flex gap-10 mb-20'>

         

        <img src={car_detail.image} alt="" />
         
         <div >

         <h1 className='text-2xl font-bold text-red-500'> Name: {car_detail.name} </h1>
         <h1 className=' font-bold mt-5'> Type: {car_detail.type} </h1>
         <h1 className=' font-semibold mt-5'>{car_detail.description} </h1>

         <h1 className="text-2xl font-bold text-red-600 mt-10">Price: ${car_detail.price}</h1>


         <div className="flex gap-5 mt-5">

         <button onClick={notify1} className='btn btn-accent'>Add To Cart</button>


         <button onClick={notify2} className='btn btn-error'>Book Now !</button>


         <ToastContainer />

         </div>
         

         </div>
            

            

        </div>
    );
};

export default CarDetails;