import { useEffect, useState } from "react";


const useCartsHocks = () => {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('https://automotive-server-side-mu.vercel.app/carts')
        .then(res => res.json())
        .then(data=>setCarts(data))
    },[carts])
    return carts
};

export default useCartsHocks;