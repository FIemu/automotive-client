import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const { brand_id,img_url, model_name, price, rating, type_brand, _id } = product || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete it?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`
    }).then((result) => {
      if (result.isConfirmed) {
        axios
      .delete(`https://automotive-server-side-i5w11r61j-fiemus-projects.vercel.app/products/${id}`)
      .then((res) => console.log(res.data))
      .then((error) => console.log(error));
      } else if (result.isDenied) {
        Swal.fire("Delete request rejected");
      }
    });
    
  };


  return (
    <Card className="mt-6 lg:w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img className=" h-full w-full" src={img_url} alt="card-image" />
      </CardHeader>
      <CardBody className="border mx-6 text-start">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Brand: {type_brand}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Model Name: {model_name}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Price : {price} $
        </Typography>
        <Typography className="">
          <Rating value={rating}  />
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="flex gap-8 my-4">
          <Link className="w-full" to={`/editProduct/${_id}`}>
            <Button color="blue" className="w-full font-bold">
              Edit
            </Button>
          </Link>
          <Button
            className="w-full font-bold"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </Button>
        </div>
        <Link to={`/productDetails/${_id}`}>
          <Button className="w-full font-bold">see detail</Button>
        </Link>
        <AddToCart id={_id} model_name={model_name}/>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
