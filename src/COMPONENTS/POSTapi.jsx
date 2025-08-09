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
    const handlesubmit=async (e)=>{
        e.preventDefault();

        if(!formdata.id||!formdata.name){
            alert("Enter the data")
        return ;
        }

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
            }
            else if(res.status===500){
                alert("error")
            }
            return res.json();
        }
        const data=await res.json()
        alert("sucessfully entred")
        setformdata({id:"",name:""})
        .catch((error)=>{
            alert("something went wrong"+error)
            setformdata({id:"",name:""})
        })
    }

    return(
        <form onSubmit={handlesubmit}>
            <input
            type="number"
            name="id"
            value={formdata.id}
            placeholder="enter the id"
            onChange={handlechange}
            required
            />
            <input
            type="text"
            name="name"
            value={formdata.name}
            placeholder="enter the id"
            onChange={handlechange}
            required
            />
            <button type="submit">Add</button>
        </form>
    )
}
export default AddUser;