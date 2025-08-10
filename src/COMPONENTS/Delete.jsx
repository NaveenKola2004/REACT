import { useState } from "react";

const DELETE=()=>{
    const[id,setid]=useState("")

    const handledelete=(e)=>{
        e.preventDefault();

        const confirm=window.confirm("ARE YOU SURE")

        fetch(`http://localhost:5000/del/${id}`,{
            method:"DELETE"
        })
        .then((response)=>{
            if(!response.ok){
                if(response.status===500){
                    alert("empty data")
                    setid("")
                }
                else if(response.status===404){
                    alert("Faild to delete")
                    setid("")
                }
                else{
                    alert("check data once")
                }
                throw new Error("deleted faild")
            }
            return response.json()
        })
        .then(()=>{
        alert("sucessfully deleted")
        setid("")
        })
        .catch((error)=>{
            alert("something went wrong")
            setid("")
        })
    }
    return(
        <div>
            <form onSubmit={handledelete}>
                <input 
               type="number"
               id="id"
               value={id}
               placeholder="Enter the id"
               required
               onChange={(e)=>setid(e.target.value)}
                />
                <button type="submit">DELETE</button>
            </form>
        </div>
    )
}

export default DELETE;