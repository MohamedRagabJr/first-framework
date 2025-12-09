import Title from "../Title";
import PageTitle from "../PageTitle";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import img4 from "../../assets/poert1.png";
import img5 from "../../assets/port2.png";
import img6 from "../../assets/port3.png";
import ProductCard from "../ProductCard";
import { useState } from "react";

export default function Products() {
  const titles = [
    { head: "Products Component" },
  ];
  const [products ,setproducts] = useState([
    {
      id: "10",
      title: "T-Shirt",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam consequuntur mollitia distinctio veritatis. Ducimus?",
      price: "2500",
      onsale: true,
      img: img1,
    },
    {
      id: "11",
      title: "Jeans",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam consequuntur mollitia distinctio veritatis. Ducimus?",
      price: "1500",
      onsale: true,
      img: img2,
    },
    {
      id: "12",
      title: "Short",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam consequuntur mollitia distinctio veritatis. Ducimus?",
      price: "1600",
      onsale: true,
      img: img3,
    },
    {
      id: "13",
      title: "Shoes",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam consequuntur mollitia distinctio veritatis. Ducimus?",
      price: "1350",
      onsale: true,
      img: img4,
    },
    {
      id: "14",
      title: "Jacket",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam consequuntur mollitia distinctio veritatis. Ducimus?",
      price: "5200",
      onsale: true,
      img: img5,
    },
    {
      id: "15",
      title: "Hodey",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam consequuntur mollitia distinctio veritatis. Ducimus?",
      price: "1740",
      onsale: true,
      img: img6,
    },
  ]);

  function deleteProduct(id){
    let myProducts = structuredClone(products);
    let newProducts = myProducts.filter(function (currentItem){
        return id !== currentItem.id
    });
    setproducts(newProducts)
  }

//   function deleteProduct(id){
//     let myProduct = structuredClone(products);
//     let newProducts = myProduct.filter( function(currentItem){
//         return id !== currentItem.id
//     });
//     setproducts(newProducts)
//   }
  return (
    <>
    <PageTitle title="Products Page" />
    <div className="section-bg-white px-[5%] py-[70px] gallery-secion">
        <Title titles={titles} />
        <div className="grid grid-cols-3 gap-4 mt-[30px]">
            {products.map((product, index) => (
            <ProductCard key={index} product={product} del={deleteProduct}/>
            ))}
        </div>
      </div>
    </>
  );
}
