import {Typography,Avatar,TextField,Toolbar,AppBar,IconButton,BottomNavigation} from "@mui/material"
import {Menu,Search} from "@mui/icons-material"

export default function Home(){
    return(
        <div>
            <AppBar position="fixed" sx={{backgroundColor:"transparent",boxShadow:"none",marginTop:"20px"}}>
                <Toolbar>
                    <div style={{width:"100%"}}>
                        <IconButton sx={{backgroundColor:"black",width:"30px",height:"30px",}}>
                            <Menu sx={{color:"white"}}/>
                        </IconButton>
                    </div>

                    <IconButton>
                        <Avatar  sx={{width:"35px",height:"35px"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div className="body" style={{marginTop:"95px",marginLeft:"10px",marginRight:"20px"}}>
                <Typography variant="h5" sx={{fontWeight:"bold"}}>Welcome,</Typography>
                <Typography variant="h6" sx={{fontWeight:"bold",color:"gray"}}>Our Fashion App</Typography>

                <div className="searchField" style={{marginTop:"20px"}}>
                    <input type="text" style={{width:"100%",height:"40px",borderRadius:"20px",border:'solid',borderWidth:"1px",borderColor:"lightgray",backgroundColor:"lightgray"}} placeholder="     Search..."/>
                </div>
            </div>

            <div className="footer">
                <BottomNavigation>
                    <p>Hello</p>
                </BottomNavigation>
            </div>
        </div>
    )
}