
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import Productslist from '../components/Productslist'
import Head from 'next/head'




const IndexPage = ({products}) => {



return(
<>
<Head>
 <title>Eccomerce website</title>
</Head>
<Nav></Nav>
<main className='max-w-screen-2xl mx-auto'>
    <Slider></Slider>
    <Productslist products={products}></Productslist>
</main>
</>
)}

export default IndexPage

export async function getServerSideProps() {
    const products = await fetch('https://fakestoreapi.com/products?limit=12')
    .then(res=>{
        return(
            res.json()
        )
    })

    return{
        props:{
            products
        }
    }
}
