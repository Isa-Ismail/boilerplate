import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Second from '../components/Second/Second'
import Respond from '../components/Respond/Respond'
import Slide from '../components/Slides/Slides'
import Donate from '../components/Donate/Donate'

const Home = ({data}) => {
    console.log(data)
    
    return(
        <>
            <Layout description="Disaster Resistance Platform" title="DivoAid">             
                <Banner />   
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
            data: 'sdad'
        }
    }
}

export default Home