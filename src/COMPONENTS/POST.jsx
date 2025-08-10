import { useState } from "react";


const AddUser=()=>{
    const[formdata,setformdata]=useState({
        id:"",
        name:""
    })

    const handlechange=(e)=>{
        setformdata(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();

        const res=await fetch("http://localhost:5000/data/add",{
            method:"POST",
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(formdata)
        })
        if(!res.ok){
            if(res.status===409){
                alert("duplicate entry")
                setformdata({id:"",name:""})
            }
            else{
                alert("error to add data")
            }
            return;
        }
        const data=await res.json()
        alert("sucessfully added data")
        setformdata({id:"",name:""})
        .catch((error)=>{
            alert(`something went wrong ${error}`)
        })
    }

    return(
        <form onSubmit={handlesubmit}>
            <input 
            type="number"
            name="id"
            value={formdata.id}
            placeholder="Enter the id"
            onChange={handlechange}
            required
            />
            <input 
            type="text"
            name="name"
            value={formdata.name}
            placeholder="Enter the name"
            onChange={handlechange}
            />
            <button type="submit">ADD</button>
        </form>
    )
}
export default AddUser;