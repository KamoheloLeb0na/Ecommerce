
import React from "react";
import {remove} from "./feature/RemoveSplash"
import { useSelector , useDispatch } from "react-redux";
import Skeleton from "./skeleton/skeleton";
export default function Load(){

  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const dispatch = useDispatch()
  
  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        dispatch(remove({"remove":false}))
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
    return(
      <>
        <h1>Fetching List...</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:'center',width:"100%"}}>
            <Skeleton/>
        </div>
      </>
    )
}