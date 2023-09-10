import path from 'path'
import fs from 'fs/promises'
import Link from 'next/link'

function HomePage(props) {
  const { products } = props 

  return (
    <ul>
      {
        products.map((product)=> (
          <Link href = {`/${product.id}`} key={product.id} ><li >{product.title}</li></Link>
        ))
      }
    </ul>
  );
}


// This function tells nextjs to pre-render this page at build time using the props returned by this function
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData);


  
  return {
    props: {
      products: data.products
    }, // will be passed to the page component as props
    revalidate: 10
  }
}

export default HomePage;


