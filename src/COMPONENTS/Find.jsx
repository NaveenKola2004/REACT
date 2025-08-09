import { useState,useEffect } from "react";

const Find=()=>{
    const[data,setdata]=useState([])
    const[loading,setloading]=useState(false)
    const [error,seterror]=useState(null)
    const[id,setid]=useState("")

    const src=(e)=>{
        e.preventDefault();

        setloading(true)
        seterror(null)

        fetch(`http://localhost:5000/data/${id}`,{
        })
        .then((response)=>{
            if(!response.ok){
                if(response.status===409){
                    alert("empty data")
                }
                else if(response.status===500){
                    alert("error occured")
                }
                else{
                    alert("error in this ")
                }
            }
            return response.json()
        })
        .then((data)=>{
            setdata(data)
            setloading(false)
            setid("")
        })
        .catch((err)=>{
            seterror(err.message)
            setloading(false)
            setid("")
        })
    }
    if(loading) return <p>Loading....</p>
    if(error) return <p>Errro {error}</p>
    return(
        <div>
        <form onSubmit={src}>
            <input 
            type="search"
            name="id"
            value={id}
            placeholder="enter the id"
            onChange={(e)=>setid(e.target.value)}
            />
            <button type="submit">find</button>
            </form>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default Find;