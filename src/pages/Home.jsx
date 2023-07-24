import {Typography,Avatar,Toolbar,AppBar,IconButton,Paper} from "@mui/material"
import {Menu , ForwardRounded} from "@mui/icons-material"

import head from "./head.png"
import SimpleBottomNavigation from "../components/bottomnav"
export default function Home(){
    return(
        <div>
            <AppBar position="fixed" sx={{backgroundColor:"transparent",boxShadow:"none",}}>
                <Toolbar>
                    <div style={{width:"100%"}}>
                        <IconButton sx={{backgroundColor:"black"}}>
                            <Menu sx={{color:"white",backgroundColor:"black",borderRadius:"360px",height:"30px",width:"30px"}}/>
                        </IconButton>
                    </div>

                    <IconButton>
                        <Avatar  sx={{width:"35px",height:"35px"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div className="body" style={{marginTop:"75px",marginLeft:"10px",marginRight:"20px"}}>
                <Typography variant="h5" sx={{fontWeight:"bold"}}>Welcome,</Typography>
                <Typography variant="h7" sx={{fontWeight:"bold",color:"gray"}}>My Fashion App</Typography>

                <div className="searchField" style={{marginTop:"20px",marginBottom:"20px"}}>
                    <input type="text" style={{width:"100%",height:"40px",borderRadius:"20px",border:'solid',borderWidth:"1px",borderColor:"lightgray",backgroundColor:"lightgray",fontFamily:"Quicksand",fontSize:"18px",textAlign:"center"}} placeholder="Search..."/>
                </div>
            </div>

            <div className="homeProductDisplay" style={{margin:"10px",}}>
                <Paper sx={{height:"80px",display:"flex"}}>
                    <img src={head} alt=""  style={{width:"auto",height:"78px",marginLeft:"10px"}}/>

                    <div style={{width:"100%",alignItems:"start",justifyContent:"end",display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                        <Typography>Dre Beats</Typography>
                        <Typography>Black & Red</Typography>
                        <Typography>M234</Typography>
                    </div>

                    <div style={{alignItems:"center",justifyContent:"center",display:"flex",margin:"5px"}}>
                        <ForwardRounded/>
                    </div>
                </Paper>

                <div style={{marginTop:"20px"}}>
                    <Typography variant="h6">Categories</Typography>
                    <br />
                    <div className="chips" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                        <div className="chip">
                            <p>Dress</p>
                        </div>

                        <div className="chip">
                            <p>Jackets</p>
                        </div>

                        <div className="chip">
                            <p>Jeans</p>
                        </div>

                        <div className="chip">
                            <p>Shoes</p>
                        </div>
                    </div>
                    <br />
                    
                    <div className="categories">
                    
                    </div>
                </div>
            </div>

            <div className="footer">
                <SimpleBottomNavigation/>
            </div>
        </div>
    )
}