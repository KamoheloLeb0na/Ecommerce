import data from "/home/kamohelo/Desktop/ILL BE OFFLINE FOR A WHILE/Maths/src/data/lgcsepaper2"
import { IconButton , Paper , } from "@mui/material"
import { ArrowBackIosRounded } from "@mui/icons-material"
import React from "react"
import face from "/home/kamohelo/Desktop/ILL BE OFFLINE FOR A WHILE/Maths/src/Thumbnails/lgcseface.png"
import Download from "./DownloadLgcse"

export default function Paper2(){
    const [download , setDownload] = React.useState(false)
    const [file , setFile ] = React.useState({
        dir:"",
        name:""
    })

    const triggerDownloadPage = (location , name) => {
        setDownload(true)
        setFile(
            (file) => ({
                ...file,
                dir : location,
                name : name
            })
        )
    }
    return(

        <div>
            <h1 style={{position:"fixed",left:10,top:0,marginBottom:"60px"}}>Math Paper 2 LGCSE</h1>

            {
                download ?
                <div style={{display:"flex",alignItems:"center",marginTop:"60px"}}>
                    <IconButton sx={{color:"black"}} href="/lgcsepaper2">
                        <ArrowBackIosRounded/>
                       <p style={{fontSize:"14px"}}>Back</p>
                    </IconButton>
                </div>
                    :
                <div style={{display:"flex",alignItems:"center",marginTop:"60px"}}>
                    <IconButton sx={{color:"black"}} href="/papers">
                        <ArrowBackIosRounded/>
                        <p style={{fontSize:"14px"}}>Back</p>
                    </IconButton>
                </div>
            }
            {
                download ? 
                <Download title={file.name}  confirm={file.dir}/> : 
                <>
                    <div>
                        {
                            data.map((paper) => {
                                return(
            
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"10px"}} onClick={()=>triggerDownloadPage(paper.dir,paper.title)}>
                                        {            
                                            <Paper sx={{width:"100%"}} >
                                                <img src={face} alt="Thumbnail" style={{width:"50%",height:"50%"}}/>
                                                <p style={{textAlign:"center",fontWeight:"bolder"}}>{paper.title}</p>
                                            </Paper>
                                        }

                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            }
        </div>
    )
}