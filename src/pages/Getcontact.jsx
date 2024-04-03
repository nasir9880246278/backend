import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const Getcontact=()=>{

    const {userauthorization}=useAuth();
 const [contact,setContact]=useState([]);

 const getcontact=async()=>{
try {
    const responce=await fetch(`http://localhost:5000/api/home`,{
        method:"GET",
        headers:{
            Authorization:userauthorization
        },
        
        
    });
    const res_data=await responce.json();
    console.log("res_data",res_data);
    setContact(res_data);
} catch (error) {
    console.log("error while fetching contact")
}
 }

 const deleteUser=async(id)=>{
    try {
        const responce=await fetch(`http://localhost:5000/api/home/${id}`,{
            method:"DELETE",
            headers:{
                Authorization:userauthorization
            }
        })
        const res=await responce.json()
        console.log("res",res)
        if(responce){
            alert("contact deleted")
            getcontact();
        }
    } catch (error) {
        console.log("cannot delete")
    }
 }

 useEffect(()=>{
    getcontact();
 },[])
 


 return<>
     <div className="container flex flex-col  item-center justify-center  mx-auto h-screen">
        
     <table >
            <thead className="text-xl p-2  border-l-2 border-white ">
                <tr >
                    <th className=" border-2 border-black p-2">Name</th>
                    <th className=" border-2 border-black p-2">Email</th>
                    <th className=" border-2 border-black p-2 ">Phone</th>
                    <th className=" border-2 border-black p-2">Update</th>
                    <th className=" border-2 border-black p-2">Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                 contact.map((curUser,index)=>{
                  return (<tr key={index}>
                    <td className="border-2 border-black p-2 text-center">{curUser.name}</td>
                    <td className="border-2 border-black p-2 text-center ">{curUser.email}</td>
                    <td className="border-2 border-black p-2 text-center">{curUser.phone}</td>
                    <td className="text-center border-2 border-black p-2 hover:bg-red-100"><Link  to={`/update/${curUser._id}`}> Edit</Link> </td>
                    <td className="border-2 border-black p-2 text-center"><button onClick={()=>deleteUser(curUser._id)} className="bg-red-100 border-2 border-black p-1 rounded-md">Delete</button></td>
                    </tr>)

              })
            }

            </tbody>
        </table>
        <div className="flex flex-col justify-center items-center">
            <a href="/home"><button className="text-xl bg-black text-white rounded-lg p-2 mt-3 ">Home</button></a>
        </div>
     </div>
     
 </>
}