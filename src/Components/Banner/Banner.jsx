import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div
        className="banner hero min-h-screen "
        style={{
          backgroundImage: "url(https://i.ibb.co/S32BLjJ/detailed-shot-car-wheels-tires.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-red-600">Welcome Here!</h1>
            <p className="mb-5 text-red-400">
            We offer quality vehicles and exceptional service. Enjoy a seamless car shopping and maintenance experience with us.
            </p>
            <Link to='/contact'>
            
            <button className="btn btn-outline btn-error">Contact Us</button>
            
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;