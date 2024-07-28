import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BrandCart = ({ brand }) => {
  const { _id, brand_name, brand_image, brand_details } = brand || {};

  return (
    <Link to={`/productsSection/${_id}`}>
      <Card className="mt-6 w-[300px] lg:w-96 hover hover:bg-sky-700 cursor-pointer ">
        <CardHeader color="blue-gray" className="relative h-64">
          <img className="w-full h-full" src={brand_image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-red-900 font-bold"
          >
            {brand_name}
          </Typography>
          <Typography>
            {brand_details?.slice(0, 100)}{" "}
            <span className="font-bold">.....</span>
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BrandCart;
