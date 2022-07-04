import Layout from '../components/Layout'
import Banner from '../components/Home/Banner'
import Contact from '../components/Contact/Contact'
import Respond from '../components/Respond/Respond'
import Care from '../components/Care/Care'
import Slide from '../components/Slides/Slides'

const Home = ({data}) => {
    console.log(data)
    
    return(
        <>
            <Layout description="Disaster Resistance Platform" title="DivoAid">             
                <Banner />   
                <Contact />
                <Slide />
                <Respond />
                <Care />
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