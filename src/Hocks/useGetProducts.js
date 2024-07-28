import { useEffect, useState } from 'react';


const useGetProducts = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://automotive-server-side-9d8nyeugx-fiemus-projects.vercel.app/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[products])
  return products
};

export default useGetProducts;