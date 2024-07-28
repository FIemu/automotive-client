import { useContext } from "react";
import { AuthContext } from "../Components/Provoider/AuthProvider.jsx/AuthProvider";


const useAuth = () => {
    const all = useContext(AuthContext);
    return all;
};

export default useAuth;