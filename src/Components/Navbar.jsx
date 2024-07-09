import React,  { useState }  from 'react';
import Search from '../Assets/searchIcon.png';
import Cart from '../Assets/cartIcon.png';
import { Link } from 'react-router-dom';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { 
  Box, 
  Drawer, 
  List,
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  } from '@mui/material';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
      {text: "Home", path : "/shop"},
      {text: "Shop", path : "/"},
      {text: "Blog", path : "/shop"},
      {text: "Contact", path: "/shop"}
    ];
  return (
    <div className='container'>
        <h1 className='green-heading'>HOME AFFAIRS</h1>
        <div className='navbar-sidemenu'>
          <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClick={() => setOpenMenu(false)}
          anchor='right'>
            <Box
            sx={{width : 250}}
            role='presentation'
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((items) =>(
                  <ListItem key={items.text}>
                    <ListItemButton component={Link} to={items.path}>
                      <ListItemText primary = {items.text}/>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

            </Box>
        </Drawer>
        <hr />
        <div className="navbar">
            <img src={Search} className='search'/>
            <div className="navbar-links">
            <Link to="/shop" className='nav-link'>HOME</Link>
            <Link to="/" className='nav-link'>SHOP</Link>
            <Link to="/shop" className='nav-link'>ABOUT</Link>
            <Link to="/shop" className='nav-link'>BLOG</Link>
            <Link to="/shop" className='nav-link'>CONTACT US</Link>
            
            </div>
            <img src={Cart} className='cart'/>
        </div>
    </div>
  )
}

export default Navbar;