// localstorage e save kora



const getBookedCars = () => {

  const StoredbookedCar = localStorage.getItem('booked-car');

  if(StoredbookedCar){

    return JSON.parse(StoredbookedCar);
  }
  
  return [];

}

const saveBookedCars = id => {

  
const saving_Booked_cars = getBookedCars();

// ek id /item jate bar bar cart e add na hoi. 

const exist = saving_Booked_cars.find( carsId => carsId == id );

if( !exist ){

    saving_Booked_cars.push(id);

    localStorage.setItem('booked-car', JSON.stringify(saving_Booked_cars));
}



}


export { getBookedCars,saveBookedCars} 