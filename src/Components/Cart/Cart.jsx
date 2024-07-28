import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Rating,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ cart }) => {
  const { _id, img_url, model_name, price, rating, type_brand } = cart || {};

  const handleRemove = (id) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Remove",
      denyButtonText: `Don't Remove`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://automotive-server-side-lqb36usn0-fiemus-projects.vercel.app/carts/${id}`)
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error));
      } else if (result.isDenied) {
        Swal.fire("Remove request failed");
      }
    });
  };

  return (
    <div>
      <Card className="mt-6 lg:w-96 hover hover:bg-sky-700 cursor-pointer ">
        <CardHeader color="blue-gray" className="relative h-64">
          <img className="w-full h-full" src={img_url} alt="card-image" />
        </CardHeader>
        <CardBody className="flex flex-col gap-3">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-red-900 font-bold"
          >
            {type_brand}
          </Typography>
          <Typography>
            <span className="font-bold">Model:</span> {model_name}
          </Typography>
          <Typography>
            <span className="font-bold">Price:</span> {price} $
          </Typography>
          <Typography>
            <Rating value={rating} />
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-between">
          <Link to={`/cartDetails/${_id}`}>
            <Button>See details</Button>
          </Link>
          <Button onClick={() => handleRemove(_id)}> Remove</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cart;
