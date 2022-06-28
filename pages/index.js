import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'

const Home = ({data}) => {
    console.log(data)
    
    return(
        <>
        <Layout description="Home page practice" title="we are the champions of the world">
            
            <main className='flex flex-col'>
                
                <Banner />
                
                <div className='h-[100vh] w-[100%] px-[8rem] bg-gradient-to-r from-purple-500 to-pink-500'>
                    <Testimonial />
                    <h1>{data}</h1>
                </div>

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