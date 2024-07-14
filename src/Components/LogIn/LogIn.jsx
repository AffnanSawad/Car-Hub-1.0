import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const LogIn = () => {


  
    
 const {log_In} =useContext(AuthContext)

   
 // form handler

 const handlelogin = e =>{

     e.preventDefault();
     
     
     const email = e.target.email.value;
     const password = e.target.password.value;

     console.log(email,password);


     // signup = firebase

     log_In(email,password)
     .then(result=>{

         console.log(result.user);

         // reset form
         e.target.reset();
     })

     .catch(error=>{

         console.error(error.message);

         e.target.reset()
     })
 }




    return (
        <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl text-blue-600 font-bold">Log In Now !</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      
              {/* form & add form event handler */}
            <form  onSubmit={handlelogin} className="card-body">
           
      
       
      
           {/* email */}
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
      
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
      
      
      
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
               
                {/* forgot pass */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
      
      
              <div className="form-control mt-6">
                <button 
                
                
                className="btn  

                 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                
              
                
                ">Log In</button>
              </div>
      
                {/* alrady registered */}
      
          <p className="font-bold"> New Here ? Please <Link to='/signup'>
          
          <button className="btn 
          
           
         text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
          
          "> Sign Up</button>
          
           </Link> First ! </p>
      
            </form>
      
        
      
      
          </div>
        </div>
      </div>
    );
};

export default LogIn;