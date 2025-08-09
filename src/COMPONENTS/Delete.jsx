import { useState } from "react";
import './form.css'
const Delete=()=>{
    const[id,setid]=useState("")

    const handledelete=(e)=>{
        e.preventDefault();
        const confirm=window.confirm("are you sure")
        if(!confirm) return;

        fetch(`http://localhost:5000/del/${id}`,{
            method:"DELETE"
        })
        .then((response)=>{
            if(!response.ok){
                if(response.status===500){
                    alert("Empty data")
                    setid("")
                }
                else if(response.status===404){
                    alert("Error in this code")
                }
                return ;
            }
            alert("sucessfully deleted ")
            setid("")
        })
        .catch((err)=>{
            alert("something went wrong"+err)
            setid("")
        })
    }
    return(
        <div>
            <form onSubmit={handledelete}>
                <input 
                type="number"
                name="id"
                value={id}
                placeholder="Enter the id"
                onChange={(e)=>setid(e.target.value)}
                required
                />
                <button type="submit">DELETE</button>
            </form>
        </div>
    )
}
export default Delete;