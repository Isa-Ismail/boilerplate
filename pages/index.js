import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Second from '../components/Second/Second'
import Slide from '../components/Slides/Slides'
import Donate from '../components/Donate/Donate'
import { sampleReq } from '../utils/fetcher'

const Home = ({data}) => {
    console.log({data})
    
    return(
        <>
            <Layout description="Disaster Resistance Platform" title="DivoAid">             
                <Banner pass = {data}/>   
                <Second />
                <Slide />
                <Donate />
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    
    return {
        props: {
            data: await sampleReq(),
        }
    }
}

export default Home