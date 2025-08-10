import { useState } from "react";

const FIND=()=>{
    const[data,setdata]=useState([])
    const [loading,setloading]=useState(false)
    const [error,seterror]=useState(null)
    const[id,setid]=useState("")

    const getdata=(e)=>{
        e.preventDefault();
        setloading(false)
        seterror(null)
        fetch(`http://localhost:5000/data/${id}`)
        .then((response)=>{
            if(!response.ok){
                if(response.status===409){
                    alert("empty data")
                    setid("");
                }
                else if(response.status===500){
                    alert("Faild to get the data")
                    setid("");
                }
                else{
                    alert("something wrong")
                }
                throw new Error("check it once")
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
    }
    return(
        <div>
            <form onSubmit={getdata}>
                <input type="number"
                name="id"
                value={id}
                placeholder="enter id"
                onChange={(e)=>setid(e.target.value)}
                required
                />
                <button type="submit">GET</button>
                </form>
                {loading && <p>LOADING</p>}
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

export default FIND;