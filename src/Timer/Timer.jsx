
import { useSelector } from "react-redux"

import { useRef, useState,useEffect } from "react"
import { Diversity1Sharp } from "@mui/icons-material"
export default function Timer(){
  
  const[timerDays,setTimerDays] = useState("00")
  const[timerHours,setTimerHours] = useState("00")
  const[timerMinutes,setTimerMinutes] = useState("00")
  const[timerSeconds,setTimerSeconds] = useState("00")
  let interval = useRef()

  const startTimer =() => {
    const countDownDate = new Date("October 22 , 2023 08:30:00").getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      const days = Math.floor(distance / (1000 * 60 *60 *24))
      const hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 *60))
      const minuts = Math.floor((distance % (1000 * 60 *60 )) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60 ) / 1000))

      if(distance < 0){
        clearInterval(interval.current)
      }else{
        setTimerDays(days.toString())
        setTimerHours(hours.toString())
        setTimerMinutes(minuts)
        setTimerSeconds(seconds.toString())
      }
    },1000)
  };

  useEffect(() => {
    startTimer()
    return () => {
       clearInterval(interval.current)
    }
  })

  return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <h1>Count Down Timer!</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

        <div>
            <p style={{fontWeight:"bolder"}}>Days</p>
            <div  style={{display:"flex",alignItems:"center"}}>
            <h1 style={{fontSize:"40px"}} className="code">{timerDays}</h1>
            <div style={{width:"5px"}}></div>
            <h3>:</h3>
            <div style={{width:"5px"}}></div>
            </div>
        </div>

        <div>
            <p style={{fontWeight:"bolder"}}>Hours</p>
            <div style={{width:"5px"}}></div>
            <div  style={{display:"flex",alignItems:"center"}}>
            <h1 className="code" style={{fontSize:"40px"}}>{timerHours}</h1>
            <div style={{width:"5px"}}></div>
            <h3>:</h3>
            <div style={{width:"5px"}}></div>
            </div>
        </div>
        <div style={{width:"10px"}}></div>
        <div>
            <p style={{fontWeight:"bolder"}}>Minutes</p>
            <div style={{width:"80px"}}></div>
            <div  style={{display:"flex",alignItems:"center"}}>
            <h1 className="code" style={{fontSize:"40px"}}>{timerMinutes}</h1>
            <div style={{width:"5px"}}></div>
            <h3>:</h3>
            <div style={{width:"5px"}}></div>
            </div>
        </div>

        <div>
            <p style={{fontWeight:"bolder"}}>Seconds</p>
            <div  style={{display:"flex",alignItems:"center"}}>
            <h1 className="code" style={{fontSize:"40px"}}>{timerSeconds}</h1>
            
            </div>
        </div>
        
        </div>
    </div>
  )
}