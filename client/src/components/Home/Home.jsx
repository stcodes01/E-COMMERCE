/* eslint-disable no-unused-vars */
import { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } = useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
          console.log(res);
          setProducts(res);
        });
      };
  
    
    const getCategories = () => {
      fetchDataFromApi("/api/categories?populate=*").then((res) => {
        console.log(res);
        setCategories(res);
      });
    };


  return (
    <div className="main-content">
      <Banner />
      <div className="layout">
        <Category categories={categories} />
        <Products 
          products={products}
          headingText="Popular Products" 
         />
      </div>
    </div>
  );
};

export default Home;
