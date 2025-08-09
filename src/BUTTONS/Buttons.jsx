import { act, useState } from "react";
import './button.css'
import Data_display from "../COMPONENTS/GETapi";
import AddUser from "../COMPONENTS/POSTapi";
import Delete from "../COMPONENTS/Delete";
import Find from "../COMPONENTS/Find";

export function Buttons(){
    const[activepage,setactivepage]=useState("buttons")

    return(
        <>
        <div  className="button-group">
            <button onClick={()=>{setactivepage("data")}}>DATA</button>
            <button onClick={()=>{setactivepage("add")}}>ADD DATA</button>
            <button onClick={()=>{setactivepage("delete")}}>DELETE</button>
            <button onClick={()=>{setactivepage("find")}}>Find</button>
            </div>
            <div className="content-area">
            {activepage==="add"&&<AddUser />}
            {activepage==="data"&&<Data_display />}
            {activepage==="delete"&&<Delete />}
            {activepage==="find"&&<Find />}
            </div>
        </>
    )
}