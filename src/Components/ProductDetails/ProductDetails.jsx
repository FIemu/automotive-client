import { Link, Navigate, useParams } from "react-router-dom";
import useGetProducts from "../../Hocks/useGetProducts";
import { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import AddToCart from "../AddToCart/AddToCart";

const ProductDetails = () => {
  const productId = useParams().id;
  const products = useGetProducts();
  const [selectedProductDetails, setSelectedProductDetails] = useState({});
  const { brand_id, img_url, model_name, short_description, _id } =
    selectedProductDetails || {};

  useEffect(() => {
    const find = products.find((product) => product._id === productId);
    setSelectedProductDetails(find);
  }, [products, productId]);


  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:gap-16 lg:px-24 my-8">
      <h1 className="text-xl font-bold">Product Details of</h1>
      <Card className="w-full lg:h-[30vh] lg:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 lg:w-2/5 shrink-0 rounded-r-none"
        >
          <img src={img_url} className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {model_name}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {short_description}
          </Typography>

          <Button  variant="text" className="flex items-center gap-2 text-2xl">
            <AddToCart id={_id} model_name={model_name}/>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductDetails;
