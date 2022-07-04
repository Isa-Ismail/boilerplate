import { Grid } from "@mui/material"
import Image from "next/image"
const Contact = () => {
  return (
    <div className="bg-white px-10 py-20 md:flex item">

      <Grid container spacing={4} className="items-center">

        <Grid item md = {3} className="space-y-20">
          <div className="flex space-x-10 items-center">
            <Image src="/shop.png" height={50} width={50}/>
            <div>
              <h2>Need Help Now</h2>
              <p>lore sdf sd sf s sdf sd sdf  we sdfwe w w wef wf wef w w m</p>
            </div>
          </div>
          <div className="flex space-x-10 items-center">
            <Image src="/shop.png" height={50} width={50}/>
            <div>
              <h2>Need Help Now</h2>
              <p>lore sdf sd sf s sdf sd sdf  we sdfwe w w wef wf wef w w m</p>
            </div>
          </div>
        </Grid>

        <Grid item md = {3}>
          <div className="flex space-x-10 items-center">
            <Image src="/shop.png" height={50} width={50}/>
            <div>
              <h2>Need Help Now</h2>
              <p>lore sdf sd sf s sdf sd sdf  we sdfwe w w wef wf wef w w m</p>
            </div>
          </div>
        </Grid>

        <Grid className="!flex !justify-center" item md= {6}>
          <Image src="/shop.png" height={500} width={500}/>
        </Grid>

      </Grid>

    </div>
  )
}

export default Contact