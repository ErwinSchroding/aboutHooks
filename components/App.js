import React, { useEffect, useMemo, useState } from "react";
var children = "gnar gner"
export default function App(){
    
    const word = "gner"
    
    console.log("Render App",children)
    const words = useMemo(()=>{
        
        const words = children.split(" ")
        console.log(words)
        return words 
    },[children])
    useAnyKeyToRender();
    useEffect(()=>{
        console.log("App useEffect")
    },[words])
    const changeWords = (string)=>{
        console.log("click change words")
        string = string + " gnar"

    }
    return (
        <> 
            <h1>hello react</h1>
            <button onClick={()=>{changeWords(children)}}>change words</button>
            <button onClick={()=>{console.log("children:",children)}}>logChildren</button>
        </>
       
    )
}

const useAnyKeyToRender=()=>{
    const [,forceRender] = useState();

    useEffect(()=>{
        window.addEventListener("keydown",forceRender)
        return ()=>window.removeEventListener("keydown",forceRender)
    },[])
}