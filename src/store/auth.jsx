import { createContext, useContext, useEffect, useState } from"react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"))
            
    const userauthorization=`Beaber ${token}`;
        const storetokenInls=(servertoken)=>{
            return localStorage.setItem('token' ,servertoken);
        };

        const logoutuser=()=>{
            setToken("");
            return localStorage.removeItem("token")
        }

      const userauthentication=async()=>{
try {
    const Response =await fetch(`http://localhost:5000/api/auth/current`,{
        method:"GET",
        headers:{
            Authorization:userauthorization
        },
        
    })
    if(Response){
        const res_data=await Response.json();
        console.log(res_data);
    }
} catch (error) {
    console.log('error from token ')
}
      }
        useEffect(()=>{
            userauthentication()
        },[]);

    return (
        <AuthContext.Provider value={{storetokenInls,userauthorization,logoutuser}}>
            {children}
        </AuthContext.Provider>
    )
};


export const useAuth=()=>{

    const authcontextvalue=useContext(AuthContext);
    if(!authcontextvalue){
        throw new Error('use auth used outside of provider');
    }
    return authcontextvalue;
};