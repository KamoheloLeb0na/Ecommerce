import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Avatar } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home , ShoppingCart , Notifications  } from '@mui/icons-material';

const bottomNavStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
};

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={bottomNavStyle}
        sx={{boxShadow:"true",border:"solid",borderWidth:"1px",borderTopRightRadius:"30px",borderTopLeftRadius:"30px",borderColor:"white",backgroundColor:"lightgrey"}} // Apply the style here
      >
        <BottomNavigationAction  icon={<Home/>} />
        <BottomNavigationAction  icon={<ShoppingCart />} />
        <BottomNavigationAction  icon={<Notifications />} />
        <BottomNavigationAction icon={<Avatar sx={{width:"30px",height:"30px"}}/>}/>
      </BottomNavigation>
    </Box>
  );
}
