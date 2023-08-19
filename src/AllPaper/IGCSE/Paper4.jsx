import Download from "../LGCSE/DownloadLgcse";
import { IconButton } from "@mui/material";
import { ArrowBackIosRounded } from "@mui/icons-material";
import paper from "/home/kamohelo/Desktop/ILL BE OFFLINE FOR A WHILE/Maths/src/Papers/notes/IGCSE Topical Past Papers Math P4.pdf"
export default function IGCSEPaper4(){
    return(
        <div>
            <h1>IGCSE Topical Questions Paper4 <small>(compilation)</small></h1>
            <div style={{display:"flex",alignItems:"center"}}>
                    <IconButton sx={{color:"black"}} href="/papers">
                        <ArrowBackIosRounded/>
                       <p style={{fontSize:"14px"}}>Back</p>
                    </IconButton>
            </div>
            <Download title="IGCSE Topical Questions Paper4" confirm={paper} />
        </div>
    )
}