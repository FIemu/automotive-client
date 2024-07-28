import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <div className="w-full lg:w-[1500px] mx-auto">
        <Navbar theme={theme} handleToggleTheme={handleToggleTheme} />
        <Outlet theme={theme}></Outlet>
        <Toaster />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
