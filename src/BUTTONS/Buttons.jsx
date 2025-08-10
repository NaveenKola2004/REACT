import { act, useState } from "react";
import Data_Display from "../Components/GET";
import AddUser from "../Components/POST";
import DELETE from "../COMPONENTS/Delete";
import FIND from "../COMPONENTS/Find";
import Update from "../Components/UPDATE";
function Buttons(){
    const[activepage,setactivepage]=useState("home")
    return(
        <div>
            <div>
                <button onClick={()=>setactivepage("data")}>DATA</button>
                <button onClick={()=>setactivepage("add")}>ADD DATA</button>
                <button onClick={()=>setactivepage("del")}>DELETE</button>
                <button onClick={()=>setactivepage("find")}>FIND</button>
                <button onClick={()=>setactivepage("update")}>UPDATE</button>
            </div>
            <div>
                {activepage==="data"&&<Data_Display />}
                {activepage==="add"&&<AddUser />}
                {activepage==="del"&&<DELETE />}
                {activepage==="find"&&<FIND />}
                {activepage==="update"&&<Update />}
            </div>
        </div>
    )
}
export default Buttons;