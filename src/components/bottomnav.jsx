import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home , Book , Notifications, Opacity, Label  } from '@mui/icons-material';

const bottomNavStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
};

export default function SimpleBottomNavigation() {
  const window = localStorage.setItem("currentWindow",0)
  const [value, setValue] = React.useState(window);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={bottomNavStyle}
        sx={{boxShadow:"true",border:"solid",borderWidth:"1px",borderTopRightRadius:"30px",borderTopLeftRadius:"30px",borderColor:"white",backgroundColor:"white"}} // Apply the style here
      >
        <BottomNavigationAction  icon={<Home />}  href="/" label="Home" onClick={() => (localStorage.setItem("currentWindow",0),setValue(0))}/>
        <BottomNavigationAction icon={<Book/>} href="/papers" label="QuestionPapers" onClick={() => (localStorage.setItem("currentWindow",1),setValue(1))}/>
        <BottomNavigationAction icon={<Avatar sx={{width:"30px",height:"30px"}}/>} label="Profile" onClick={() => (localStorage.setItem("currentWindow",2),setValue(2))}/>
      </BottomNavigation>
    </Box>
  );
}
