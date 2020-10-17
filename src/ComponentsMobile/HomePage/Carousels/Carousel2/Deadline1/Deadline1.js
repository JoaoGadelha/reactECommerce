import React, {useState, useEffect} from 'react'


const Deadline1 = () => {
    let [date,setDate] = useState(new Date());  

    

    useEffect(()=>{setInterval(() => setDate(new Date()), 1000);},[]);

    return (
        <div className='carousel2-deadline-container'>
            <div>
                <span>Today's offers!</span>
                <span>Everyday we have special products for you. But hurry, the clock is ticking!</span>
            </div>
            <div>
                    <p>These offers end in:</p>
                <span>{(23-date.getHours()>9?23-date.getHours():'0'+(23-date.getHours()).toString())}:{(59-date.getMinutes()>9?59-date.getMinutes():'0'+(59-date.getMinutes()).toString())}:{(59-date.getSeconds()>9?59-date.getSeconds():'0'+(59-date.getSeconds()).toString())}</span>
            </div>
        </div>
    )
}

export default Deadline1