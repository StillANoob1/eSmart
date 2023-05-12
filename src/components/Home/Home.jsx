import React, { useEffect, useContext, useState } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const [loading, setLoading] = useState(true)
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
            setLoading(false)
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
            setLoading(false)
        });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <div id="cat"><Category categories={categories} /></div>
                   <div id="product"><Products
                        headingText="Popular Products"
                        products={products}
                        loading={loading}
                    />
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Home;