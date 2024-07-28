
import useAuth from '../Hocks/useAuth';

import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useAuth();
    
    if(!user){
     return <Navigate to={'/login'} />
    }

    return children
};

export default PrivateRoutes;