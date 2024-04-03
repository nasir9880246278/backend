import { useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"

export const Contact=()=>{

     const {userauthorization}=useAuth();

    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
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
        const response=await fetch(`http://localhost:5000/api/home`,{
             method:"POST",
             headers:{
                  "Content-Type":"application/json",
                  Authorization:userauthorization

             },
             body:JSON.stringify(user)
        });

        const res_data=await response.json();
        console.log("res data",res_data);

        if(response){
             toast.success("Contact added succussfull");
             setUser({
                  name:"",
                  email:"",
                  phone:"",
             })
        }
   } catch (error) {
        console.log("contact",error)
   }
   

  }

    return <>
    <div className="container  mx-auto text-center justify-center flex flex-col h-screen">
      <h1 className=" text-4xl font-bold p-4 text-black  uppercase mb-4 underline sm:text-6xl">Create Contact</h1>
      <div className="shadow-2xl w-60 rounded-md bg-gray-600 text-center justify-center flex flex-col mx-auto">
        <form onSubmit={handlesubmit} >
        <div >
           <label htmlFor="name" className="block text-xl my-3 capitalize">name </label>
                <input type="text" className="rounded p-2 "
                    name="name" 
                      value={user.name}
                       placeholder="name"
                      id="name"
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
           <label htmlFor="phone" className="block my-3 text-xl capitalize">phone </label>
                <input type="number" className="rounded p-2 "
                    name="phone" 
                      value={user.phone}
                       placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off" 
                      onChange={handleinput}
                      
                 />
          </div>
          <button type="submit" className="mx-auto bg-indigo-500 mt-6 p-3 rounded-lg border-white border-2 ring-* text-2xl mb-2 ">SUBMIT</button>
          
        </form>
        <div className=" flex justify-center items-center ">
            <a href="/home"><button className="p-2 m-1 text-indigo-400">/Home</button></a>
            <a href="/contact"><button className="p-2 m-1 text-indigo-400">/Add contact</button></a>
          </div>
       
      </div>
    
    </div>
    </>
}