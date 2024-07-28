import { Button, CardHeader } from "@material-tailwind/react";
import { Link, Navigate } from "react-router-dom";
import SocialLink from "../Components/SocialLink/SocialLink";
import useAuth from "../Hocks/useAuth";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth({});
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail(e.target.email.value);
    setPassword(e.target.password.value);

    if (user) { 
      toast.error("one user already login", {
        position: "bottom-center",
      });
    } else {
      userLogin(email, password)
        .then((res) => {
          console.log(res.user);
          if (res.user) {
            toast.success("User login successfully", {
              position: "bottom-center",
            });
            setRedirectToLogin(true)
          }
        })
        .catch((error) => {
          console.log(error)
          if(error.code === 'auth/invalid-email'){
            toast.error('Invalid email!! please recheck email',{
              position:'bottom-center'
            })
          }else if(error.code === 'auth/invalid-credential'){
            toast.error('Wrong password!! please reenter password',{
              position:'bottom-center'
            })
          }

        }
      )
        
        ;
    }
  };
  if(redirectToLogin){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="relative flex flex-col  justify-center items-center my-8 text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
      <CardHeader className="w-1/2 text-center my-2 " color="pink">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Login
        </h4>
        <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-white">
          Nice to meet you! Enter your details to Login.
        </p>
      </CardHeader>
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
      >
        <div className="flex flex-col gap-6 mb-1">
          <h1 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Your Email
          </h1>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
            required
              name="email"
              placeholder="name@mail.com"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
          </div>
          <h1 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Password
          </h1>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
            required
              name="password"
              type="password"
              placeholder="********"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
          </div>
        </div>
        <div className="inline-flex items-center"></div>
        <Button
          className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
          color="pink"
        >
          Login
        </Button>
        <p className=" block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
          Don't have an account...please click to register? <br />
          <Link className="font-bold text-xl" to={"/register"}>
            Register
          </Link>
        </p>
      </form>
      <hr />
      <SocialLink />
    </div>
  );
};

export default Login;
