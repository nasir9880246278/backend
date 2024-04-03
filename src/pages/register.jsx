import { useState } from "react"
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import {toast} from"react-toastify"

export const Register=()=>{

     const navigate=useNavigate();
     
     const {storetokenInls}=useAuth();
     const [user,setUser]=useState({
          username:"",
          email:"",
          password:"",
     });

      const handleinput=(e)=>{
          console.log(e)
          let name=e.target.name;
          let value=e.target.value;

          setUser({
               ...user,
               [name]:value,
          })

      };

    const handlesubmit=async(e)=>{
     e.preventDefault();
     console.log(user);
     try {
          const response=await fetch(`http://localhost:5000/api/auth/register`,{
               method:"POST",
               headers:{
                    "Content-Type":"application/json",

               },
               body:JSON.stringify(user)
          });

          const res_data=await response.json();
          console.log("res data",res_data);

          if(response){

               //storing token in ls
               storetokenInls(res_data.token);

               toast.success("registration succussfull");
               setUser({
                    username:"",
                    email:"",
                    password:"",
               })
               navigate('/login');
          }
     } catch (error) {
          console.log("register",error)
     }
     

    }
      

    return <>
    <div className="container  mx-auto text-center justify-center flex flex-col h-screen bg-indigo-500">
      <h1 className=" text-4xl font-bold p-4 text-black  uppercase mb-4 underline sm:text-6xl">Register Please</h1>
      <div className="shadow-2xl w-60 rounded-md bg-gray-600 text-center justify-center flex flex-col mx-auto">
        <form onSubmit={handlesubmit} >
        <div >
           <label htmlFor="username" className="block text-xl my-3 capitalize">username </label>
                <input type="text" className="rounded p-2 "
                    name="username" 
                      value={user.username}
                       placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      onChange={handleinput} 
                      
                 />
          </div>
          <div>
           <label htmlFor="email" className="block text-xl my-3 capitalize">email</label>
                <input type="email" className="rounded p-2 "
                    name="email" 
                      value={user.email}
                       placeholder="email"
                      id="email"
                      required
                      autoComplete="off" 
                      onChange={handleinput}
                 />
          </div>
          <div>
           <label htmlFor="password" className="block my-3 text-xl capitalize">password </label>
                <input type="password" className="rounded p-2 "
                    name="password" 
                      value={user.password}
                       placeholder="password"
                      id="password"
                      required
                      autoComplete="off" 
                      onChange={handleinput}
                      
                 />
          </div>
          <button type="submit" className="mx-auto bg-indigo-500 mt-6 p-3 rounded-lg border-white border-2 ring-* text-2xl mb-2 ">SUBMIT</button>
        </form>
       
      </div>
      <div>
          <p className="text-xl p-2 font-bold">already have an account? <a href="/login"><button className="text-1xl bg-transparent border-2 border-black p-2 rounded-lg text-white" >Login</button></a></p>
        </div>
    </div>
    
    </>
}