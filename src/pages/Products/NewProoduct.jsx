import axios from "axios"
import { useEffect, useState } from "react"

export default function NewProduct() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getProducts() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      )
      setProducts(data.data)
    } catch (err) {
      setError("Failed to load products")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <div>
      {products.map(product => (
        <h4 key={product._id}>{product.title}</h4>
      ))}
    </div>
  )
}
