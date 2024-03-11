'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import {useStateContext} from '../contexts/ContextsProvider'

import {HiMenuAlt4} from 'react-icons/hi'

import {MdClose} from 'react-icons/md'

import Link from 'next/link'


export default function AccountMenu() {

  const { navMenu ,setNavMenu ,logIn, setLogIn} = useStateContext()


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    setNavMenu(false)


  };
  const handleClose = () => {
    setAnchorEl(null);
    setNavMenu(true)

  };


  return (
    <div>

    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        
          {/* {navMenu? */}
          
            <HiMenuAlt4
            onClick={handleClick}
            className='text-white text-4xl my-3  cursor-pointer'
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
          </HiMenuAlt4>

          {/* : */}
          {/* <MdClose
            onClick={handleClick}
            className='text-white text-4xl my-3  cursor-pointer'
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
          </MdClose> */}
          
          {/* } */}
          
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            // bgcolor: 'black',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link href="/about-us">
        <MenuItem onClick={handleClose}>
        <p className='text-black my-auto font-semibold max-lg:text-base'>ABOUT-US</p>
        </MenuItem>
        </Link>
        <Link href="/activates">
        <MenuItem onClick={handleClose}>
        <p className='text-black my-auto mt-2 font-semibold max-lg:text-base'>ACTIVATES</p>
        </MenuItem>
        </Link>
        <Link href="/school-staff">
        <MenuItem onClick={handleClose}>
        <p className='text-black my-auto mt-2 font-semibold max-lg:text-base'>SCHOOL-STAFF</p>
        </MenuItem>
        </Link>
        {logIn&&
        
        <Link href="/student-profile">
         <MenuItem onClick={handleClose}>
          <p className='text-black my-auto mt-2 font-semibold max-lg:text-base'>STUDENT-PROFILE</p>
         </MenuItem>
        </Link>
       
       }

        <Divider />
        <Link href="/login">
        <MenuItem onClick={handleClose}>
        <button className=' bg-[#F89C23] my-auto  w-[300px] text-xl py-3 px-6 rounded font-bold max-lg:text-lg transition ease-in-out delay-150   hover:scale-105  duration-300' onClick={() => setLogIn(false)}>{logIn?'LogOut':'LogIn'}</button>
        </MenuItem>
        </Link>
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
          </ListItemIcon>
          Logout
        </MenuItem> */}
      </Menu>
    </React.Fragment>

</div>
  );
}
