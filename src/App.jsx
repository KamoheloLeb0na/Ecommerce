import { BrowserRouter , Routes , Route } from "react-router-dom"
import { Container ,LinearProgress , CircularProgress} from "@mui/material"
import React from "react"
import Skeleton from "./skeleton/skeleton"
import Home from "./pages/Home"
import AllPapers from "./pages/AllPapers"

import Paper2 from "./AllPaper/LGCSE/Paper2"
import Paper4 from "./AllPaper/LGCSE/Paper4"
import Igcsepaper4 from "./AllPaper/IGCSE/Paper4"
import NotesCollection from "./AllPaper/NotesCollection/NotesCollection"
import IGCSEPaper2 from "./AllPaper/IGCSE/Paper2"
import { useSelector } from "react-redux"

export default function App(){

  return(
    <div style={{width:"100%",overflowX:"hidden"}}>
      <Container sx={{display:{xs:"none",sm:"flex"}}}>
        <div style={{display:"flex",flexDirection:"column"}}>
          <code><h1>Website is only availible on Mobile and Tablet</h1></code>
          <code>If you really need it you could resize the window to be Tablet size</code>
        </div>
      </Container>
      
        <Container sx={{display:{sm:"none"}}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/lgcsepaper4" element={<Paper4/>}/>
            <Route path="/igcsepaper2" element={<IGCSEPaper2/>}/>
            <Route path="/igcsepaper4" element={<Igcsepaper4/>}/>
            <Route path="/lgcsepaper2" element={<Paper2/>}/>
            <Route path="/papers" element={<AllPapers/>}></Route>
            <Route path="/notes" element={<NotesCollection/>}/>
          </Routes>
        </BrowserRouter>
        
        </Container>

    </div>
  )
}