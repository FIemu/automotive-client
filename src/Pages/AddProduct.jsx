import {
  Card,
  Input,
  Button,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import { useState, useEffect} from "react";
import UseBrandsHocks from "./../Hocks/useBrandsHocks";
import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const getBrands = UseBrandsHocks();
  const [optionValue, setOptionValue] = useState("BMW");
  const [brand_id, setBrand_id] = useState("");

  const handleChange = (e) => {
    setOptionValue(e.target.value);
  };

  useEffect(() => {
    const find = getBrands?.find((brand) => brand.brand_name === optionValue);
    setBrand_id(find?._id);
  }, [getBrands, optionValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const img_url = e.target.img_url.value;
    const model_name = e.target.model_name.value;
    const type_brand = optionValue;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const short_description = e.target.short_description.value;


    const product = {
      brand_id,
      img_url,
      model_name,
      type_brand,
      price,
      rating,
      short_description,
    };

    axios
      .post("https://automotive-server-side-mu.vercel.app/products", product, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Good job!",
            text: "Product successfully added",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" flex flex-col justify-center items-center h-[110vh] lg:h-screen">
      <Card
        color="transparent"
        shadow={false}
        className="flex flex-col justify-center items-center"
      >
        <CardHeader className="lg:p-4" color="pink">
          <Typography variant="h4" color="">
            Add Product
          </Typography>
          <Typography color="" className="mt-1 font-semibold">
            Nice to meet you! Enter your details to add product.
          </Typography>
        </CardHeader>
        <form
          onSubmit={handleSubmit}
          className="mt-4 mb-2  w-max lg:w-96"
        >
          <div className="mb-1 w-full flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Image URL
            </Typography>
            <Input
              name="img_url"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Model Name
            </Typography>
            <Input
              name="model_name"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Pick a brand
            </Typography>
            <select
              name="type_brand"
              value={optionValue}
              onChange={handleChange}
            >
              <option value="BMW">BMW</option>
              <option value="AUDI">AUDI</option>
              <option value="Mercedes Benz">Mercedes Benz</option>
              <option value="Lamborghini">Lamborghini</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Koenigsegg Agera">Koenigsegg Agera</option>
            </select>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price
            </Typography>
            <Input
              name="price"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Rating
            </Typography>
            <Input
              name="rating"
              defaultValue={0}
              type="number"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Short description
            </Typography>
            <textarea
              className="border"
              name="short_description"
              rows={3}
              cols={40}
            />
          </div>
          <Button type="submit" color="pink" className="mt-6" fullWidth>
            Add button
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
