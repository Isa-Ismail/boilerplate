import React from 'react'
import { AppBar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }

    return (
            <AppBar position="fixed">

                <div className="flex px-16 py-5 bg-white items-center">

                    <div className="hover:cursor-pointer">
                        <p className="px-5 py-2">Divoaid</p>
                    </div>

                    <div className='flex-grow'></div>

                    <div className="md:flex space-x-5 sm:hidden">

                        <div>
                            <p className="hover:underline hover:cursor-pointer">Volunteer</p>
                        </div>
                        <div>
                            <p className="hover:underline hover:cursor-pointer">Get Aid</p>
                        </div>
                        <div>
                            <p className="hover:underline hover:cursor-pointer">News and Stories</p>
                        </div>
                        <div>
                            <p className="hover:underline hover:cursor-pointer">Donate</p>
                        </div>
                        <div>
                            <p className="hover:underline hover:cursor-pointer">About us</p>
                        </div>

                    </div>
                    
                    <div className='flex-grow'></div>

                    <div className="md:flex sm:hidden">
                        <div className="flex-col">
                            <p className="hover:underline hover:cursor-pointer">Hotline</p>
                            <p className="hover:underline hover:cursor-pointer">01781221242</p>
                        </div>
                    </div>
                    <div className="md:hidden">
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon className="text-black" />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Volunteer</MenuItem>
                            <MenuItem onClick={handleClose}>Get Aid</MenuItem>
                            <MenuItem onClick={handleClose}>News and Stories</MenuItem>
                            <MenuItem onClick={handleClose}>Donate</MenuItem>
                            <MenuItem onClick={handleClose}>About Us</MenuItem>
                        </Menu>
                        </div>
                    </div>

                </div>

            </AppBar>
  )
}

export default Navbar