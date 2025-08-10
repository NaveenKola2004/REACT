import { useState } from "react";

const Update=()=>{
    const[id,setid]=useState("")
    const[formdata,setformdata]=useState({
        name:""
    })

    const handlechange=(e)=>{
        setformdata(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const handleupdate=async(e)=>{
        e.preventDefault();

        const confirm=window.confirm("are you sure")

        const res=await fetch(`http://localhost:5000/up/${id}`,{
            method:"PUT",
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(formdata)
        })
        if(!res.ok){
            if(res.status===500){
                alert("data is empty")
                setid("")
            }
            else if(res.status===409){
                alert("faild to update")
            }
            else{
                alert("check it once")
            }
            return;
        }
        const data=await res.json()
        alert("Sucessfully updated")
        setid("")
        setformdata({name:''})
        // .catch((error)=>{
        //     alert("something went to wrong")
        //     setid("")
        // })
    }
    return(
        <form onSubmit={handleupdate}>
            <input 
            type="text"
            name="name"
            value={formdata.name}
            onChange={handlechange}
            placeholder="enter the name"
            required
            />
            <input 
            type="number"
            name="id"
            value={id}
            onChange={(e)=>setid(e.target.value)}
            placeholder="enter the id"
            />
            <button type="submit">UPDATE</button>
        </form>
    )
}
export default Update;