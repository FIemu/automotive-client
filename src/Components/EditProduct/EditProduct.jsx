import {
    Card,
    Input,
    Button,
    Typography,
    CardHeader,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "../../Hocks/useGetProducts";
import axios from "axios";
import Swal from "sweetalert2";

const EditProduct = () => {

  const products = useGetProducts();
  const selectedId = useParams().id;
  const [selectedProductShow,setSelectedProductShow] = useState({});
  const {img_url,model_name,price,rating,short_description,type_brand} = selectedProductShow || {};
  useEffect(()=>{
    const find = products.find((product)=>product._id === selectedId);
    setSelectedProductShow(find)
  },[products,selectedId])


  const [optionValue, setOptionValue] = useState('BMW');
  const handleChange = (e) => {
    setOptionValue(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const img_url = e.target.img_url.value;
    const model_name = e.target.model_name.value;
    const type_brand = optionValue;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const short_description = e.target.short_description.value;

    const newObject ={
      img_url,
      model_name,
      type_brand,
      price,
      rating,
      short_description
    }
    
    axios
    .put(`https://automotive-server-side-lqb36usn0-fiemus-projects.vercel.app/products/${selectedId}`,newObject,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>{
      if(res.data.acknowledged){
        Swal.fire({
          title: "Updated!",
          text: "Your product have been successfully updated",
          icon: "success"
        });
      }
    })
    .then(error=>console.log(error))
  }


  return (
    <div className="flex flex-col justify-center items-center h-[110vh] lg:h-screen">
      <Card
        color="transparent"
        shadow={false}
        className="flex flex-col justify-center items-center"
      >
        <CardHeader className="p-4" color="pink">
          <Typography variant="h4" color="">
            Edit Product
          </Typography>
          <Typography color="" className="mt-1 font-semibold">
            Nice to meet you! Enter your details to Edit product.
          </Typography>
        </CardHeader>
        <form
        onSubmit={handleSubmit}
          className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Image URL
            </Typography>
            <Input 
              defaultValue={img_url}
              name="img_url"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Model Name
            </Typography>
            <Input
            defaultValue={model_name}
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
            defaultValue={type_brand}
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
            defaultValue={price}
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
              defaultValue={rating}
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
            defaultValue={short_description}
              className="border"
              name="short_description"
              rows={3}
              cols={40}
            />
          </div>
          <Button type="submit" color="pink" className="mt-6" fullWidth>
            Upgrade
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default EditProduct;
