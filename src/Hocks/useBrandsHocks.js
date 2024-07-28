import { useEffect, useState } from "react"



const useBrandsHocks=()=>{
  const [brands,setbrands] = useState([]);
  useEffect(()=>{
    fetch('https://automotive-server-side-i5w11r61j-fiemus-projects.vercel.app/brands')
    .then(res=>res.json())
    .then(data=>setbrands(data))
  },[])
  return brands
}

export default useBrandsHocks;
