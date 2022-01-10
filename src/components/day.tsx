import React, {useState} from 'react';
import './day.css'

interface IDay{
    day: number;
    checked?: boolean
}

const Day = (props:IDay) =>{
    const [ isChecked, setIsChecked ] = useState(false);

    const cn = `${props.day < 9125 ? "day checked" : 'day'}`
    
    const handleCheck = () =>{
        setIsChecked(!isChecked);
        console.log(`props.day: ${props.day/365}`)
    }

    return(
        // <div onClick={handleCheck} className={`day ${isChecked ? "checked" : null}`}>{props.day}</div>
        // <div onClick={handleCheck} className={`day ${isChecked ? "checked" : null}`}></div>
        <div onClick={handleCheck} className={cn}></div>
    )
}   

export default Day;