import { Button, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Donate = () => {
  return (
    <div className="bg-white px-[10rem] py-20">
      <div className="py-10">
        <h1>Donate to help other organizations</h1>
        <Grid container spacing={12} className="items-center pt-10">
          <Grid item md={6} className="space-y-10">
            <h2>
              Bidyanondo
            </h2>
            <p>
              Bidyanondo foundation is a non profit organization registered under Bangladesh Department of Social Services. It helps the poor community of Bangladesh and performs various social activites.
            </p>
            <Button className="!bg-green-700 text-white">Learn more</Button>
          </Grid>
          <Grid item md={6}>
            <Image src="/floodLanding.jpg" width={450} height= {450} className="rounded-md" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Donate