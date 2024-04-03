export const Home=()=>{
    return <>
    <div className="container mx-auto h-screen justify-center m-4 items-center text-center">
      <div className="shadow-lg w-auto rounded-2xl bg-gray-500 text-center justify-center flex flex-col m-6 p-10">
      <div>
        <h1 className="text-xl text-black uppercase font-bold font-serif underline">Welcome to Contact Manager</h1>
        <p className="mt-4 text-white capitalize">Here we provide great features to you so that you can manage your contact easily. <br />You can create contact or you can delete or update your contact list</p>
      </div>
      <div className="mt-10 flex  justify-center items-center">
         <a href="/contact"><button className="text-xl bg-indigo-500 text-black m-3 p-2 rounded-lg border-2 border-white">Create Contact</button></a>
         <a href="/getcontact"><button className="text-xl bg-indigo-500 text-black m-3 p-2 rounded-lg border-2 border-white">Get Contact</button></a>
         
      </div>
      <div className="flex  justify-center items-center">
      <a href="/logout"><button className="text-xl mx-auto">/logout</button></a>
      </div>
      </div>

    </div>

    </>
}