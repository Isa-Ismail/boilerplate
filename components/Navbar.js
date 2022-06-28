import React from 'react'
import { AppBar } from '@mui/material'

const Navbar = () => {
  return (
            <AppBar position="fixed">

                <nav className="flex space-x-10 px-16 py-3 bg-white">

                    <div>
                        <h2>logo</h2>
                    </div>

                    <div className="flex-grow"></div>

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
                </nav>
                
            </AppBar>
  )
}

export default Navbar