import { useState } from "react";
import './form.css'
const Delete=()=>{
    const[id,setid]=useState("")

    const handledelete=(e)=>{
        e.preventDefault();
        if(!id){
            alert("please enter the id")
        }
        const confirm=window.confirm("are you sure")
        if(!confirm) return;

        fetch(`http://localhost:5000/del/${id}`,{
            method:'DELETE'
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error("Faild to fetch the data")
            }
            alert(`sucessfully id ${id} deleted`)
        })
        .catch((error)=>{
            alert("record may not exist")
            setid("")
        })
    }
    return(
        <div>
            <form onSubmit={handledelete} className="form">
                <input 
                type="number"
                name="id"
                placeholder="Enter the id "
                value={id}
                onChange={(e)=>setid(e.target.value)}
                />
                <button type="submit">DELETE</button>
            </form>
        </div>
    )
}

export default Delete;