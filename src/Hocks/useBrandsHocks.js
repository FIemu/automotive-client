import { useEffect, useState } from "react"



const useBrandsHocks=()=>{
  const [brands,setbrands] = useState([]);
  useEffect(()=>{
    fetch('https://automotive-server-side-9d8nyeugx-fiemus-projects.vercel.app/brands')
    .then(res=>res.json())
    .then(data=>setbrands(data))
  },[])
  return brands
}

export default useBrandsHocks;
