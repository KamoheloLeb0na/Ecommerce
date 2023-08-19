import { List , ListItem , IconButton  } from "@mui/material"
import SimpleBottomNavigation from "../components/bottomnav"
import { ArrowBackIosRounded } from "@mui/icons-material"
import { Link } from "react-router-dom"

export default function Category(){
    const menu = ["LGCSE Paper 2" , "LGCSE Paper 4" , "Save My Exams Paper 2" , "Save My Exams Paper 4" , "IGCSE Topical Question Paper 2" , "IGCSE Topical Questions Paper 4",]
    return(
        <>
            <h1 style={{marginLeft:"10px"}}>Categories</h1>
            <div style={{display:"flex",alignItems:"center"}}>
                <IconButton sx={{color:"black"}} href="/">
                    <ArrowBackIosRounded/>
                    <p style={{fontSize:"14px"}}>Back</p>
                </IconButton>
            </div>
            <List>
                <Link to="/lgcsepaper2"><ListItem sx={{backgroundColor:"black",color:"white",borderRadius:"20px",marginBottom:"9px",height:"60px",fontSize:"18px",fontWeight:"bold"}} >LGCSE Paper 2</ListItem></Link>
                <Link to="/lgcsepaper4"><ListItem sx={{backgroundColor:"black",color:"white",borderRadius:"20px",marginBottom:"9px",height:"60px",fontSize:"18px",fontWeight:"bold"}}>LGCSE Paper 4</ListItem></Link>
                <Link to="/notes"><ListItem sx={{backgroundColor:"black",color:"white",borderRadius:"20px",marginBottom:"9px",height:"60px",fontSize:"18px",fontWeight:"bold"}}>Formula Sheets/Revision Notes</ListItem></Link>
                <ListItem sx={{backgroundColor:"black",color:"white",borderRadius:"20px",marginBottom:"9px",height:"60px",fontSize:"18px",fontWeight:"bold"}}>Topical Notes(coming soon...)</ListItem>
                <Link to="/igcsepaper2"><ListItem sx={{backgroundColor:"black",color:"white",borderRadius:"20px",marginBottom:"9px",height:"60px",fontSize:"18px",fontWeight:"bold"}}>IGCSE Topical Questions Paper 2 <small>(Compilation)</small></ListItem></Link>
                <Link to="/igcsepaper4"><ListItem sx={{backgroundColor:"black",color:"white",borderRadius:"20px",marginBottom:"9px",height:"60px",fontSize:"18px",fontWeight:"bold"}}>IGCSE Topical Questions Paper 4 <small>(Compilation)</small></ListItem></Link>
                <ListItem sx={{backgroundColor:"black",color:"white",borderRadius:"20px",marginBottom:"9px",height:"60px",fontSize:"18px",fontWeight:"bold"}}>Save My Exams Paper 2(Coming Soon...)</ListItem>
                <ListItem sx={{backgroundColor:"black",color:"white",borderRadius:"20px",marginBottom:"9px",height:"60px",fontSize:"18px",fontWeight:"bold"}}>Save My Exams Paper 4(Coming Soon...)</ListItem>
                <ListItem sx={{backgroundColor:"black",color:"white",borderRadius:"20px",marginBottom:"9px",height:"60px",fontSize:"18px",fontWeight:"bold"}}>Save My Exams MS 2(Coming Soon...)</ListItem>
                <ListItem sx={{backgroundColor:"black",color:"white",borderRadius:"20px",marginBottom:"9px",height:"60px",fontSize:"18px",fontWeight:"bold"}}>Save My Exams MS 4(Coming Soon...)</ListItem>
                
            </List>
            <br />
            <br />
            <br />
            <SimpleBottomNavigation/>
        </>
    )
}