import { Button, CardFooter } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../Provoider/AuthProvider.jsx/AuthProvider";


const SocialLink = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleSocialLink=(media)=>{
        media()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    return (
        <CardFooter className="border-t-2">
           <Button
           onClick={()=>handleSocialLink(googleSignIn)}
           className="border p-4 text-xl" color="purple">
            Google
           </Button>
        </CardFooter>
    );
};

export default SocialLink;