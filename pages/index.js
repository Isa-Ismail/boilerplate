import Layout from '../components/Layout'
import Banner from '../components/Home/Banner'
import Contact from '../components/Contact/Contact'

const Home = ({data}) => {
    console.log(data)
    
    return(
        <>
            <Layout description="Home page practice" title="we are the champions of the world">
                
                <main className="flex flex-col pt-[10rem]">
                    
                    <Banner />
                    
                    <Contact />

                </main>
                
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    
    return {
        props: {
            data: 'sdad'
        }
    }
}

export default Home