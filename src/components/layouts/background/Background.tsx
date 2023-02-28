import React, {useRef,useEffect,useState} from "react";
import "./background.css";
import {Arrow} from '../../ui/arrow/Arrow';
import {Title} from '../../ui/title/Title';
import { FaArrowCircleRight,FaArrowCircleLeft,FaArrowCircleDown,FaArrowCircleUp } from "react-icons/fa";



interface BackgroundProps {
    headerEventSate: (state:boolean)=>void,
    headerEventStateColor:(colorState:boolean)=>void,
    //asideEventStateColor:(colorState:boolean)=>void,
    asideEventState:(state:boolean)=>void,
    descriptionEventState:(state:boolean) => void

}

export function Background(props:BackgroundProps):JSX.Element {
    type booleanSets = [boolean,boolean,boolean,boolean];
  
    const videoRef = useRef<HTMLVideoElement>(null);
    const layerRef = useRef<HTMLDivElement>(null);

    

    const [stateEvent,setStateEvent] = useState<booleanSets>([true,false,false,false]); //arrow position
    const [page,setPage] = useState<number>(0);
    const [titleState,setTitleState] = useState<boolean>(true);
    

    function play():void{
        if(videoRef.current !== null){
            videoRef.current.play();
        }
        setTimeout(()=>{
            
            if(videoRef.current !== null){
                
                stop();
            }
        },4500)
    } 

    function stop():void {
        if (videoRef.current !== null) {
            videoRef.current.pause();
         }
    } 

    function backStart():void{
        let restCurrentTime:number
        if(videoRef.current !== null){
            while (videoRef.current.currentTime >0) {
                restCurrentTime =  videoRef.current.currentTime - 0.005;
                videoRef.current.currentTime = restCurrentTime
            }
            stop();
            
        }
    }

    function backMiddle():void{
        let restCurrentTime:number
        if(videoRef.current !== null){
            while (videoRef.current.currentTime > 4.500000 ) {
                restCurrentTime =  videoRef.current.currentTime - 0.005;
                videoRef.current.currentTime = restCurrentTime
            }
            stop();
            
        }
    }

    function setArrowEvent(dataEvent:booleanSets):void{
        setStateEvent(dataEvent)
    }

    function setHeaderEvent(state:boolean):void{
        props.headerEventSate(state);
    }

    function setColorBtnHeader(stateColor:boolean){
        props.headerEventStateColor(stateColor)
    }

   /*  function setAsideBtnColor(state:boolean):void{
        props.asideEventStateColor(state);
    } */

    function setAsideEvent(state:boolean):void{
        props.asideEventState(state);
    }

    function setDescriptionEvent(state:boolean):void{
        props.descriptionEventState(state) 

    }

    
    useEffect(()=>{
        if(videoRef.current !== null  && layerRef.current !== null ){
            videoRef.current.focus();
            layerRef.current.focus();
        }
        
    },[])

   
    
    return(
        <div className="background-container">
            <video id="video" tabIndex={1}  ref={videoRef}  src="./video.mp4">

            </video>
            <div className="layer" tabIndex={0} ref={layerRef} onKeyDown={(e)=>{
                
                if(e.key == 'ArrowRight' || e.key == 'd' || e.key == 'D'){
                    if(page == 0){
                        play();
                        setPage(1);
                        setArrowEvent([false,true,true,false]);
                        setTitleState(false);
                        setHeaderEvent(true);
                        setColorBtnHeader(true);
                        setAsideEvent(true);
                    }

                }else if(e.key == 'ArrowDown' || e.key == 's' || e.key == 'S'){
                    if(page==1){
                        play();
                        setPage(2);
                        setArrowEvent([false,false,false,true]);
                        setColorBtnHeader(false);
                        setAsideEvent(false);
                        setDescriptionEvent(true);

                    }

                }else if(e.key == 'ArrowUp' || e.key == 'w' || e.key == 'W'){
                    if(page == 2){
                        backMiddle();
                        setPage(1);
                        setArrowEvent([false,true,true,false]);
                        setColorBtnHeader(true);
                        setAsideEvent(true);
                        setDescriptionEvent(false);

                    }


                }
                else if(e.key == 'ArrowLeft' || e.key == 'a' || e.key == 'A'){
                    if(page == 1){
                        backStart();
                        setPage(0);
                        setArrowEvent([true,false,false,false]);
                        setTitleState(true);
                        setHeaderEvent(false);
                        setAsideEvent(false);

                    }
    

                }
                
                }}>
            </div>
            <Title title={"Developer portfolio"} top={"10vh"} left={"35vw"} fontSize={"4vh"} titleEventState={titleState}/>
            <Arrow arrowEventState={stateEvent[0]} icon={FaArrowCircleRight} left={"92vw"} top={"32vh"} text={"Go home"}/>
            <Arrow arrowEventState={stateEvent[1]} icon={FaArrowCircleLeft} left={"0.5vw"} top={"30vh"} text={"Go back"}/>
            <Arrow arrowEventState={stateEvent[2]} icon={FaArrowCircleDown} left={"48vw"} top={"82vh"} text={"Go profile"}/>
            <Arrow arrowEventState={stateEvent[3]} icon={FaArrowCircleUp} left={"0.5vw"} top={"30vh"} text={"Go back home"}/>
        </div>
    )
}

