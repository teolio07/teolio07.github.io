import React,{useState,useEffect,useRef} from 'react';
import './description.css'
interface description_props{
    state:boolean
}

export function Description (props:description_props):JSX.Element{
    const descriptionRef = useRef<HTMLDivElement>(null);
    //const firtsBtnHeaderRef = useRef<HTMLLIElement>(null);
    //const secondBtnHeaderRef = useRef<HTMLLIElement>(null);


    function hideDescription():void{
        if(descriptionRef.current !== null){
            descriptionRef.current.classList.add("hide_description_container")

        }
    }

    function showDescription():void{
        if(descriptionRef.current !== null){
            descriptionRef.current.classList.remove("hide_description_container")
        } 
    }


    useEffect(()=>{
        if(props.state){
            showDescription();
            console.log("show from description ajaj")


        }else{
            hideDescription();
            console.log("hide from description ajaj")
        }
    },[props.state])
    return(
        <div className='description_container' ref={descriptionRef}>
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos alias rerum nemo dignissimos explicabo eum quae laborum eligendi dolor impedit, reprehenderit ipsam. Rerum reiciendis, repudiandae earum voluptatem dignissimos odit.</p>
        </div>
    )
}