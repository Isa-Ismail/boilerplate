import React from 'react'
import { AppBar } from '@mui/material'

const Navbar = () => {
  return (
            <AppBar position="fixed">

                <div className="md:flex px-16 py-3 bg-white">

                    <div className="hover:cursor-pointer">
                        <p className="px-5 py-2">logo</p>
                    </div>

                    <div className='flex-grow'></div>

                    <div className="md:flex space-x-5">

                        <div>
                            <p className="px-5 py-2 hover:underline hover:cursor-pointer">Volunteer</p>
                        </div>
                        <div>
                            <p className="px-5 py-2 hover:underline hover:cursor-pointer">Get Aid</p>
                        </div>
                        <div>
                            <p className="px-5 py-2 hover:underline hover:cursor-pointer">News and Stories</p>
                        </div>
                        <div>
                            <p className="px-5 py-2 hover:underline hover:cursor-pointer">Donate</p>
                        </div>
                        <div>
                            <p className="px-5 py-2 hover:underline hover:cursor-pointer">About us</p>
                        </div>

                    </div>
                    
                    <div className='flex-grow'></div>

                    <div>
                        <p className="px-5 py-2 hover:underline hover:cursor-pointer">logo</p>
                    </div>

                </div>

            </AppBar>
  )
}

export default Navbar