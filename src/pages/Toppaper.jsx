import { Card , CardContent , CardMedia,Grid,IconButton} from "@mui/material"
import data from "../data/lgcsepaper4"
import { ArrowBackIosRounded } from "@mui/icons-material"
import face from "../Thumbnails/lgcseface.png"
import Download from "../AllPaper/LGCSE/DownloadLgcse"
import React from "react"

export default function Toppapers(){
    const [download,setDownload] = React.useState(false)
    const [details , setDetails ] = React.useState({
        dir : "",
        title :""
    })

    const showDownloadPage = (dir , title) => {
        setDownload(true)
        setDetails(
            (detail) => ({
                ...detail,
                dir : dir,
                title : title
            })
        )
    }

    const Top = data.map((paper) => {
        return(
            <Grid item xs={6}>         
            <Card onClick={() => showDownloadPage(paper.dir , paper.title)}>
                <CardMedia>
                    <img src={face} alt="face" style={{width:"110%",height:"110%"}}/>
                </CardMedia>
                <CardContent>{paper.title}</CardContent>
            </Card>
            </Grid>
        )
    })
    
    return(
        <div>
            <div style={{display:"flex",alignItems:"center"}}>
            {
              download &&  
              <IconButton sx={{color:"black"}} onClick={() => setDownload(false)}>
                    <ArrowBackIosRounded/>
                    <p style={{fontSize:"14px"}}>Back</p>
                </IconButton>
            }
            </div>
            {
                download ? 
                    <Download confirm={details.dir} title={details.title}/>
                    :
                    <Grid container spacing={1} marginBottom={10}>
                        {Top}
                    </Grid>
            }
        </div>
    )
}