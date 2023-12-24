import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../icon.png';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'rgba(18,18,18,.09)'}}>
        <Toolbar>
          <img src={logo} alt="" width={50} />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 ,ml:2}}>
          Game of Thrones
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">STORY</Button>
          <Button color="inherit">GALLERY</Button>
          <Button color="inherit">CHARCTERS</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
