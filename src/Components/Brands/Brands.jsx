import useBrandsHocks from "../../Hocks/useBrandsHocks";
import BrandCart from "../BrandCart/BrandCart";


const Brands = () => {

    const brands = useBrandsHocks();
    

    return (
        <div className="w-full mx-auto my-8">
            <h1 className="text-center my-4 text-3xl text-red-900 font-extrabold ">
                All Popular Brands
            </h1>
            <div className="w-max mx-auto grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-6 lg:gap-20">
                {
                    brands?.map((brand)=><BrandCart key={brand._id} brand={brand}/>)
                }
            </div>
        </div>
    );
};

export default Brands;