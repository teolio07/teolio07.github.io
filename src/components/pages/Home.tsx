import React, {useState} from 'react';
import {Background} from '../layouts/background/Background';
import {Header} from '../layouts/header/Header';
import {Aside}  from '../layouts/aside/Aside';
import { Description } from '../layouts/description/Description';
import './home.css';


interface HomeProps{

}

export function Home (props:HomeProps):JSX.Element{
    const [headerState,setHeaderState] = useState<boolean>(false);
    const [stateColor,setStateColor] = useState<boolean>(true);
    const [asideEventState,setAsideEventState] = useState<boolean>(false);
    const [descriptionEventState,setDescriptionEventState] = useState<boolean>(false);


    return(
        <div className='container-home'>
            <Header state={headerState} stateColor={stateColor}/>
            <Background 
                headerEventSate={(state)=>{
                setHeaderState(state);
   
            }}  headerEventStateColor={(stateColor)=>{
                setStateColor(stateColor);
                
            }}  
                asideEventState={(state)=>{
                    setAsideEventState(state)
                }} 
                
                descriptionEventState={(state)=>{setDescriptionEventState(state)}}
            />
            <Description state={descriptionEventState}/>

            <Aside state={asideEventState} stateColor={false}/>
        </div>
    )
}