import { useLoaderData } from "react-router-dom";
import Brands from "../Components/Brands/Brands";
import Banner from "../Components/Header/Banner";
import Section1 from "../Components/Extra/Section1";
import Section2 from "../Components/Extra/Section2";

const Home = () => {
    const brands = useLoaderData();
    return (
        <div className="flex flex-col justify-center items-center">
            <Banner/>
            <Brands brands={brands}/>
            <Section1/>
            <Section2/>
        </div>
    );
};

export default Home;