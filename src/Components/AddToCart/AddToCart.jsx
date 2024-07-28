import { Button } from "@material-tailwind/react";
import axios from "axios";
import useGetProducts from "../../Hocks/useGetProducts";
import useCartsHocks from "../../Hocks/useCartsHocks";
import Swal from "sweetalert2";
import useAuth from "../../Hocks/useAuth";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const AddToCart = ({ id, model_name }) => {

  const products = useGetProducts();
  const carts = useCartsHocks();
  const { user } = useAuth();
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleAddCart = (id) => {
    if (!user) {
      setRedirectToLogin(true); 
      return; 
    }
    const existCart = carts?.find((cart) => cart.model_name === model_name);
    if (existCart) {
      Swal.fire({
        position: "top-end",
        icon: "Error",
        title: "This cart already exist",
        showConfirmButton: false,
        timer: 1500,
      })
      return;
    } else {
      const find = products?.find((product) => product?._id === id);
      axios
        .post(`https://automotive-server-side-9d8nyeugx-fiemus-projects.vercel.app/carts`, find, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "This card has been saved to my carts",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .then((error) => console.log(error));
    }
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <Button onClick={() => handleAddCart(id)} className="w-full my-2">
      Add to cart
    </Button>
  );
};

export default AddToCart;
