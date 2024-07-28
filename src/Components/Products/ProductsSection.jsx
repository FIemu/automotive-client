import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "../../Hocks/useGetProducts";
import ProductCard from "../ProductCard/ProductCard";
import { Button, Carousel, Typography } from "@material-tailwind/react";
import useBrandsHocks from "../../Hocks/useBrandsHocks";

const ProductsSection = () => {
  const productsId = useParams().id;
  const products = useGetProducts();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const brands = useBrandsHocks()


  useEffect(() => {
    const filter = products.filter(
      (product) => product.brand_id === productsId
    );
    setSelectedProducts(filter);
  }, [products, productsId]);

  
  return (
    <div className="flex flex-col">
      <div className=" w-full h-[50vh]">
      <Carousel
            className="rounded-xl"
        >
            {brands.slice(3,6).map((brand) => (
                <div key={brand._id} className="relative h-full w-full">
                    <img
                        src={brand.brand_image}
                        className="h-full w-full object-cover"
                        alt={brand.brand_name} 
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 md:w-2/4 text-center">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                Advertisement of all brand
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {brand.brand_name}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                {brand.brand_details.slice(0,200)} <span className="text-xl font-bold">...</span>
                            </Typography>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
      </div>
      <div>
        {selectedProducts.length > 0 ? (
          <div className="flex flex-col justify-center items-center gap-4 my-4">
            <h1></h1>
            <div className="grid lg:grid-cols-3 gap-16">
              {isShow
                ? selectedProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))
                : selectedProducts
                    .slice(0, 3)
                    .map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
            </div>
            {selectedProducts.length > 0 && (
              <Button onClick={() => setIsShow(!isShow)}>
                {!isShow ? <p>Show all</p> : <p>show less</p>}
              </Button>
            )}
          </div>
        ) : (
          <p className="flex justify-center items-center h-screen text-pink-600 text-3xl font-bold">
            No data found
          </p>
        )}
      </div>
    </div>
  );
};


 


export default ProductsSection;
