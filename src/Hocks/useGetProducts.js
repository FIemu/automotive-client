import { useEffect, useState } from 'react';


const useGetProducts = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://automotive-server-side-mu.vercel.app/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[products])
  return products
};

export default useGetProducts;