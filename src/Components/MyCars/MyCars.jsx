import { useEffect, useState } from 'react';
import './mycars.css'
import Car from '../Car/Car';

const MyCars = () => {
      
    // declaring state to load data from json data

    const [cars,setcars] = useState([]);

    //show all e click korle baki cars dekabe

    const [length , setlength] = useState(6);

    useEffect( ()=> {

     fetch('data.json')
     .then(res=> res.json())
     .then(data=>setcars(data));

    }  ,[])
   

    return (
        <div>
             
     <h1 className="banner2 text-4xl font-bold text-center text-red-600 mt-10 mb-10  "> Pick Your Favourite One ! </h1>


     <div className="cars-container flex-grow grid gap-10 grid-cols-1 md:grid-cols-3  lg:grid-cols-3">

    {
        cars.slice(0,length).map( car =><Car   
          
            key={car.id}
            
            car={car}
         
        ></Car> )
    }
   

     </div>
     

     {/*  SHOW ALL BUTTON E CLICK KORLE BAKI CARD DEKABE. THEN BUTTON HIDDEN HOI JABE */}

     <div 
     
     className={length === cars.length && 'hidden' }
     >

    <button 
    
     onClick={()=> setlength(cars.length)}
    
    className='btn text-white font-extrabold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8 mt-10   '>Show All </button>

     </div>

        </div>
    );
};

export default MyCars;