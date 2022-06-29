import React from 'react'
import { AppBar } from '@mui/material'

const Navbar = () => {
  return (
            <AppBar position="fixed">

                <div className="md:flex md:space-x-10 px-16 py-3 bg-white">

                    <div>
                        <h2>logo</h2>
                    </div>

                    <div className='flex-grow'></div>

                    <div className="flex space-x-10">

                        <div>
                            <h2>link</h2>
                        </div>
                        <div>
                            <h2>link</h2>
                        </div>
                        <div>
                            <h2>link</h2>
                        </div>

                    </div>
                    
                    <div className='flex-grow'></div>

                    <div>
                        <h2>link</h2>
                    </div>

                </div>

            </AppBar>
  )
}

export default Navbar