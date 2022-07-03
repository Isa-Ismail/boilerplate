import React from 'react'
import { AppBar } from '@mui/material'

const Navbar = () => {
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

                    <div>
                        <p className="hover:underline hover:cursor-pointer">Hotline</p>
                        <p className="hover:underline hover:cursor-pointer">01781221242</p>
                    </div>

                </div>

            </AppBar>
  )
}

export default Navbar