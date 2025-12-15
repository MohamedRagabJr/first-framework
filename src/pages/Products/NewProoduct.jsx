import axios from "axios"
import { useEffect, useState } from "react"
import { SiUfc } from "react-icons/si";

export default function NewProoduct() {
    const [products, setproducts] = useState([]);
    // async function getProducts(){
    //     try{
    //         let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    //     setproducts(data.data);
    //     }
    //     catch (error){
    //         console.log(error);
    //     }
        
    // }
    async function getProducts(){
        try{
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/producta`);
            setproducts(data.data);
        }catch(error){
            return <h2>error page</h2>
        }
     
    }
    useEffect(function(){
        getProducts()
    } , [])
  return (
    <div>
      
    </div>
  )
}
