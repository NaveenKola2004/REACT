import {useEffect, useState } from "react";
import'./GET.css'
const Data_Display=()=>{
    const[data,setdata]=useState([])
    const[loading,setloading]=useState(false)
    const[error,seterror]=useState(null)

    useEffect(()=>{
        fetch ("http://localhost:5000/data")

        .then((response)=>{
            if(!response.ok){
                throw new Error("faild to fetch the data")
            }
            return response.json()
        })
        .then((data)=>{
            setdata(data)
            setloading(false)
        })
        .catch((err)=>{
            seterror(err.message)
            setloading(false)
        })
    },[])
    if(loading) return <p>LOADing....</p>
    if(error) return <p>Error : {error}</p>
    return(
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
    )
}

export default Data_Display;