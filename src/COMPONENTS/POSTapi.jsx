import { useState } from "react";
import './form.css'
const AddUser=()=>{
    const [formdata,setformdata]=useState({
        id:'',
        name:''
    })

    const handlechange=(e)=>{
        setformdata(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();

        if(!formdata.id||!formdata.name){
            alert("Fill the all data")
        }
        try{
            const res=await fetch("http://localhost:5000/data/add",{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(formdata)
            })
            const data=await res.json()
            alert("sucessfully entred the data")
            setformdata({id:'',name:''})
        }
        catch(error){
            alert("something went wrong")
        }
    }

    return(
        <form onSubmit={handlesubmit} className="form">
            <input 
            type="number"
            name="id"
            placeholder="Enter the id"
            value={formdata.id}
            onChange={handlechange}
            />
            <input 
            type="text"
            name="name"
            placeholder="Enter the name"
            value={formdata.name}
            onChange={handlechange}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddUser;