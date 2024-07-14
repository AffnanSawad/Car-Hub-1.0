import Banner from "../Banner/Banner";
import MarqueeDesign from "../MarqueDesign/MarqueeDesign";

import MyCars from "../MyCars/MyCars";



const Home = () => {
    return (
        <div>
              
    <Banner></Banner>

    <div className="mt-20 mb-10">

        <h1 className="banner2 text-center mb-20 text-4xl font-extrabold 
    
      text-red-600
        
        
        ">  Brand's You May Know ! </h1>

<MarqueeDesign ></MarqueeDesign>

        </div>

    
 
    <MyCars></MyCars>
              


        </div>
    );
};

export default Home;