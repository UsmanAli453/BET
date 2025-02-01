import React, { useState, useEffect } from "react";
import { Footer, GoToTop, Header } from "./components/component";

// Loader component with GIF
const Loader = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-white z-50">
      <img
        src="https://loading.io/assets/mod/spinner/spinner/lg.gif"
        alt="Loading..."
        className="w-32h-32" // Adjust size as needed
      />
    </div>
  );
};

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // Simulating a load delay (replace with actual data fetching logic if needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 1500);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return loading ? (
    <Loader /> // Show GIF loader if loading is true
  ) : (
    <div>
      <Header />
      <div className="pt-12 md:pt-10">{children}</div>
      <GoToTop />
      <Footer />
    </div>
  );
};

export default Layout;
