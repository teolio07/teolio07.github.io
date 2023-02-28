import React, {useRef,useState,useEffect} from "react";
import './title.css'
interface title_props{
    titleEventState:boolean,
    title:string,
    fontSize:string,
    top:string,
    left:string
}

export function Title(props:title_props):JSX.Element{
    const titleRef = useRef<HTMLDivElement>(null);

    function hideTitle():void{
        if(titleRef.current !== null){
            titleRef.current.classList.add("hide-title")
        }
    }

    function showTitle():void{
        if(titleRef.current !== null){
            titleRef.current.classList.remove("hide-title")
        } 
    }


    useEffect(()=>{
        if(props.titleEventState && titleRef.current !== null){
            titleRef.current.style.left = props.left;
            titleRef.current.style.top = props.top;
            titleRef.current.style.fontSize = props.fontSize;

            

            showTitle();
            

        }else{
            hideTitle();
        }

    },[props.titleEventState])

  


    return(
        <div className="title_container" ref={titleRef} >
            <h2>{props.title}</h2>
        </div>
    )
}