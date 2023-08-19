
export default function Download(props){
    return(
        <div>
            <h4>{props.title}</h4>
            <div>
                <iframe src={props.confirm} frameBorder={0} title="hello" style={{width:"100%",height:"500px"}}/>
            </div>
            
        </div>
    )
}