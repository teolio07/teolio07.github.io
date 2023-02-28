import React, {useRef,useState,useEffect} from "react"
import { BooleanLiteral } from "typescript"
import './header.css'
interface header_props{
    state:boolean,
    stateColor:boolean
}
export function Header(props:header_props):JSX.Element{
    const headerRef = useRef<HTMLElement>(null);
    const firtsBtnHeaderRef = useRef<HTMLLIElement>(null);
    const secondBtnHeaderRef = useRef<HTMLLIElement>(null);


    function hideHeader():void{
        if(headerRef.current !== null){
            headerRef.current.classList.add("hide_header_container")

        }
    }

    function showHeader():void{
        if(headerRef.current !== null){
            headerRef.current.classList.remove("hide_header_container")
        } 
    }

    function greenColorBtnHome():void{
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
    }

    useEffect(()=>{
        if(props.state){
            if(props.stateColor){
                greenColorBtnHome();
                console.log("true desde setcolor header")

            }else{
                greenColorBtnProfile();
                console.log("false desde setcolor header")

            }
            showHeader();
            console.log("useEffect desde header")

        }else{
            hideHeader();
        }
    },[props.state,props.stateColor])

    return(
        <header className="hide_header_container" ref={headerRef}>
            <nav className="nav">
                <ul>
                    <li ref={firtsBtnHeaderRef}>
                        Home
                    </li>
                    <li ref={secondBtnHeaderRef}>
                        Profile
                    </li>
                </ul>
            </nav>
        </header>
    )
}