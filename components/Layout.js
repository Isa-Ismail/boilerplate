import Head from "next/head"
import { AppBar } from "@mui/material"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, title, description }) => {
    return(
        <div className="">

            <Head>
                <title>{title? `${title}`:`custom title`}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>

            <Navbar />

            <main>
                {children}
            </main>

            <Footer />


        </div>
    )
}

export default Layout