import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {

  // import context

  const{user,Log_Out} = useContext(AuthContext);


  const handleLogOut = ()=>{

    Log_Out()
    .then(result =>{

      console.log(result.user);
    })

    .catch(error=>{
      console.log(error.message);
    })
  }

//    Nav Links

 const NavLinks = <>
 
    <li className="font-bold"> <Link to='/'> Home   </Link>   </li>
    {/* <li className="font-bold"> <Link to='/cart'> My Cart   </Link>   </li> */}
        
        {
          user && <>

          <li className="font-bold"> <Link to='/booking'> Booking List   </Link>   </li>
    <li className="font-bold"> <Link to='/stat'> Statistics   </Link>   </li>
    </>
        }


    <li className="font-bold"> <Link to='/contact'>Contact  </Link>   </li>
    <li className="font-bold"> <Link to='/login'>Log In  </Link>   </li>
    <li className="font-bold"> <Link to='/signup'>Sign Up </Link>   </li>
 
 
 </>




    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         
    {NavLinks}



      </ul>
    </div>
    <a className=" text-2xl font-bold">Car-Hub-1.0</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
                


      {NavLinks}

          
    </ul>
  </div>

  
 <div className="navbar-end">

 {

user ? <>
 


 <p className="mr-2  md:ml-4 "> {user.email}</p> 

 <div onClick={handleLogOut} className="navbar-end">
<a className="btn 

text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2


">Log Out</a>
</div>

 
</>

:

<div className="navbar-end gap-2">

<Link to='/login'>

<a className="btn btn-outline

text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2


">Log In</a>

</Link>


</div>
}


 </div>
  
</div> 


        </div>
    );
};

export default Navbar;
    
        