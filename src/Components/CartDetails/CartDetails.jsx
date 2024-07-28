import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  rating,
  Rating,
} from "@material-tailwind/react";
import useCartsHocks from "../../Hocks/useCartsHocks";

const CartDetails = () => {
  const cartId = useParams().id;
  const carts = useCartsHocks();
  const [selectedProductDetails, setSelectedProductDetails] = useState({});
  const { brand_id, img_url, model_name, short_description, _id, type_brand,rating } =
    selectedProductDetails || {};

  useEffect(() => {
    const find = carts.find((product) => product._id === cartId);
    setSelectedProductDetails(find);
  }, [carts, cartId]);

  


  return (
    <div className="flex flex-col justify-center items-center lg:gap-16 px-4 lg:px-24 my-4 lg:my-6">
      <h1 className="text-xl font-bold">Product Details of</h1>
      <Card className=" lg:w-full lg:h-[30vh] lg:flex-row my-4 lg:my-0">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 lg:w-2/5 shrink-0 rounded-r-none"
        >
          <img src={img_url} className="h-full w-full lg:w-full object-cover" />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {type_brand}
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {model_name}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {short_description}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            <Rating value={rating}/>
          </Typography>

        </CardBody>
      </Card>
    </div>
  );
};

export default CartDetails;
