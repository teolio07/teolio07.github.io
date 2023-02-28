import React, {useRef,useState,useEffect} from "react";
import { Title } from "../../ui/title/Title";

import './aside.css'
interface aside_props{
    state:boolean,
    stateColor:boolean
}
export function Aside(props:aside_props):JSX.Element{
    const asideRef = useRef<HTMLElement>(null);
    //const firtsBtnHeaderRef = useRef<HTMLLIElement>(null);
    //const secondBtnHeaderRef = useRef<HTMLLIElement>(null);


    function hideAside():void{
        if(asideRef.current !== null){
            asideRef.current.classList.add("hide_aside_container")

        }
    }

    function showAside():void{
        if(asideRef.current !== null){
            asideRef.current.classList.remove("hide_aside_container")
        } 
    }

/*     function greenColorBtnHome():void{
        if(firtsBtnHeaderRef.current !== null && secondBtnHeaderRef.current !== null){
            firtsBtnHeaderRef.current.classList.add("green_colorBtnHome");

            secondBtnHeaderRef.current.classList.remove("green_colorBtnProfile");

        }
    }

    function greenColorBtnProfile():void{
        if(firtsBtnHeaderRef.current !== null && secondBtnHeaderRef.current !== null){
            secondBtnHeaderRef.current.classList.add("green_colorBtnProfile");
            firtsBtnHeaderRef.current.classList.remove("green_colorBtnHome");

            //secondBtnHeaderRef.current.classList.remove("green_colorBtnHome");

        }
    } */

    useEffect(()=>{
        if(props.state){
            if(props.stateColor){
                //greenColorBtnHome();

            }else{
                //greenColorBtnProfile();

            }
            showAside();
            console.log("show from aside ajaj")


        }else{
            hideAside();
            console.log("hide from aside ajaj")
        }
    },[props.state,props.stateColor])

    return(
        <aside className="hide_aside_container" ref={asideRef}>
            <nav className="nav_aside">
                <ul>
                    <h2>Personal projects, press the number</h2>
                    <li>
                       1. Terminal in angular
                    </li>
                    <li>
                       2. API NodeJS and Typescript
                    </li>
                    <li>
                       3. Practice exercises
                    </li>
                </ul>
            </nav>
        </aside>
    )
}