import {Typography,Avatar,Toolbar,AppBar,IconButton,Paper} from "@mui/material"
import {Menu , ForwardRounded} from "@mui/icons-material"

import lgcseface from "../Thumbnails/lgcseface.png"
import SimpleBottomNavigation from "../components/bottomnav"
import { Link } from "react-router-dom"
import Toppapers from "./Toppaper"
export default function Home(){
    
    return(
        <div>
            <AppBar  sx={{backgroundColor:"white",boxShadow:"none",}}>
                <Toolbar>
                    <div style={{width:"100%"}}>
                        <p style={{color:"black"}}> <i>~Extended Maths~</i> </p>
                    </div>
                    <IconButton>
                        <Avatar  sx={{width:"35px",height:"35px"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div className="body" style={{marginTop:"75px",marginLeft:"10px",marginRight:"20px"}}>
                <div className="searchField" style={{marginTop:"20px",marginBottom:"20px"}}>
                    <input type="text" style={{width:"100%",height:"40px",borderRadius:"20px",border:'solid',borderWidth:"1px",borderColor:"lightgray",backgroundColor:"lightgray",fontFamily:"Quicksand",fontSize:"18px",textAlign:"center"}} placeholder="Search..."/>
                </div>
            </div>

            <div className="homeProductDisplay" style={{margin:"10px",}}>
                <Paper sx={{height:"80px",display:"flex"}}>
                    <img src={lgcseface} alt=""  style={{width:"60%",height:"60%",marginLeft:"10px"}}/>

                    <div style={{width:"100%",alignItems:"start",justifyContent:"center",display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                        <Typography>Paper 2</Typography>
                        <Typography>2022</Typography>
                    </div>

                    <div style={{alignItems:"center",justifyContent:"center",display:"flex",margin:"5px"}}>
                        <ForwardRounded/>
                    </div>
                </Paper>
                <br />
                <Paper sx={{height:"80px",display:"flex"}}>
                    <img src={lgcseface} alt=""  style={{width:"60%",height:"60%",marginLeft:"10px"}}/>

                    <div style={{width:"100%",alignItems:"start",justifyContent:"center",display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                        <Typography>Paper 4</Typography>
                        <Typography>2022</Typography>
                    </div>

                    <div style={{alignItems:"center",justifyContent:"center",display:"flex",margin:"5px"}}>
                        <ForwardRounded/>
                    </div>
                </Paper>

                <div style={{marginTop:"20px"}}>
                    <Typography variant="h6">Categories</Typography>
                    <br />
                    <div className="chips" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                        <Link to="/papers">
                        <div className="chip">
                            <p>Paper2</p>
                        </div></Link>

                        <Link to="/papers">
                        <div className="chip">
                            <p>Paper4</p>
                        </div>
                        </Link>

                        <Link to="/papers">
                        <div className="chip">
                            <p>Notes</p>
                        </div>
                        </Link>

                    </div>
                    <br />
                </div>


            <div className="Toppapers">
                <Typography variant="h6">Top Papers</Typography>
                <Toppapers/>
            </div>

            </div>

            <div className="footer">
                <SimpleBottomNavigation/>
            </div>
        </div>
    )
}