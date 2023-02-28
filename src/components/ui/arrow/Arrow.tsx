import React,{useRef,useEffect,useState} from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import {IconType} from 'react-icons'
import './arrow.css'


interface start_icon_props {
    arrowEventState: boolean,
    icon: IconType,
    left:string,
    top:string,
    text:string
}

export function Arrow(props:start_icon_props):JSX.Element{
    const iconRef = useRef<HTMLDivElement>(null);
    //const [eventState,setEventState] =  useState("estado inicial");


    function hideIcon():void{
        if(iconRef.current !== null){
            iconRef.current.classList.add("hide-icon")
        }
    }

    function showIcon():void{
        if(iconRef.current !== null){
            iconRef.current.classList.remove("hide-icon")
        } 
    }

    useEffect(()=>{
        if(props.arrowEventState && iconRef.current !== null){
            console.log("show icon")
            iconRef.current.style.left = props.left;
            iconRef.current.style.top = props.top;

            showIcon();
            

        }else{

            hideIcon();
        }

    },[props.arrowEventState])

    

    return(
        <div className="container-icon" ref={iconRef} >
            <h2 className="text-icon">{props.text}</h2>
            <props.icon  />
            
        </div>
    )
}