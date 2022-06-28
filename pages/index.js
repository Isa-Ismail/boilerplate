import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'

const Home = ({data}) => {
    console.log(data)
    
    return(
        <>
        <Layout description="Home page practice" title="we are the champions of the world">
            
            <main className="flex flex-col">
                
                <Banner />
                <Testimonial />

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