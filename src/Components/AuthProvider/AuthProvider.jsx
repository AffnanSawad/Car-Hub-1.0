import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";

// creating ConText
export const AuthContext = createContext(null);




const AuthProvider = ({children}) => {

  const [user,setuser] = useState(null);

//   loading

 const [loading , setloading] = useState(true);

//   Sign Up => create a new user

const sign_Up = (email,password)=>{
        
     
    setloading(true);

    return createUserWithEmailAndPassword(auth,email,password);
}


// log_in =>existing users

const log_In = (email,password)=>{

    setloading(true);        

    return signInWithEmailAndPassword(auth,email,password);
}


// LogOut

const Log_Out =() =>{

    setloading(true); 

    return signOut(auth);
}


// ouAuthStateChanged

 useEffect(    
    
    ()=>{

    const unSubscribe = onAuthStateChanged(auth , currentuser =>{


        setuser(currentuser);

        // false hbe
        setloading(false);
     })

     return ()=>{
        
        unSubscribe();

     }


    }
    
    ,[])


    // values
    const authvalues ={user,  sign_Up,  log_In  , Log_Out , loading}
    
    
    return (
        <AuthContext.Provider value={authvalues}>
             
             {/* PROPS VALUE MUST BE */}

        {children}



        </AuthContext.Provider>
    );
};

export default AuthProvider;