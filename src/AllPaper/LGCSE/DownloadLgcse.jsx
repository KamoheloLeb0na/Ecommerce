
import Loading from "../Loading/Loading"
import { useSelector } from "react-redux"

export default function Download(props){
    const state = useSelector((state) => state.remove.value)
    return(
        <div>
            <h4>{props.title}</h4>
            {
                state.remove ? 
                <Loading/>
                :
                <div>
                    <iframe src={props.confirm} frameBorder={0} title="hello" style={{width:"100%",height:"500px"}}/>
                </div>
            }
            
        </div>
    )
}