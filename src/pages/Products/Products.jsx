import Title from "../../component/Title";
import PageTitle from "../../component/PageTitle";
import ProductCard from "../../component/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const titles = [{ head: "Products Component" }];
  const [products, setproducts] = useState([]);

  async function getProducts() {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    setproducts(data.data);
  }

  function deleteProduct(id) {
    setproducts(prev =>
      prev.filter(product => product.id !== id)
    );
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <PageTitle title="Products Page" />
      <div className="section-bg-white px-[5%] py-[70px] gallery-secion">
        <Title titles={titles} />
        <div className="grid grid-cols-3 gap-[20px] mt-[30px]">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              del={deleteProduct}
            />
          ))}
        </div>
      </div>
    </>
  );
}
